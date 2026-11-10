
"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface PaginationProps {
    totalPages: number;
}

export default function Pagination({
    totalPages,
}: PaginationProps) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const currentPage = Number(searchParams.get("page")) || 1;

    // Build the URL for each page
    function createPageURL(pageNumber: number) {
        const params = new URLSearchParams(searchParams.toString());

        params.set("page", pageNumber.toString());

        return `${pathname}?${params.toString()}`;
    }

    return (
        <div className="flex items-center justify-center gap-4 mt-8">
            {currentPage > 1 ? (
                <Link
                    href={createPageURL(currentPage - 1)}
                    className="rounded-lg border px-4 py-2 hover:bg-gray-100"
                >
                    Previous
                </Link>
            ) : (
                <span className="rounded-lg border px-4 py-2 text-gray-400 cursor-not-allowed">
                    Previous
                </span>
            )}

            <span className="text-sm">
                Page {currentPage} of {totalPages}
            </span>

            {currentPage < totalPages ? (
                <Link
                    href={createPageURL(currentPage + 1)}
                    className="rounded-lg border px-4 py-2 hover:bg-gray-100"
                >
                    Next
                </Link>
            ) : (
                <span className="rounded-lg border px-4 py-2 text-gray-400 cursor-not-allowed">
                    Next
                </span>
            )}
        </div>
    );
}
