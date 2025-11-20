import TaxCalculator from "@/components/TaxCalculator";

export default function CalculatorPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12 max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">Tax Calculator</h1>
                <p className="text-xl text-gray-600">Estimate your tax liability under the new 2026 Nigeria Tax Act.</p>
            </div>
            <div className="max-w-5xl mx-auto">
                <TaxCalculator />
            </div>
        </div>
    );
}
