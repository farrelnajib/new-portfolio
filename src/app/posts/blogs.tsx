"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PostMetadata } from "@/lib/blog"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface BlogsListProps {
    posts: PostMetadata[];
}

const POSTS_PER_PAGE = 6;
export default function BlogsList({posts}: BlogsListProps) {
    const [ displayedPosts, setDisplayedPosts ] = useState<PostMetadata[]>(posts.slice(0, POSTS_PER_PAGE));
    const [ hasMore, setHasMore ] = useState(posts.length > POSTS_PER_PAGE);

    const loadMore = () => {
        const currentLength = displayedPosts.length;
        const nextPosts = posts.slice(currentLength, currentLength + POSTS_PER_PAGE);
        setDisplayedPosts([...displayedPosts, ...nextPosts]);
        setHasMore(currentLength + nextPosts.length < posts.length);
    };

    if (displayedPosts.length == 0) {
        return (<p className="text-muted-foreground">No blog posts at this moment.</p>);
    }

    return (
        <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
                {displayedPosts.map((post, index) => (
                    <BlogCard
                        key={index}
                        post={post}
                    />
                ))}
            </div>
            {hasMore && (
                <div className="flex justify-center">
                    <Button onClick={loadMore}>Load More</Button>
                </div>
            )}
        </>
    )
}

export function BlogCard({ post }: { post: PostMetadata }) {
    return (
        <Link href={`/posts/${post.slug}`}>
            <Card className="overflow-hidden transition-all hover:bg-muted/50 h-full hover:-translate-y-1 hover:shadow-lg">
                {post.image ? (
                    <div className="relative w-full h-48">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                ) : (
                    <div className="relative h-48 bg-muted flex items-center justify-center">
                        <span className="text-4xl text-muted-foreground">📷</span>
                    </div>
                )}
                <CardContent className="p-6">
                    <article className="space-y-3">
                        <div className="space-y-2">
                            <h2 className="text-xl font-semibold">{post.title}</h2>
                            <time
                                dateTime={post.date}
                                className="text-sm text-muted-foreground"
                            >
                                {new Date(post.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </time>
                        </div>
                        <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
                    </article>
                </CardContent>
            </Card>
        </Link>
    )
}