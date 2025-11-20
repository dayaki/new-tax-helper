export default function Footer() {
    return (
        <footer className="mt-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto border-t border-gray-200/60 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-center text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} Nigeria Tax Law Guide.
                    </p>
                    <p className="text-center text-xs text-gray-400 max-w-md">
                        This is an informational tool and not official legal advice. Please consult with a qualified tax professional for your specific situation.
                    </p>
                </div>
            </div>
        </footer>
    );
}
