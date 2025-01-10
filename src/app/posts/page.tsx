"use server";

import { getSortedPostData } from "@/lib/blog";
import BlogsList from "./blogs";

const BlogPage = async () => {

    const allPosts = await getSortedPostData();

    return (
        <div className="container mx-auto px-4 py-8 space-y-8">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold">Blog Posts</h1>
                <p className="text-muted-foreground">
                    Thoughts, tutorials, and insight about software development.
                </p>
            </div>
            <BlogsList posts={allPosts} />
        </div>
    );
}

export default BlogPage;