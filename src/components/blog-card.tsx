import { Card, CardContent } from "@/components/ui/card";
import { PostMetadata } from "@/lib/blog"
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post }: { post: PostMetadata }) {
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
                            loading="lazy"
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
                            <h2 className="text-lg font-semibold">{post.title}</h2>
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
                        <p className="text-primary text-sm line-clamp-2">{post.excerpt}</p>
                    </article>
                </CardContent>
            </Card>
        </Link>
    )
}