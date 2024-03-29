import { Mdx } from "app/components/mdx";
import { allEducation, allOpenSources, allWorks } from "contentlayer/generated";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Work",
    description:
        "A log of my work experience, open-source contributions, and education.",
};

export default function Page() {
    return (
        <section className="min-h-[80vh]">
            <h1 className="font-bold text-2xl mb-8 tracking-tighter">
                contributions{" "}
                <span>
                    (
                    <a className="underline" href="#work">
                        work
                    </a>
                    ,{" "}
                    <a className="underline" href="#open-source">
                        open-source
                    </a>{" "}
                    &{" "}
                    <a className="underline" href="#education">
                        education
                    </a>
                    )
                </span>
            </h1>
            <div className="">
                <h2 className="text-xl my-10" id="work">
                    work
                </h2>
                <ol className="group/list">
                    {allWorks
                        .sort((a, b) => {
                            if (new Date(a.startDate) > new Date(b.startDate)) {
                                return -1;
                            }
                            return 1;
                        })
                        .map((work) => (
                            <li className="mb-12">
                                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block "></div>
                                    <header
                                        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2"
                                        aria-label="2018 to Present"
                                    >
                                        {work.startDate} — {work.endDate}
                                    </header>
                                    <div className="z-10 sm:col-span-6">
                                        <h3 className="font-medium leading-snug text-zinc-200">
                                            <div>
                                                <a
                                                    className="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-purple-300 focus-visible:text-purple-300  group/link text-base"
                                                    href={work.url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    aria-label={
                                                        work.role +
                                                        " at " +
                                                        work.company
                                                    }
                                                >
                                                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                    <span>
                                                        {work.role + " ·"}{" "}
                                                        <span className="inline-block">
                                                            {work.company}
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-tranzinc-y-1 group-hover/link:tranzinc-x-1 group-focus-visible/link:-tranzinc-y-1 group-focus-visible/link:tranzinc-x-1 motion-reduce:transition-none ml-1 tranzinc-y-px"
                                                                aria-hidden="true"
                                                            >
                                                                <path
                                                                    fill-rule="evenodd"
                                                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                    clip-rule="evenodd"
                                                                ></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </h3>
                                        <p className="mt-2 text-sm leading-normal">
                                            {work.description}
                                        </p>
                                        <Mdx code={work.body.code} />
                                        <ul
                                            className="mt-2 flex flex-wrap"
                                            aria-label="Technologies used"
                                        >
                                            {work.tech &&
                                                work.tech
                                                    .split(",")
                                                    .map((tech) => (
                                                        <li className="mr-1.5 mt-2">
                                                            <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                                                {tech}
                                                            </div>
                                                        </li>
                                                    ))}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        ))}
                    {/* <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block "></div>
                            <header
                                className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2"
                                aria-label="2018 to Present"
                            >
                                2018 — Present
                            </header>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-zinc-200">
                                    <div>
                                        <a
                                            className="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-purple-300 focus-visible:text-purple-300  group/link text-base"
                                            href="https://upstatement.com"
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label="Lead Engineer at Upstatement"
                                        >
                                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                            <span>
                                                {"Lead Engineer ·"}{" "}
                                                <span className="inline-block">
                                                    Upstatement
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-tranzinc-y-1 group-hover/link:tranzinc-x-1 group-focus-visible/link:-tranzinc-y-1 group-focus-visible/link:tranzinc-x-1 motion-reduce:transition-none ml-1 tranzinc-y-px"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                            clip-rule="evenodd"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </h3>
                                <p className="mt-2 text-sm leading-normal">
                                    Deliver high-quality, robust production code
                                    for a diverse array of projects for clients
                                    including Harvard Business School, Everytown
                                    for Gun Safety, Pratt Institute, Koala
                                    Health, Vanderbilt University, The 19th
                                    News, and more. Provide leadership within
                                    engineering department through close
                                    collaboration, knowledge shares, and
                                    mentorship.
                                </p>
                                <ul
                                    className="mt-2 flex flex-wrap"
                                    aria-label="Technologies used"
                                >
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                            React
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                            React Native
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                            SCSS
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                            WordPress
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                            JavaScript
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                            TypeScript
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                            PHP
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block "></div>
                            <header
                                className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2"
                                aria-label="July to December 2017"
                            >
                                July — Dec 2017
                            </header>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-zinc-200">
                                    <div>
                                        <a
                                            className="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-purple-300 focus-visible:text-purple-300  group/link text-base"
                                            href="https://www.apple.com/apple-music/"
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label="UI Engineer Co-op at Apple"
                                        >
                                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                            <span>
                                                {"UI Engineer Co-op ·"}{" "}
                                                <span className="inline-block">
                                                    Apple
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-tranzinc-y-1 group-hover/link:tranzinc-x-1 group-focus-visible/link:-tranzinc-y-1 group-focus-visible/link:tranzinc-x-1 motion-reduce:transition-none ml-1 tranzinc-y-px"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                            clip-rule="evenodd"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </h3>
                                <p className="mt-2 text-sm leading-normal">
                                    Developed and styled interactive web apps
                                    for Apple Music, including the UI of Apple
                                    Music’s embeddable web player widget for
                                    in-browser user authorization and full song
                                    playback.
                                </p>
                                <ul
                                    className="mt-2 flex flex-wrap"
                                    aria-label="Related links"
                                >
                                    <li className="mr-4">
                                        <a
                                            className="relative mt-2 inline-flex items-center text-sm font-medium text-zinc-300 hover:text-purple-300 focus-visible:text-purple-300"
                                            href="https://developer.apple.com/documentation/musickitjs"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="mr-1 h-3 w-3"
                                                aria-hidden="true"
                                            >
                                                <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                                                <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                                            </svg>
                                            <span>MusicKit.js</span>
                                        </a>
                                    </li>
                                    <li className="mr-4">
                                        <a
                                            className="relative mt-2 inline-flex items-center text-sm font-medium text-zinc-300 hover:text-purple-300 focus-visible:text-purple-300"
                                            href="https://9to5mac.com/2018/06/03/apple-music-embeddable-web-player-listen-browser/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="mr-1 h-3 w-3"
                                                aria-hidden="true"
                                            >
                                                <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                                                <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                                            </svg>
                                            <span>9to5Mac</span>
                                        </a>
                                    </li>
                                    <li className="mr-4">
                                        <a
                                            className="relative mt-2 inline-flex items-center text-sm font-medium text-zinc-300 hover:text-purple-300 focus-visible:text-purple-300"
                                            href="https://www.theverge.com/2017/10/5/16433770/facebook-messenger-apple-music-bot-song-streaming"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="mr-1 h-3 w-3"
                                                aria-hidden="true"
                                            >
                                                <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                                                <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                                            </svg>
                                            <span>The Verge</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul
                                    className="mt-2 flex flex-wrap"
                                    aria-label="Technologies used"
                                >
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                            Ember
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                            SCSS
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                            JavaScript
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                            MusicKit.js
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block "></div>
                            <header
                                className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2"
                                aria-label="2016 to 2017"
                            >
                                2016 — 2017
                            </header>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-zinc-200">
                                    <div>
                                        <a
                                            className="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-purple-300 focus-visible:text-purple-300  group/link text-base"
                                            href="https://scout.camd.northeastern.edu/"
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label="Developer at Scout Studio"
                                        >
                                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                            <span>
                                                {"Developer · Scout"}{" "}
                                                <span className="inline-block">
                                                    Studio
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-tranzinc-y-1 group-hover/link:tranzinc-x-1 group-focus-visible/link:-tranzinc-y-1 group-focus-visible/link:tranzinc-x-1 motion-reduce:transition-none ml-1 tranzinc-y-px"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                            clip-rule="evenodd"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </h3>
                                <p className="mt-2 text-sm leading-normal">
                                    Collaborated with other student designers
                                    and engineers on pro-bono projects to create
                                    new brands, design systems, and websites for
                                    organizations in the community.
                                </p>
                                <ul
                                    className="mt-2 flex flex-wrap"
                                    aria-label="Technologies used"
                                >
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                            Jekyll
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                            SCSS
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                            JavaScript
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                            WordPress
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block "></div>
                            <header
                                className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2"
                                aria-label="July to December 2016"
                            >
                                July — Dec 2016
                            </header>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-zinc-200">
                                    <div>
                                        <a
                                            className="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-purple-300 focus-visible:text-purple-300  group/link text-base"
                                            href="https://starry.com/"
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label="Software Engineer Co-op at Starry"
                                        >
                                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                            <span>
                                                {"Software Engineer Co-op ·"}{" "}
                                                <span className="inline-block">
                                                    Starry
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-tranzinc-y-1 group-hover/link:tranzinc-x-1 group-focus-visible/link:-tranzinc-y-1 group-focus-visible/link:tranzinc-x-1 motion-reduce:transition-none ml-1 tranzinc-y-px"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                            clip-rule="evenodd"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </h3>
                                <p className="mt-2 text-sm leading-normal">
                                    Worked with the UI team to engineer and
                                    improve major features of Starry’s
                                    customer-facing Android app.
                                </p>
                                <ul
                                    className="mt-2 flex flex-wrap"
                                    aria-label="Related links"
                                >
                                    <li className="mr-4">
                                        <a
                                            className="relative mt-2 inline-flex items-center text-sm font-medium text-zinc-300 hover:text-purple-300 focus-visible:text-purple-300"
                                            href="https://play.google.com/store/apps/details?id=com.starry.management&amp;hl=en_US&amp;gl=US"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="mr-1 h-3 w-3"
                                                aria-hidden="true"
                                            >
                                                <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                                                <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                                            </svg>
                                            <span>Android App</span>
                                        </a>
                                    </li>
                                    <li className="mr-4">
                                        <a
                                            className="relative mt-2 inline-flex items-center text-sm font-medium text-zinc-300 hover:text-purple-300 focus-visible:text-purple-300"
                                            href="https://starry.com/blog/product/whats-new-screentime-just-got-better-for-parents"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="mr-1 h-3 w-3"
                                                aria-hidden="true"
                                            >
                                                <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                                                <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                                            </svg>
                                            <span>ScreenTime 2.0</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul
                                    className="mt-2 flex flex-wrap"
                                    aria-label="Technologies used"
                                >
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                            Cordova
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                            Backbone
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                            JavaScript
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                            CSS
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block "></div>
                            <header
                                className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2"
                                aria-label="July to December 2015"
                            >
                                July — Dec 2015
                            </header>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-zinc-200">
                                    <div>
                                        <a
                                            className="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-purple-300 focus-visible:text-purple-300  group/link text-base"
                                            href="https://us.mullenlowe.com/"
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label="Creative Technologist Co-op at MullenLowe U.S."
                                        >
                                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                            <span>
                                                {
                                                    "Creative Technologist Co-op · MullenLowe"
                                                }{" "}
                                                <span className="inline-block">
                                                    U.S.
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-tranzinc-y-1 group-hover/link:tranzinc-x-1 group-focus-visible/link:-tranzinc-y-1 group-focus-visible/link:tranzinc-x-1 motion-reduce:transition-none ml-1 tranzinc-y-px"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                            clip-rule="evenodd"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </h3>
                                <p className="mt-2 text-sm leading-normal">
                                    Developed, maintained, and shipped
                                    production code for client websites. Clients
                                    included JetBlue, Lovesac, U.S. Cellular,
                                    U.S. Department of Defense, and more.
                                </p>
                                <ul
                                    className="mt-2 flex flex-wrap"
                                    aria-label="Technologies used"
                                >
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                            HTML
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                            CSS
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                            JavaScript
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                            jQuery
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li> */}
                </ol>
                <h2 className="text-xl my-10" id="open-source">
                    open-source
                </h2>
                <ol className="group/list">
                    {allOpenSources
                        .sort((a, b) => {
                            if (new Date(a.startDate) > new Date(b.startDate)) {
                                return -1;
                            }
                            return 1;
                        })
                        .map((work) => (
                            <li className="mb-12">
                                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block "></div>
                                    <header
                                        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2"
                                        aria-label="2018 to Present"
                                    >
                                        {work.startDate} — {work.endDate}
                                    </header>
                                    <div className="z-10 sm:col-span-6">
                                        <h3 className="font-medium leading-snug text-zinc-200">
                                            <div>
                                                <a
                                                    className="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-purple-300 focus-visible:text-purple-300  group/link text-base"
                                                    href={work.url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    aria-label={
                                                        work.role +
                                                        " at " +
                                                        work.company
                                                    }
                                                >
                                                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                    <span>
                                                        {/* {work.role + " ·"}{" "} */}
                                                        <span className="inline-block">
                                                            {work.company}
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-tranzinc-y-1 group-hover/link:tranzinc-x-1 group-focus-visible/link:-tranzinc-y-1 group-focus-visible/link:tranzinc-x-1 motion-reduce:transition-none ml-1 tranzinc-y-px"
                                                                aria-hidden="true"
                                                            >
                                                                <path
                                                                    fill-rule="evenodd"
                                                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                    clip-rule="evenodd"
                                                                ></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </h3>
                                        <p className="mt-2 text-sm leading-normal">
                                            {work.description}
                                        </p>
                                        <Mdx code={work.body.code} />
                                        <ul
                                            className="mt-2 flex flex-wrap"
                                            aria-label="Related links"
                                        >
                                            {work.links?.map((link) => (
                                                <li className="mr-4">
                                                    <a
                                                        className="relative mt-2 inline-flex items-center text-sm font-medium text-zinc-300 hover:text-purple-300 focus-visible:text-purple-300"
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                            className="mr-1 h-3 w-3"
                                                            aria-hidden="true"
                                                        >
                                                            <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                                                            <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                                                        </svg>
                                                        <span>{link.name}</span>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                        <ul
                                            className="mt-2 flex flex-wrap"
                                            aria-label="Technologies used"
                                        >
                                            {work.tech &&
                                                work.tech
                                                    .split(",")
                                                    .map((tech) => (
                                                        <li className="mr-1.5 mt-2">
                                                            <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                                                {tech}
                                                            </div>
                                                        </li>
                                                    ))}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        ))}
                </ol>
                <h2 className="text-xl my-10" id="education">
                    education
                </h2>
                <ol className="group/list">
                    {allEducation
                        .sort((a, b) => {
                            if (new Date(a.startDate) > new Date(b.startDate)) {
                                return -1;
                            }
                            return 1;
                        })
                        .map((work) => (
                            <li className="mb-12">
                                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block "></div>
                                    <header
                                        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2"
                                        aria-label="2018 to Present"
                                    >
                                        {work.startDate} — {work.endDate}
                                    </header>
                                    <div className="z-10 sm:col-span-6">
                                        <h3 className="font-medium leading-snug text-zinc-200">
                                            <div>
                                                <a
                                                    className="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-purple-300 focus-visible:text-purple-300  group/link text-base"
                                                    href={work.url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    aria-label={
                                                        work.role +
                                                        " at " +
                                                        work.company
                                                    }
                                                >
                                                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                    <span>
                                                        {work.role + " ·"}{" "}
                                                        <span className="inline-block">
                                                            {work.company}
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-tranzinc-y-1 group-hover/link:tranzinc-x-1 group-focus-visible/link:-tranzinc-y-1 group-focus-visible/link:tranzinc-x-1 motion-reduce:transition-none ml-1 tranzinc-y-px"
                                                                aria-hidden="true"
                                                            >
                                                                <path
                                                                    fill-rule="evenodd"
                                                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                    clip-rule="evenodd"
                                                                ></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </h3>
                                        <p className="mt-2 text-sm leading-normal">
                                            {work.description}
                                        </p>
                                        <Mdx code={work.body.code} />
                                        <ul
                                            className="mt-2 flex flex-wrap"
                                            aria-label="Technologies used"
                                        >
                                            {work.courses &&
                                                work.courses
                                                    .split(",")
                                                    .map((tech) => (
                                                        <li className="mr-1.5 mt-2">
                                                            <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                                                {tech}
                                                            </div>
                                                        </li>
                                                    ))}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        ))}
                </ol>
            </div>
        </section>
    );
}
