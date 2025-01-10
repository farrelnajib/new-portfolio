"use server";

import { existsSync, readdirSync, readFileSync } from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/posts");

export interface PostProps {
    slug: string;
    content?: string;
    date: string;
    title: string;
    excerpt: string;
    image?: string;
}

export async function getSortedPostData(): Promise<PostProps[]> {
    const fileNames = readdirSync(postsDirectory);
    const allPostsData = fileNames.map(fileName => {
        const slug = fileName.replace(/\.md$/, '');

        const fullPath = path.join(postsDirectory, fileName);
        const fileContent = readFileSync(fullPath, "utf8");

        const matterResult = matter(fileContent);
        return {
            slug,
            ...(matterResult.data as { date: string, title: string, excerpt: string, image?: string })
        }
    })

    return allPostsData.sort((a, b) => {
        return a.date < b.date ? 1 : -1;
    })
}

export async function getAllPostSlugs() {
    if (!existsSync(postsDirectory)){
        return []
    }

    const fileNames = readdirSync(postsDirectory);
    return fileNames.map(fileName => {
        return {
            params: {
                slug: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export async function getPostData(slug: string): Promise<PostProps> {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    if (!existsSync(fullPath)) {
        throw new Error("Not Found");
    }

    const fileContent = readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContent);

    // const content = await marked.parse(matterResult.content);

    return {
        slug,
        content: matterResult.content,
        ...(matterResult.data as {date: string, title: string, excerpt: string, image?: string})
    }
}
