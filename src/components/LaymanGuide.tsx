import { CheckCircle, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export default function LaymanGuide() {
    return (
        <div className="max-w-4xl mx-auto space-y-16">
            <section className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What's new in 2026?</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                    The government is introducing a new tax law to make things fairer. The big idea is:
                    <span className="block mt-2 font-bold text-primary text-2xl"> Earn less? Pay less. Earn more? Pay a fair share.</span>
                </p>
            </section>

            <section className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-200 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 animate-fade-in-up">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 text-gray-900">
                            <CheckCircle className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Who pays NOTHING?
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            If you earn <strong>₦800,000 or less</strong> in a whole year (salary + allowances), you pay <strong>zero tax</strong>.
                        </p>
                        <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 text-sm">
                            <p className="font-bold text-gray-900 mb-2 uppercase tracking-wide text-xs">Example</p>
                            <div className="space-y-1 text-gray-700">
                                <p>Musa earns ₦60,000 a month.</p>
                                <p>Yearly: ₦60,000 x 12 = ₦720,000.</p>
                                <p className="font-bold text-gray-900 mt-2 flex items-center">
                                    <ArrowRight className="w-4 h-4 mr-1" /> Result: Musa pays ₦0 tax.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-primary/5 border border-primary/10 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 animate-fade-in-up delay-150">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                            <AlertCircle className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Who pays TAX?
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            You only pay tax on the money you earn <strong>above</strong> that first ₦800,000.
                        </p>
                        <div className="bg-primary/5 p-5 rounded-2xl border border-primary/10 text-sm">
                            <p className="font-bold text-primary mb-2 uppercase tracking-wide text-xs">Example</p>
                            <div className="space-y-1 text-gray-700">
                                <p>Ngozi earns ₦1,000,000 a year.</p>
                                <p>First ₦800,000 is free.</p>
                                <p>She only pays tax on the extra ₦200,000.</p>
                                <p className="font-bold text-primary mt-2 flex items-center">
                                    <ArrowRight className="w-4 h-4 mr-1" /> Result: ₦30,000 tax.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">New Ways to Save (Reliefs)</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                            <span className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-900 mr-3 text-sm font-bold">1</span>
                            Rent Relief
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            You can now subtract some of your rent from your income before tax. This lowers what you pay.
                        </p>
                        <div className="bg-gray-50 p-4 rounded-xl text-sm text-gray-800 font-medium inline-block">
                            Lower of ₦500,000 OR 20% of Annual Rent
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                            <span className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-900 mr-3 text-sm font-bold">2</span>
                            Pension
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Money you put into your pension is also tax-free. It's taken out before tax is calculated.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Summary Table</h2>
                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left text-sm whitespace-nowrap">
                            <thead className="bg-gray-50/50">
                                <tr>
                                    <th scope="col" className="px-8 py-5 font-bold text-gray-900">Income Band</th>
                                    <th scope="col" className="px-8 py-5 font-bold text-gray-900">Tax Rate</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-8 py-5 text-gray-600">First ₦800,000</td>
                                    <td className="px-8 py-5 font-bold text-gray-900">0% (Tax Free)</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-8 py-5 text-gray-600">Next ₦2,200,000</td>
                                    <td className="px-8 py-5 font-medium text-gray-900">15%</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-8 py-5 text-gray-600">Next ₦9,000,000</td>
                                    <td className="px-8 py-5 font-medium text-gray-900">18%</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-8 py-5 text-gray-600">Next ₦13,000,000</td>
                                    <td className="px-8 py-5 font-medium text-gray-900">21%</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-8 py-5 text-gray-600">Next ₦25,000,000</td>
                                    <td className="px-8 py-5 font-medium text-gray-900">23%</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-8 py-5 text-gray-600">Above ₦50,000,000</td>
                                    <td className="px-8 py-5 font-medium text-gray-900">25%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
}
