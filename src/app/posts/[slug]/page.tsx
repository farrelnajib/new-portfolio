import { Button } from "@/components/ui/button";
import { getAllPostSlugs, getPostData, PostProps } from "@/lib/blog";
import { Icon } from "@iconify/react";
import backIcon from "@iconify/icons-mdi/keyboard-arrow-left"
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Image from "next/image";


export async function generateStaticParams() {
    const paths = await getAllPostSlugs()
    return paths;
}

export default async function Post({ params }: { params: { slug: string } }) {
    const param = await params;

    let postData: PostProps;
    try {
        postData = await getPostData(param.slug);
    } catch (error) {
        if (error == "Error: Not Found") {
            notFound();
        };
        throw new Error("500 - Internal Server Error");
    }

    return (
        <article className="container mx-auto px-4 py-8 max-w-2xl space-y-8">
            <div className="space-y-6">
                <Button variant="ghost" asChild className="-ml-4">
                    <Link href="/posts" className="flex items-center gap-2">
                        <Icon icon={backIcon} /> Back to list
                    </Link>
                </Button>
                    {postData.image && (
                        <div className="relative w-full h-64">
                            <Image
                                src={postData.image}
                                alt={postData.title}
                                fill
                                className="object-cover rounded-lg"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    )}
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold">{postData.title}</h1>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <time dateTime={postData.date}>
                            {new Date(postData.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </time>
                        by Farrel Najib Anshary
                    </div>
                </div>
            </div>
            <div className="prose dark:prose-invert max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {postData.content}
                </ReactMarkdown>
            </div> 
        </article>
    )
}