import LaymanGuide from "@/components/LaymanGuide";

export default function GuidePage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">Layman's Guide</h1>
                <p className="text-xl text-gray-600">A simple, jargon-free explanation of the 2026 Tax Law reforms.</p>
            </div>
            <LaymanGuide />
        </div>
    );
}
