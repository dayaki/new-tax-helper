"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "Is my bank account taxed directly?",
        answer: "No. Personal Income Tax is charged on your income (salary, business profit), not on your bank deposits or transfers. However, there are other levies like EMTL (electronic transfer levy) which are different from Income Tax."
    },
    {
        question: "What if I am self-employed or a freelancer?",
        answer: "You still need to pay tax if you earn above ₦800,000 a year. You will calculate your total profit (Income minus Expenses) and apply the same tax rates. You should file your returns directly with the tax authority."
    },
    {
        question: "How do I get a Tax ID (TIN)?",
        answer: "You can apply for a Joint Tax Board (JTB) TIN online at the JTB website or visit the nearest tax office. Your BVN or NIN is usually required for registration."
    },
    {
        question: "When do I file my taxes?",
        answer: "For individuals, the deadline for filing tax returns is usually March 31st of the following year. For example, you file for 2026 income by March 31st, 2027."
    },
    {
        question: "Is this federal or state tax?",
        answer: "Personal Income Tax is a federal law but it is collected by the State Government where you reside (e.g., LIRS for Lagos, FIRS for Abuja residents and specific categories like police/military)."
    },
    {
        question: "What if my salary is irregular?",
        answer: "If your income changes every month, it's best to calculate your tax based on your total annual income at the end of the year. If you are an employee, your employer usually adjusts this under the PAYE (Pay As You Earn) system."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className={`border rounded-2xl bg-white overflow-hidden transition-all duration-300 ${openIndex === index ? "border-primary/30 shadow-lg shadow-primary/5" : "border-gray-100 hover:border-primary/20"
                        }`}
                >
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-gray-50/50 transition-colors"
                    >
                        <span className={`font-bold text-lg ${openIndex === index ? "text-primary" : "text-gray-900"}`}>
                            {faq.question}
                        </span>
                        {openIndex === index ? (
                            <div className="bg-primary/10 p-1 rounded-full">
                                <ChevronUp className="w-5 h-5 text-primary" />
                            </div>
                        ) : (
                            <div className="bg-gray-100 p-1 rounded-full">
                                <ChevronDown className="w-5 h-5 text-gray-500" />
                            </div>
                        )}
                    </button>
                    <div
                        className={`px-6 text-gray-600 leading-relaxed bg-gray-50/30 transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        <div className="pt-2">{faq.answer}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
