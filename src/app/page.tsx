import Link from "next/link";
import { ArrowRight, BookOpen, HelpCircle, CheckCircle } from "lucide-react";
import TaxCalculator from "@/components/TaxCalculator";

export default function Home() {
  return (
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

      {/* Top Section: Calculator (Full Width) */}
      <section className="w-full">
        <TaxCalculator />
      </section>

      {/* Bottom Section: Info Blocks (Grid) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Block 1: Header Card */}
        <div className="bg-primary rounded-[2rem] p-8 text-white shadow-xl shadow-gray-200/50 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium mb-4 backdrop-blur-sm border border-white/10">
              Effective Jan 1, 2026
            </div>
            <h1 className="text-3xl font-bold mb-3 leading-tight">
              Nigeria's New Tax Law Simplified
            </h1>
            <p className="text-primary-foreground/80 mb-6 text-sm leading-relaxed">
              Know exactly what you owe. Compare your current take-home pay with the new 2026 reforms.
            </p>
          </div>
          <div className="relative z-10 mt-auto">
            <Link
              href="/guide"
              className="inline-flex items-center px-5 py-2.5 bg-white text-primary rounded-xl text-sm font-bold hover:bg-gray-50 transition-colors shadow-sm"
            >
              Read the Guide
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Block 2: Key Highlights */}
        <div className="bg-white rounded-[2rem] p-8 border border-gray-200 shadow-lg shadow-gray-200/50 flex flex-col">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Key Highlights</h3>
          <div className="space-y-6 flex-grow">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <CheckCircle className="w-5 h-5 text-gray-900" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-base">₦800k Tax Free</p>
                <p className="text-sm text-gray-500 mt-1">Earn less than ₦800k/year? You pay zero tax.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <CheckCircle className="w-5 h-5 text-gray-900" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-base">Rent Relief</p>
                <p className="text-sm text-gray-500 mt-1">Deduct up to ₦500k or 20% of your rent from taxable income.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Block 3: Quick Links */}
        <div className="space-y-6 flex flex-col">
          <Link href="/guide" className="group flex-1 p-6 bg-white rounded-[2rem] border border-gray-200 hover:border-primary/30 transition-all shadow-sm hover:shadow-md flex flex-col justify-center items-center text-center">
            <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-1">Layman's Guide</h3>
            <p className="text-sm text-gray-500">Simple explanation of the law</p>
          </Link>

          <Link href="/faqs" className="group flex-1 p-6 bg-white rounded-[2rem] border border-gray-200 hover:border-primary/30 transition-all shadow-sm hover:shadow-md flex flex-col justify-center items-center text-center">
            <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <HelpCircle className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-1">FAQs</h3>
            <p className="text-sm text-gray-500">Common questions answered</p>
          </Link>
        </div>

      </section>
    </div>
  );
}
