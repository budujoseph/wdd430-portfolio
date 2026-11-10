import { Suspense } from 'react'
import SchoolProjectsList from '@/components/schoolProjectList'
import SchoolProjectsSkeleton from '@/components/schoolProjectSkeleton'

export default function SchoolPage() {
    return (
        <main>
            <h1>School Projects</h1>

            <Suspense fallback= {<SchoolProjectsSkeleton />}>
                <SchoolProjectsList />
            </Suspense>
        </main>
    )
}