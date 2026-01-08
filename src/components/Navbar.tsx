import Link from "next/link";
import { Calculator, BookOpen, HelpCircle, FileText } from "lucide-react";

export default function Navbar() {
    return (
        <div className="px-4 sm:px-6 lg:px-8 pt-6 pb-2">
            <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between z-50 relative">
                <div className="flex items-center">
                    {/* <Link href="/" className="flex-shrink-0 flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                            T
                        </div>
                        <span className="text-xl font-bold text-gray-900 tracking-tight">TaxLaw<span className="text-primary">2026</span></span>
                    </Link> */}
                </div>

                <div className="hidden sm:flex sm:space-x-8">
                    <Link
                        href="/"
                        className="text-gray-600 hover:text-primary inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors"
                    >
                        <Calculator className="w-4 h-4 mr-2" />
                        Calculator
                    </Link>
                    <Link
                        href="/guide"
                        className="text-gray-600 hover:text-primary inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors"
                    >
                        <BookOpen className="w-4 h-4 mr-2" />
                        Guide
                    </Link>
                    <Link
                        href="/faqs"
                        className="text-gray-600 hover:text-primary inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors"
                    >
                        <HelpCircle className="w-4 h-4 mr-2" />
                        FAQs
                    </Link>
                    <Link
                        href="/resources"
                        className="text-gray-600 hover:text-primary inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors"
                    >
                        <FileText className="w-4 h-4 mr-2" />
                        Resources
                    </Link>
                </div>

                <div className="flex items-center sm:hidden">
                    <Link href="/calculator" className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:bg-primary/90 transition-colors">
                        Calculate
                    </Link>
                </div>
            </nav>
        </div>
    );
}
