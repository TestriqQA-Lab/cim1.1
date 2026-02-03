
import { createClient } from 'next-sanity';
import fs from 'fs';
import path from 'path';

// --- Simple Env Loader ---
function loadEnv() {
    try {
        const envPath = path.resolve(process.cwd(), '.env.local');
        if (fs.existsSync(envPath)) {
            const envConfig = fs.readFileSync(envPath, 'utf8');
            envConfig.split('\n').forEach((line) => {
                const [key, value] = line.split('=');
                if (key && value) {
                    process.env[key.trim()] = value.trim();
                }
            });
            console.log('✅ Loaded .env.local');
        } else {
            console.warn('⚠️ .env.local not found');
        }
    } catch (error) {
        console.error('Error loading env:', error);
    }
}

loadEnv();

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !dataset || !token) {
    console.error('❌ Missing required environment variables (NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, SANITY_API_TOKEN)');
    process.exit(1);
}

const client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-30',
    useCdn: false, // We need fresh data for migration
    token, // Write token required
});

async function runMigration() {
    try {
        console.log('🔄 Fetching posts with Legacy Markdown Content...');

        // Fetch posts that HAVE markdownContent
        const posts = await client.fetch(
            `*[_type == "post" && defined(markdownContent)] {
                _id,
                title,
                content,
                markdownContent
            }`
        );

        console.log(`🔎 Found ${posts.length} posts to check.`);

        if (posts.length === 0) {
            console.log('✅ No posts with Legacy Markdown Content found.');
            return;
        }

        const transaction = client.transaction();
        let patchesCount = 0;
        let skippedCount = 0;

        for (const post of posts) {
            // SAFEGUARD: Only delete if 'content' (new blocks) exists and is not empty
            const hasModernContent = post.content && Array.isArray(post.content) && post.content.length > 0;

            if (hasModernContent) {
                console.log(`🗑️  Marking for cleanup: "${post.title}"`);
                transaction.patch(post._id, (p) => p.unset(['markdownContent']));
                patchesCount++;
            } else {
                console.warn(`⚠️  SKIPPING: "${post.title}" - New 'content' field is empty! Migrate content first.`);
                skippedCount++;
            }
        }

        if (patchesCount > 0) {
            console.log(`💾 Committing changes for ${patchesCount} posts...`);
            await transaction.commit();
            console.log('✅ Migration complete! Legacy content removed from migrated posts.');
        } else {
            console.log('ℹ️  No changes to commit.');
        }

        if (skippedCount > 0) {
            console.warn(`⚠️  Skipped ${skippedCount} posts because they lack modern content blocks.`);
        }

    } catch (error) {
        console.error('❌ Migration failed:', error);
        process.exit(1);
    }
}

runMigration();
