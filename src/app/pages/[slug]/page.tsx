"use client";
import { useSearchParams } from 'next/navigation';

export default function PostPage() {
    const searchParams = useSearchParams();
    const slug = searchParams ? searchParams.get('slug') : null;

    if (typeof slug === 'string') {
        return (
            <div>
                <h1>Post Slug: {slug}</h1>
            </div>
        );
    }

    return <div>Loading...</div>;
}
