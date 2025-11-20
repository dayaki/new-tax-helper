"use client";

import { useState } from "react";
import { Calculator, Info, ChevronRight } from "lucide-react";
import CurrencyInput from "./CurrencyInput";

export default function TaxCalculator() {
    const [employmentType, setEmploymentType] = useState("salaried");
    const [incomeAmount, setIncomeAmount] = useState<number | "">("");
    const [rentAmount, setRentAmount] = useState<number | "">("");
    const [pensionRate, setPensionRate] = useState(8);
    const [nhfRate, setNhfRate] = useState(2.5);

    const calculateTax = () => {
        if (!incomeAmount) return null;

        let annualIncome = Number(incomeAmount);
        // Deductions
        // Rent Relief: Lower of N500,000 or 20% of Annual Rent
        const rentRelief = rentAmount ? Math.min(500000, Number(rentAmount) * 0.2) : 0;

        // Pension: 8% of Gross (default)
        const pensionDeduction = (annualIncome * pensionRate) / 100;

        // NHF: 2.5% of Gross
        const nhfDeduction = (annualIncome * nhfRate) / 100;

        // Consolidated Relief Allowance (CRA) - New Law simplifies this? 
        // Actually, the prompt implies using these specific deductions. 
        // The new law has specific reliefs. We'll stick to the user's request for these sliders.

        // Taxable Income
        let taxableIncome = Math.max(0, annualIncome - rentRelief - pensionDeduction - nhfDeduction);
        let taxPayable = 0;
        let breakdown = [];

        // Tax Bands
        // 1. First 800k @ 0%
        const band1 = Math.min(taxableIncome, 800000);
        breakdown.push({ band: "First ₦800,000", rate: "0%", amount: 0 });
        taxableIncome -= band1;

        // 2. Next 2.2M @ 15%
        if (taxableIncome > 0) {
            const band2 = Math.min(taxableIncome, 2200000);
            const tax = band2 * 0.15;
            taxPayable += tax;
            breakdown.push({ band: "Next ₦2,200,000", rate: "15%", amount: tax });
            taxableIncome -= band2;
        }

        // 3. Next 9M @ 18%
        if (taxableIncome > 0) {
            const band3 = Math.min(taxableIncome, 9000000);
            const tax = band3 * 0.18;
            taxPayable += tax;
            breakdown.push({ band: "Next ₦9,000,000", rate: "18%", amount: tax });
            taxableIncome -= band3;
        }

        // 4. Next 13M @ 21%
        if (taxableIncome > 0) {
            const band4 = Math.min(taxableIncome, 13000000);
            const tax = band4 * 0.21;
            taxPayable += tax;
            breakdown.push({ band: "Next ₦13,000,000", rate: "21%", amount: tax });
            taxableIncome -= band4;
        }

        // 5. Next 25M @ 23%
        if (taxableIncome > 0) {
            const band5 = Math.min(taxableIncome, 25000000);
            const tax = band5 * 0.23;
            taxPayable += tax;
            breakdown.push({ band: "Next ₦25,000,000", rate: "23%", amount: tax });
            taxableIncome -= band5;
        }

        // 6. Above 50M (Remaining) @ 25%
        if (taxableIncome > 0) {
            const tax = taxableIncome * 0.25;
            taxPayable += tax;
            breakdown.push({ band: "Above ₦50,000,000", rate: "25%", amount: tax });
        }

        return {
            annualIncome,
            taxableIncome,
            taxPayable,
            rentRelief,
            pensionDeduction,
            nhfDeduction,
            breakdown,
            effectiveRate: annualIncome > 0 ? (taxPayable / annualIncome) * 100 : 0
        };
    };

    const calculateOldTax = (annualIncome: number, pension: number) => {
        // Old CRA: Higher of 200k or 1% of Gross + 20% of Gross
        const consolidatedRelief = Math.max(200000, annualIncome * 0.01) + (annualIncome * 0.20);

        // Taxable Income (Old)
        let taxable = Math.max(0, annualIncome - consolidatedRelief - pension);
        let tax = 0;

        // Old Bands
        // 1. First 300k @ 7%
        const b1 = Math.min(taxable, 300000);
        tax += b1 * 0.07;
        taxable -= b1;

        // 2. Next 300k @ 11%
        if (taxable > 0) {
            const b2 = Math.min(taxable, 300000);
            tax += b2 * 0.11;
            taxable -= b2;
        }

        // 3. Next 500k @ 15%
        if (taxable > 0) {
            const b3 = Math.min(taxable, 500000);
            tax += b3 * 0.15;
            taxable -= b3;
        }

        // 4. Next 500k @ 19%
        if (taxable > 0) {
            const b4 = Math.min(taxable, 500000);
            tax += b4 * 0.19;
            taxable -= b4;
        }

        // 5. Next 1.6M @ 21%
        if (taxable > 0) {
            const b5 = Math.min(taxable, 1600000);
            tax += b5 * 0.21;
            taxable -= b5;
        }

        // 6. Above 3.2M @ 24%
        if (taxable > 0) {
            tax += taxable * 0.24;
        }

        return tax;
    };

    const result = calculateTax();
    const oldTax = (result && employmentType === "salaried") ? calculateOldTax(result.annualIncome, result.pensionDeduction) : null;
    const monthlyNewTakeHome = result ? (result.annualIncome - result.taxPayable - result.pensionDeduction - result.nhfDeduction) / 12 : 0;
    const monthlyOldTakeHome = (result && oldTax !== null) ? (result.annualIncome - oldTax - result.pensionDeduction) / 12 : 0;
    const monthlyGain = monthlyNewTakeHome - monthlyOldTakeHome;

    return (
        <div className="bg-white shadow-2xl shadow-primary/5 rounded-[2.5rem] overflow-hidden border border-white/50">
            <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Input Section */}
                <div className="lg:col-span-7 space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                            <span className="bg-primary/10 text-primary p-2 rounded-xl mr-3">
                                <Calculator className="w-6 h-6" />
                            </span>
                            See What You Owe
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">What do you do?</label>
                                <div className="grid grid-cols-3 gap-3">
                                    {["salaried", "freelancer", "business"].map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => setEmploymentType(type)}
                                            className={`px-4 py-3 text-sm font-medium rounded-2xl border transition-all ${employmentType === type
                                                ? "bg-primary text-white border-primary shadow-lg shadow-primary/25"
                                                : "bg-gray-50 border-transparent text-gray-600 hover:bg-gray-100"
                                                } capitalize`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                                        What is your Annual Gross Salary? (₦)
                                    </label>
                                    <CurrencyInput
                                        value={incomeAmount}
                                        onChange={(val) => setIncomeAmount(val)}
                                        placeholder="e.g. 5,000,000"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <div className="flex justify-between items-center mb-2 ml-1">
                                        <label className="block text-xs font-medium text-gray-500">Pension Rate</label>
                                        <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">{pensionRate}%</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="20"
                                        step="0.5"
                                        value={pensionRate}
                                        onChange={(e) => setPensionRate(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                                    />
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-2 ml-1">
                                        <label className="block text-xs font-medium text-gray-500">NHF Rate</label>
                                        <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">{nhfRate}%</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="5"
                                        step="0.1"
                                        value={nhfRate}
                                        onChange={(e) => setNhfRate(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                                    />
                                </div>
                            </div>

                            <div className="pt-6 border-t border-gray-100">
                                <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center uppercase tracking-wider">
                                    Reduce Your Tax (Optional)
                                    <div className="group relative ml-2">
                                        <Info className="w-4 h-4 text-gray-400 cursor-help" />
                                        <div className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-3 bg-gray-900 text-white text-xs rounded-xl shadow-xl z-10">
                                            These help lower the tax you pay. Leave as 0 if they don't apply to you.
                                        </div>
                                    </div>
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-2 ml-1">Annual Rent Paid (₦)</label>
                                        <CurrencyInput
                                            value={rentAmount}
                                            onChange={(val) => setRentAmount(val)}
                                            placeholder="0"
                                            className="text-sm"
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Result Section */}
                <div className="lg:col-span-5">
                    <div className="bg-primary/5 rounded-3xl p-8 h-full border border-primary/10 flex flex-col relative overflow-hidden">
                        {/* Decorative background elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                        {!result ? (
                            <div className="flex-grow flex flex-col items-center justify-center text-center py-12 relative z-10">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                                    <Calculator className="w-8 h-8 text-primary/40" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to Calculate</h3>
                                <p className="text-gray-500 text-sm max-w-[200px]">Fill in your details on the left to see your simple tax breakdown.</p>
                            </div>
                        ) : (
                            <div className="space-y-8 relative z-10 animate-fade-in-up">
                                {/* Comparison Card for Salaried */}
                                {employmentType === "salaried" && oldTax !== null && (
                                    <div className="bg-white rounded-2xl p-5 shadow-lg shadow-primary/5 border border-primary/10">
                                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Your Monthly Take-Home</h4>
                                        <div className="grid grid-cols-2 gap-4 mb-4">
                                            <div>
                                                <p className="text-xs text-gray-500 mb-1">Before (Old Law)</p>
                                                <p className="text-lg font-bold text-gray-900">₦{monthlyOldTakeHome.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-primary font-medium mb-1">Starting Jan 2026</p>
                                                <p className="text-lg font-bold text-primary">₦{monthlyNewTakeHome.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                                            </div>
                                        </div>
                                        <div className={`p-3 rounded-xl text-sm font-medium flex items-center justify-center ${monthlyGain >= 0 ? "bg-gray-100 text-gray-900 border border-gray-200" : "bg-gray-50 text-gray-900 border border-gray-200"}`}>
                                            {monthlyGain >= 0 ? (
                                                <>🎉 You keep ₦{monthlyGain.toLocaleString(undefined, { maximumFractionDigits: 0 })} more / month</>
                                            ) : (
                                                <>⚠️ You pay ₦{Math.abs(monthlyGain).toLocaleString(undefined, { maximumFractionDigits: 0 })} more / month</>
                                            )}
                                        </div>
                                    </div>
                                )}

                                <div className="text-center">
                                    <p className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wide">Total Tax for the Year</p>
                                    <p className="text-5xl font-bold text-primary tracking-tight">
                                        ₦{result.taxPayable.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                                    </p>
                                    <div className="inline-flex items-center mt-3 px-3 py-1 rounded-full bg-white border border-primary/10 shadow-sm">
                                        <span className="text-xs font-medium text-gray-500 mr-2">Actual Rate</span>
                                        <span className="text-sm font-bold text-gray-900">{result.effectiveRate.toFixed(1)}%</span>
                                    </div>
                                </div>

                                <div className="space-y-4 bg-white rounded-2xl p-5 shadow-sm border border-primary/5">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Total Earnings</span>
                                        <span className="font-medium text-gray-900">₦{result.annualIncome.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Tax-Free Allowance</span>
                                        <span className="font-medium text-gray-900">-₦{(result.rentRelief + result.pensionDeduction + result.nhfDeduction).toLocaleString()}</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 pl-2">
                                        <div>Pension ({pensionRate}%)</div>
                                        <div className="text-right">-₦{result.pensionDeduction.toLocaleString()}</div>
                                        <div>NHF ({nhfRate}%)</div>
                                        <div className="text-right">-₦{result.nhfDeduction.toLocaleString()}</div>
                                        {result.rentRelief > 0 && (
                                            <>
                                                <div>Rent Relief</div>
                                                <div className="text-right">-₦{result.rentRelief.toLocaleString()}</div>
                                            </>
                                        )}
                                        <div className="flex justify-between text-sm pt-3 border-t border-gray-100">
                                            <span className="text-gray-900 font-bold">Amount Taxed</span>
                                            <span className="font-bold text-gray-900">₦{result.taxableIncome.toLocaleString()}</span>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">How it's calculated</h4>
                                        <div className="space-y-3">
                                            {result.breakdown.map((item, idx) => (
                                                item.amount > 0 || item.rate === "0%" ? (
                                                    <div key={idx} className="flex justify-between text-xs items-center">
                                                        <div className="flex items-center">
                                                            <div className={`w-2 h-2 rounded-full mr-2 ${item.rate === "0%" ? "bg-gray-400" : "bg-primary"}`}></div>
                                                            <span className="text-gray-600">{item.band}</span>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <span className="bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded text-[10px] mr-2 font-medium">{item.rate}</span>
                                                            <span className="font-medium text-gray-900">₦{item.amount.toLocaleString()}</span>
                                                        </div>
                                                    </div>
                                                ) : null
                                            ))}
                                        </div>
                                    </div>

                                    {result.taxPayable === 0 && (
                                        <div className="bg-gray-50 text-gray-900 text-sm p-4 rounded-2xl border border-gray-200 text-center font-medium">
                                            🎉 You pay ZERO tax!
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
