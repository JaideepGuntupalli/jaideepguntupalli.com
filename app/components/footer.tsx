import { GithubLogo, InstaLogo, LinkedinLogo, RSSLogo, XLogo } from "./icons";

export default function footer() {
    return (
        <div className="flex item-center justify-between mt-16">
            <div className="text-zinc-500">Jaideep Guntupalli © 2023</div>
            <div>
                <div className="flex flex-row space-x-4 items-center mb-12">

                    <a
                        target="_blank"
                        href="https://twitter.com/gjdeep/"
                        aria-label="Visit my Twitter"
                        className="block hover:text-zinc-700 transition-colors text-zinc-500"
                    >
                        <XLogo />
                    </a>
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/imjaideep/"
                        aria-label="Visit my LinkedIn"
                        className="block hover:text-zinc-700 transition-colors text-zinc-500"
                    >
                        <LinkedinLogo />
                    </a>
                    <a
                        target="_blank"
                        href="https://github.com/jaideepguntupalli/"
                        aria-label="Visit my GitHub"
                        className="block hover:text-zinc-700 transition-colors text-zinc-500"
                    >
                        <GithubLogo />
                    </a>
                    <a
                        target="_blank"
                        href="/rss.xml"
                        aria-label="Subscribe to my RSS Feed"
                        className="block hover:text-zinc-700 transition-colors text-zinc-500"
                    >
                        <RSSLogo />
                    </a>
                </div>
            </div>
        </div>
    );
}
