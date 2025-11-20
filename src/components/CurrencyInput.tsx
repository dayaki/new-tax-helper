"use client";

import { ChangeEvent, useState, useEffect } from "react";

interface CurrencyInputProps {
    value: number | "";
    onChange: (value: number | "") => void;
    placeholder?: string;
    className?: string;
    label?: string;
}

export default function CurrencyInput({
    value,
    onChange,
    placeholder,
    className,
    label,
}: CurrencyInputProps) {
    const [displayValue, setDisplayValue] = useState("");

    // Update display value when prop value changes
    useEffect(() => {
        if (value === "" || value === undefined || value === null) {
            setDisplayValue("");
        } else {
            // Format with commas
            setDisplayValue(value.toLocaleString("en-NG"));
        }
    }, [value]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        // Remove commas and non-numeric characters (except dot)
        const rawValue = inputValue.replace(/,/g, "");

        // Check if it's a valid number or empty
        if (rawValue === "") {
            onChange("");
            setDisplayValue("");
            return;
        }

        // Allow typing only numbers and one dot
        if (!/^\d*\.?\d*$/.test(rawValue)) {
            return;
        }

        // Update parent with numeric value
        const numericValue = parseFloat(rawValue);
        onChange(isNaN(numericValue) ? "" : numericValue);

        // We don't update displayValue here immediately to avoid cursor jumping issues
        // The useEffect will handle it, but for smooth typing of "1000" -> "1,000", 
        // we might need to handle cursor or just let React re-render.
        // For simple appending, updating state via prop is usually fine.
        // However, typing "." can be tricky if we format immediately.

        // Optimization: If the user is typing a dot or decimal part, don't force format immediately
        // to avoid messing up the input.
        if (inputValue.endsWith(".") || (inputValue.includes(".") && inputValue.split(".")[1].length === 0)) {
            setDisplayValue(inputValue);
        } else {
            // Let the useEffect format it, but this might cause jump.
            // A common trick is to set display value to what user typed, 
            // and only format on blur. But user asked "as user types".
            // Let's try setting it to the formatted version immediately.

            // If we are just appending digits, toLocaleString works well.
            // But if we are editing in middle, it jumps.
            // For this simple app, we'll assume mostly appending.

            // Actually, if we setDisplayValue here to formatted, it gives instant feedback.
            // But we need to handle the dot case.
            if (!inputValue.endsWith(".")) {
                // If it's a complete number, we can format it, but wait...
                // If I type "1", value is 1, display is "1".
                // Type "0", value is 10, display is "10".
                // Type "0", value is 100, display is "100".
                // Type "0", value is 1000, display is "1,000".
                // This works for integers.
                // For decimals: "1000." -> value is 1000. Display "1,000". Dot is lost!
                // So we must preserve the dot in local state if it's not in the number yet.
            }
        }
    };

    // To fix the "dot disappearing" issue:
    // We need to distinguish between "prop update" and "user typing".
    // But simpler: Just use a text input that formats on change, but respects the dot.

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        let val = e.target.value;

        // Allow clearing
        if (val === "") {
            onChange("");
            setDisplayValue("");
            return;
        }

        // Remove invalid chars
        const cleanVal = val.replace(/[^0-9.]/g, "");

        // Prevent multiple dots
        const parts = cleanVal.split(".");
        if (parts.length > 2) return;

        // Format the integer part
        const integerPart = parts[0];
        const decimalPart = parts.length > 1 ? "." + parts[1] : "";

        const formattedInt = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const newDisplay = formattedInt + decimalPart;

        setDisplayValue(newDisplay);

        // Parse for parent
        const num = parseFloat(cleanVal);
        if (!isNaN(num)) {
            onChange(num);
        }
    };

    return (
        <div>
            {label && <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">{label}</label>}
            <input
                type="text"
                value={displayValue}
                onChange={handleInputChange}
                placeholder={placeholder}
                className={`w-full bg-gray-50 border-transparent rounded-2xl py-3 px-4 text-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all placeholder:text-gray-400 ${className}`}
            />
        </div>
    );
}
