export default function ProjectSkeleton() {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-pulse">
            {[1, 2, 3].map((item) => (
                <div key={item} className="rounded-lg border p-6 shadow-sm">
                    <div className="h-6 w-3/4 rounded bg-gray-300 mb-4"></div>
                    <div className="h-4 w-full rounded bg-gray-200 mb-2"></div>
                    <div className="h-4 w-5/6 rounded bg-gray-200"></div>
                </div>
            ))}
        </div>
    );
}