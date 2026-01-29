"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

// Utility for class merging (simplified version of cn without dependencies)
function cn(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(" ");
}

const AccordionContext = React.createContext<{
    value?: string | string[];
    onValueChange?: (value: string) => void;
    type?: "single" | "multiple";
    collapsible?: boolean;
}>({});

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
    type: "single" | "multiple";
    collapsible?: boolean;
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
    ({ className, type, collapsible, value: controlledValue, defaultValue, onValueChange, children, ...props }, ref) => {
        const [value, setValue] = React.useState<string | undefined>(defaultValue);

        const handleValueChange = (itemValue: string) => {
            const newValue = itemValue === value && collapsible ? "" : itemValue;
            setValue(newValue);
            if (onValueChange) {
                onValueChange(newValue);
            }
        };

        return (
            <AccordionContext.Provider value={{ value: controlledValue ?? value, onValueChange: handleValueChange, type, collapsible }}>
                <div ref={ref} className={cn("space-y-1", className)} {...props}>
                    {children}
                </div>
            </AccordionContext.Provider>
        );
    }
);
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { value: string }>(
    ({ className, value, ...props }, ref) => (
        <div ref={ref} className={cn("border-b", className)} {...props} data-value={value} />
    )
);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
    ({ className, children, ...props }, ref) => {
        const { value, onValueChange } = React.useContext(AccordionContext);
        // Find the parent item value
        // This is a bit hacky without a properItemContext, but works if checking structure. 
        // Better: wrap Item in Context.

        return (
            <AccordionItemContext.Consumer>
                {({ value: itemValue }) => {
                    const isOpen = value === itemValue;
                    return (
                        <div className="flex">
                            <button
                                ref={ref}
                                onClick={() => onValueChange?.(itemValue)}
                                className={cn(
                                    "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
                                    className
                                )}
                                data-state={isOpen ? "open" : "closed"}
                                {...props}
                            >
                                {children}
                                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                            </button>
                        </div>
                    )
                }}
            </AccordionItemContext.Consumer>
        );
    }
);
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, children, ...props }, ref) => {
        const { value } = React.useContext(AccordionContext);

        return (
            <AccordionItemContext.Consumer>
                {({ value: itemValue }) => {
                    const isOpen = value === itemValue;
                    return (
                        <div
                            ref={ref}
                            className={cn(
                                "grid overflow-hidden text-sm transition-all duration-200 ease-in-out data-[state=closed]:grid-rows-[0fr] data-[state=open]:grid-rows-[1fr]",
                                className
                            )}
                            data-state={isOpen ? "open" : "closed"}
                            {...props}
                        >
                            <div className="overflow-hidden">
                                <div className="pb-4 pt-0">{children}</div>
                            </div>
                        </div>
                    );
                }}
            </AccordionItemContext.Consumer>
        )
    }
);
AccordionContent.displayName = "AccordionContent";

// Helper context for Item
const AccordionItemContext = React.createContext<{ value: string }>({ value: "" });

// Re-defining AccordionItem to provide context
const AccordionItemWithContext = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { value: string }>(
    ({ className, value, children, ...props }, ref) => (
        <AccordionItemContext.Provider value={{ value }}>
            <div ref={ref} className={cn("border-b", className)} {...props}>
                {children}
            </div>
        </AccordionItemContext.Provider>
    )
);
AccordionItemWithContext.displayName = "AccordionItem";


export { Accordion, AccordionItemWithContext as AccordionItem, AccordionTrigger, AccordionContent };
