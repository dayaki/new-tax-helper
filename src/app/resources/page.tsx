import Link from "next/link";
import { ExternalLink, FileText, CreditCard, Check } from "lucide-react";

export default function ResourcesPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
            <div className="text-center max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">Resources & How to Pay</h1>
                <p className="text-xl text-gray-600">Official links and a simple step-by-step guide to paying your taxes.</p>
            </div>

            <section className="bg-white rounded-[2.5rem] shadow-xl shadow-primary/5 border border-primary/10 overflow-hidden">
                <div className="bg-primary/5 px-8 py-6 border-b border-primary/10">
                    <h2 className="text-2xl font-bold text-primary flex items-center">
                        <CreditCard className="w-7 h-7 mr-3" />
                        How to Pay Your Tax
                    </h2>
                </div>
                <div className="p-8 md:p-10 space-y-10">
                    <div className="flex group">
                        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-2xl bg-primary text-white font-bold text-xl mr-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">1</div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Get your TIN</h3>
                            <p className="text-gray-600 leading-relaxed">You need a Tax Identification Number (TIN). If you have a BVN or NIN, you likely already have one. Check on the JTB website.</p>
                        </div>
                    </div>
                    <div className="flex group">
                        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-2xl bg-primary text-white font-bold text-xl mr-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">2</div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Calculate your Tax</h3>
                            <p className="text-gray-600 leading-relaxed">Use our <Link href="/calculator" className="text-primary font-semibold hover:underline">calculator</Link> to know exactly how much you owe based on your annual income.</p>
                        </div>
                    </div>
                    <div className="flex group">
                        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-2xl bg-primary text-white font-bold text-xl mr-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">3</div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">File & Pay Online</h3>
                            <p className="text-gray-600 leading-relaxed">Visit the official tax portal (e.g., TaxPromax for FIRS or your state's IRS portal). Login, file your returns, and pay via Remita or card.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Official Sources</h2>
                <div className="grid gap-6">
                    <a href="#" className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/30 transition-all group">
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-primary/10 transition-colors">
                                <FileText className="w-5 h-5 text-gray-500 group-hover:text-primary" />
                            </div>
                            <span className="font-bold text-gray-900 text-lg">EY Summary of Nigeria Tax Act 2025</span>
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                    </a>
                    <a href="#" className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/30 transition-all group">
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-primary/10 transition-colors">
                                <FileText className="w-5 h-5 text-gray-500 group-hover:text-primary" />
                            </div>
                            <span className="font-bold text-gray-900 text-lg">Nairametrics Explainer</span>
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                    </a>
                    <a href="#" className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/30 transition-all group">
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-primary/10 transition-colors">
                                <FileText className="w-5 h-5 text-gray-500 group-hover:text-primary" />
                            </div>
                            <span className="font-bold text-gray-900 text-lg">Federal Inland Revenue Service (FIRS)</span>
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                    </a>
                </div>
            </section>
        </div>
    );
}
