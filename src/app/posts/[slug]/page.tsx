import { Button } from "@/components/ui/button";
import { getAllPostSlugs, getPostData, PostProps } from "@/lib/blog";
import { Icon } from "@iconify/react";
import backIcon from "@iconify/icons-mdi/keyboard-arrow-left"
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

type Params = Promise<{slug: string}>;

export async function generateMetadata({ params }: { params: Params }) {
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

    return {
        title: postData.metadata.title,
        description: postData.metadata.excerpt,
        keywords: postData.metadata.keywords,
    }
}

export async function generateStaticParams() {
    const paths = await getAllPostSlugs()
    return paths;
}


export default async function Post({ params }: { params: Params }) {
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
                    {postData.metadata.image && (
                        <div className="relative w-full h-64">
                            <Image
                                src={postData.metadata.image}
                                alt={postData.metadata.title}
                                fill
                                className="object-cover rounded-lg"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    )}
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold">{postData.metadata.title}</h1>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <time dateTime={postData.metadata.date}>
                            {new Date(postData.metadata.date).toLocaleDateString('en-US', {
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
                <div dangerouslySetInnerHTML={{ __html: postData.content }} />
            </div> 
        </article>
    )
}