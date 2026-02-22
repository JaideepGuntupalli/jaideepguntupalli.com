import { Mdx } from "app/components/mdx";
import { allProjects } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "./header";

type Props = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({
    params,
}): Promise<Metadata | undefined> {
    const post = allProjects.find((project) => project.slug === params.slug);
    if (!post) {
        return;
    }

    const { title, slug } = post;
    const ogImage = `https://imjaideep.com/og?title=${title}`;

    return {
        title,
        openGraph: {
            title,
            type: "article",
            url: `https://imjaideep.com/projects/${slug}`,
            images: [
                {
                    url: ogImage,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            images: [ogImage],
        },
    };
}

export async function generateStaticParams(): Promise<Props["params"][]> {
    return allProjects
        .filter((p) => p.published)
        .map((p) => ({
            slug: p.slug,
        }));
}

export default async function PostPage({ params }: Props) {
    const slug = params?.slug;
    const project = allProjects.find((project) => project.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-[70vh]">
            <Header project={project} />

            <Mdx code={project.body.code} />
        </div>
    );
}
