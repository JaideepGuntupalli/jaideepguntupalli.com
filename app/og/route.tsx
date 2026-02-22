import { ImageResponse, NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
    const { searchParams } = req.nextUrl;
    let postTitle = searchParams.get("title");
    const font = fetch(
        new URL("../../public/fonts/kaisei-tokumin-bold.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());
    const fontData = await font;

    // postTitle shorten upto 60 characters
    if (postTitle && postTitle.length > 60) {
        postTitle = postTitle.slice(0, 60) + "...";
    }

    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    backgroundImage: "url(https://imjaideep.com/og-bg.png)",
                }}
            >
                <div
                    style={{
                        marginLeft: 190,
                        marginRight: 190,
                        display: "flex",
                        fontSize: 120,
                        fontFamily: "Kaisei Tokumin",
                        letterSpacing: "-0.05em",
                        fontStyle: "normal",
                        color: "white",
                        lineHeight: `120px`,
                        whiteSpace: "pre-wrap",
                    }}
                >
                    {postTitle}
                </div>
            </div>
        ),
        {
            width: 1920,
            height: 1080,
            fonts: [
                {
                    name: "Kaisei Tokumin",
                    data: fontData,
                    style: "normal",
                },
            ],
        }
    );
}
