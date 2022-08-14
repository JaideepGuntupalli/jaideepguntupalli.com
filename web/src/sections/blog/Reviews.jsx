import * as React from "react";
import { BlogPreview } from "../../components/Blog/BlogPreview";
import BlogGrid from "../../components/Blog/BlogGrid";
import SectHeading from "../../components/common/SectHeading";
import code from "../../images/blog/code.png";
import jaideep from "../../images/blog/jaideep.jpg";

const ReviewBlogs = () => {
    return (
        <section className="pt-40">
            <SectHeading
                heading="Reviews"
                link={true}
                linktext="View More"
                addr="#"
            />
            <BlogGrid>
                <BlogPreview
                    img={code}
                    title="Hover Animation of a Button using only CSS"
                    author="Jaideep Guntupalli"
                    authorImg={jaideep}
                    date="Apr 17, 2022"
                />
                <BlogPreview
                    img={code}
                    title="Hover Animation of a Button using only CSS"
                    author="Jaideep Guntupalli"
                    authorImg={jaideep}
                    date="Apr 17, 2022"
                />
                <BlogPreview
                    img={code}
                    title="Hover Animation of a Button using only CSS"
                    author="Jaideep Guntupalli"
                    authorImg={jaideep}
                    date="Apr 17, 2022"
                />
                <BlogPreview
                    img={code}
                    title="Hover Animation of a Button using only CSS"
                    author="Jaideep Guntupalli"
                    authorImg={jaideep}
                    date="Apr 17, 2022"
                />
            </BlogGrid>
        </section>
    );
};

export default ReviewBlogs;
