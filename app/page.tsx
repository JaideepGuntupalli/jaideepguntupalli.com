import { allBlogs, allProjects } from "contentlayer/generated";
// import { getViewsCount } from "lib/metrics";
import Image from "next/image";
import Link from "next/link";
import MetaData from "./blog/meta-data";
import { Card } from "./components/card";
import { Article } from "./projects/article";

export default async function Page() {
    // const allViews = await getViewsCount();

    const recentProjects = allProjects
        .filter((p) => p.published)
        .sort(
            (a, b) =>
                new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
                new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
        )
        .slice(0, 3);

    const recentBlogs = allBlogs
        .sort((a, b) => {
            if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                return -1;
            }
            return 1;
        })
        .slice(0, 3);

    return (
        <section className="min-h-[80vh]">
            <h1 className="font-bold text-2xl mb-8 tracking-tighter flex justify-start gap-4 items-center">
                <a href="https://github.com/jaideepguntupalli" target="_blank">
                    <img
                        alt="Jaideep Guntupalli"
                        src="/jaideep.jpeg"
                        className="w-12 h-12 border-2 p-1 border-purple-400 rounded-full"
                    />
                </a>
                hey, I'm Jaideep 👋{" "}
            </h1>
            {/* <p className="prose prose-neutral dark:prose-invert">
                I'm a software engineer with expertise in crafting responsive,
                real-time web applications, a skill I've finely tuned through
                significant experience in leading tech companies and
                contributions to open-source projects. I specialize in both
                frontend and backend development, ensuring high-performance and
                seamless digital experiences. As a student at IIIT Delhi, I am
                immersing myself in the complexities of Computer Science.
            </p>*/}
            <p className="prose prose-neutral dark:prose-invert">
                Born {new Date().getFullYear() - 2002} years ago. I'm a software
                engineer immersed in{" "}
                <span className="not-prose">
                    <a
                        href="https://react.dev"
                        target="_blank"
                        className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 pb-[0.125rem] text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
                    >
                        <Image
                            alt="React logomark"
                            src="/react-logo.svg"
                            className="!mr-1 h-[14px] w-[14px]"
                            width="14"
                            height="14"
                        />
                        React
                    </a>
                    {", "}
                    <a
                        href="https://nextjs.org"
                        target="_blank"
                        className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
                    >
                        <Image
                            alt="Next.js logomark"
                            src="/next-logo.svg"
                            className="!mr-1"
                            width="14"
                            height="14"
                        />
                        Next.js
                    </a>{" "}
                </span>
                and{" "}
                <span className="not-prose">
                    <a
                        href="https://www.typescriptlang.org/"
                        target="_blank"
                        className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 pb-[0.125rem] text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
                    >
                        <Image
                            alt="Typescript logomark"
                            src="/typescript-logo.svg"
                            className="!mr-1 h-[14px] w-[14px]"
                            width="14"
                            height="14"
                        />
                        TypeScript
                    </a>
                </span>
                . Building{" "}
                <Link href={"/projects"}>
                    exceptional and accessible digital experiences
                </Link>{" "}
                is my forte, developed through{" "}
                <Link href={"/contributions"}>my adventures</Link> in startups,
                leading tech firms and contributions to open-source projects.
                Currently, I am working as a SWE at{" "}
                <a
                    target="_blank"
                    href="https://bitespeed.co/"
                    className="text-purple-300"
                >
                    Bitespeed
                </a>
                .
            </p>
            <p className="prose prose-neutral dark:prose-invert mt-4">
                And also as a graduate of{" "}
                <a href="https://iiitd.ac.in/" target="_blank">
                    IIIT Delhi
                </a>
                , I immersed myself in the complexities of Computer Science
                during my B.Tech. If you want to get in touch, I'm most
                responsive over{" "}
                <a href="mailto:guntupallijaideep@gmail.com">email</a> and I
                tend to be pretty active on <a href="https://x.com/gjdeep">X</a>{" "}
                and{" "}
                <a href="https://www.linkedin.com/in/imjaideep/" target="_blank">
                    LinkedIn
                </a>{" "}
                too.
            </p>
            <h2 className="font-bold text-xl mt-12 mb-4 tracking-tighter">
                Recent Posts
            </h2>
            {/* Only latest 3 posts */}
            {recentBlogs.map((post) => (
                <Link
                    key={post.slug}
                    className="flex flex-col space-y-1 mb-4 border-b border-neutral-200 dark:border-neutral-700 pb-3"
                    href={`/blog/${post.slug}`}
                >
                    <div className="w-full flex flex-col gap-[0.125rem]">
                        <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                            {post.title}
                        </p>

                        <MetaData
                            publishedAt={post.publishedAt}
                            // allViews={allViews}
                            slug={post.slug}
                            trackView={false}
                        />
                    </div>
                </Link>
            ))}
            <Link
                href={"/blog"}
                className="text-sm underline underline-offset-2 decoration-neutral-400 text-neutral-400"
            >
                Read more posts →
            </Link>
            <h2 className="font-bold text-xl mt-12 mb-4 tracking-tighter">
                Recent Work
            </h2>
            <p className="prose prose-neutral dark:prose-invert mt-4">
                I'm a big fan of open source and I try to contribute to it as
                much as I can. Here are some of my recent projects:
            </p>
            {/* {recentProjects.map((project) => (
                <Card key={project.slug}>
                    <Article project={project} max={5} />
                </Card>
            ))} */}
            <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 my-4">
                <div className="grid grid-cols-2 gap-4">
                    {recentProjects.slice(0, 2).map((project) => (
                        <Card key={project.slug}>
                            <Article project={project} max={5} />
                        </Card>
                    ))}
                </div>
                <div className="flex gap-4">
                    {recentProjects.slice(2, 3).map((project) => (
                        <Card key={project.slug}>
                            <Article project={project} max={7} />
                        </Card>
                    ))}
                </div>
            </div>
            <Link
                href={"/projects"}
                className="text-sm underline underline-offset-2 decoration-neutral-400 text-neutral-400"
            >
                Look at more projects →
            </Link>
        </section>
    );
}
