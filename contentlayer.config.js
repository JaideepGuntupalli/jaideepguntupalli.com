import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
    slug: {
        type: "string",
        resolve: (doc) => doc._raw.flattenedPath.split("/").pop(),
    },
    tweetIds: {
        type: "array",
        resolve: (doc) => {
            const tweetMatches = doc.body.raw.match(
                /<StaticTweet\sid="[0-9]+"\s\/>/g
            );
            return (
                tweetMatches?.map((tweet) => tweet.match(/[0-9]+/g)[0]) || []
            );
        },
    },
    structuredData: {
        type: "object",
        resolve: (doc) => ({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: doc.title,
            datePublished: doc.publishedAt,
            dateModified: doc.publishedAt,
            description: doc.summary,
            image: doc.image
                ? `https://imjaideep.com${doc.image}`
                : `https://imjaideep.com/og?title=${doc.title}`,
            url: `https://imjaideep.com/blog/${doc._raw.flattenedPath}`,
            author: {
                "@type": "Person",
                name: "Lee Robinson",
            },
        }),
    },
};

export const Project = defineDocumentType(() => ({
    name: "Project",
    filePathPattern: "./projects/**/*.mdx",
    contentType: "mdx",

    fields: {
        published: {
            type: "boolean",
        },
        title: {
            type: "string",
            required: true,
        },
        description: {
            type: "string",
            required: true,
        },
        date: {
            type: "date",
        },
        url: {
            type: "string",
        },
        repository: {
            type: "string",
        },
        tech: {
            type: "string",
        },
    },
    computedFields,
}));

export const Blog = defineDocumentType(() => ({
    name: "Blog",
    filePathPattern: `*.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            required: true,
        },
        publishedAt: {
            type: "string",
            required: true,
        },
        summary: {
            type: "string",
            required: true,
        },
        image: {
            type: "string",
        },
    },
    computedFields,
}));

export const Work = defineDocumentType(() => ({
    name: "Work",
    filePathPattern: `./contrib/work/*.mdx`,
    contentType: "mdx",
    fields: {
        company: {
            type: "string",
            required: true,
        },
        url: {
            type: "string",
            required: true,
        },
        startDate: {
            type: "string",
            required: true,
        },
        endDate: {
            type: "string",
            required: true,
        },
        role: {
            type: "string",
            required: true,
        },

        description: {
            type: "string",
        },
        tech: {
            type: "string",
        },
    },
    computedFields,
}));

export const Education = defineDocumentType(() => ({
    name: "Education",
    filePathPattern: `./contrib/education/*.mdx`,
    contentType: "mdx",
    fields: {
        company: {
            type: "string",
            required: true,
        },
        url: {
            type: "string",
            required: true,
        },
        startDate: {
            type: "string",
            required: true,
        },
        endDate: {
            type: "string",
            required: true,
        },
        role: {
            type: "string",
            required: true,
        },

        description: {
            type: "string",
        },
        courses: {
            type: "string",
        },
    },
    computedFields,
}));

export const OpenSource = defineDocumentType(() => ({
    name: "OpenSource",
    filePathPattern: `./contrib/opensource/*.mdx`,
    contentType: "mdx",
    fields: {
        company: {
            type: "string",
            required: true,
        },
        url: {
            type: "string",
            required: true,
        },
        startDate: {
            type: "string",
            required: true,
        },
        endDate: {
            type: "string",
            required: true,
        },
        role: {
            type: "string",
            required: true,
        },

        description: {
            type: "string",
        },
        tech: {
            type: "string",
        },
        links: {
            type: "list",
            of: {
                type: "json",
                properties: {
                    name: {
                        type: "string",
                    },
                    url: {
                        type: "string",
                    },
                },
                required: ["name", "url"],
            },
        },
    },
    computedFields,
}));

export default makeSource({
    contentDirPath: "content",
    documentTypes: [Blog, Project, Work, OpenSource, Education],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            [
                rehypePrettyCode,
                {
                    theme: "one-dark-pro",
                    onVisitLine(node) {
                        // Prevent lines from collapsing in `display: grid` mode, and allow empty
                        // lines to be copy/pasted
                        if (node.children.length === 0) {
                            node.children = [{ type: "text", value: " " }];
                        }
                    },
                    onVisitHighlightedLine(node) {
                        node.properties.className.push("line--highlighted");
                    },
                    onVisitHighlightedWord(node) {
                        node.properties.className = ["word--highlighted"];
                    },
                },
            ],
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ["anchor"],
                    },
                },
            ],
        ],
    },
});
