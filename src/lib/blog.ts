"use server";

import { existsSync, readdirSync, readFileSync } from "fs";
import path from "path";
import matter from "gray-matter";
import rehypeShiki from '@shikijs/rehype';
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

const postsDirectory = path.join(process.cwd(), "src/posts");

export interface PostProps {
    content: string;
    metadata: PostMetadata;
}

export interface PostMetadata {
    date: string;
    title: string;
    excerpt: string;
    image?: string;
    slug: string;
}

export async function getSortedPostData(): Promise<PostMetadata[]> {
    const fileNames = readdirSync(postsDirectory);
    const allPostsData = fileNames.map(fileName => {
        const fullPath = path.join(postsDirectory, fileName);
        const fileContent = readFileSync(fullPath, "utf8");

        const { data } = matter(fileContent);
        return data as PostMetadata;
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
    const {content, data} = matter(fileContent);

    const file = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeShiki, {
            themes: {
                dark: 'kanagawa-wave',
                light: 'kanagawa-wave',
            }
        })
        .use(rehypeStringify)
        .process(content);

    return {
        content: file.toString(),
        metadata: data as PostMetadata,
    }
}
