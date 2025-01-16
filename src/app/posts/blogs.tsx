"use client"

import { Button } from "@/components/ui/button";
import { PostMetadata } from "@/lib/blog"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {sendGTMEvent} from "@next/third-parties/google";

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
        return (<p className="text-muted-foreground">No posts at this moment.</p>);
    }

    return (
        <>
            <div className="grid gap-8">
                {displayedPosts.map((post, index) => (
                    <BlogListItem
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

function BlogListItem({ post }: { post: PostMetadata }) {
    return (
        <Link href={`/posts/${post.slug}`} onClick={() => sendGTMEvent({ event: "postOpened", value: post.title })}>
            <div className="flex gap-4 group">
                {post.image ? (
                    <div className="relative shrink-0 w-36 h-36 rounded-lg overflow-hidden">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            loading="lazy"
                        />
                    </div>
                ) : (
                    <div className="relative shrink-0 w-36 h-36 rounded-lg bg-muted flex items-center justify-center">
                        <span className="text-4xl text-muted-foreground">📷</span>
                    </div>
                )}
                <article className="space-y-3">
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold group-hover:underline">{post.title}</h2>
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
            </div>
        </Link>
    )
}