import * as React from "react";
import Layout from "../templates/layout/Layout";
import Contact from "../sections/home/Contact";
import SectHeading from "../components/common/SectHeading";
import ProjectPreview from "../components/Home/ProjectPreview";
import cric from "../images/projects/cricopedia.png";
import back from "../images/projects/backslash.png";
import ieee from "../images/projects/ieee.png";
import Jaideep from "../images/projects/Jaideep.png";
import mor from "../images/projects/mor.png";
import msg from "../images/projects/msg.png";
import pixo from "../images/projects/pixo.png";
import mailr from "../images/projects/mailr.png";
import healthsake from "../images/projects/healthsake.png";
import asm from "../images/projects/assembler.png";
import ludo from "../images/projects/ludo.png";

// markup
const ProjectsPage = () => {
    return (
        <Layout pageTitle="Jaideep Guntupalli">
            <section id="projects" className="py-20 md:py-28 fadeInProj">
                <SectHeading heading="Projects" linktext="Web Development" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* <ProjectPreview
                    image="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    date="Jul 2022"
                    title="Lynks (Bookmarking App)"
                    description="Full Stack Web Application built using ReactJS for frontend, NestJS for backend, Prisma for ORM and PostgreSQl for database for bookmarking websites, tagging them and sorting them into projects."
                    link="/projects/Lynks"
                    linktext="More details >>"
                />
                <ProjectPreview
                    image="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    date="Jun 2022"
                    title="OAuth2.0 Auth Server"
                    description="OAuth2.0 Auth Server built using NestJS, Prisma for ORM and PostgreSQl for database for authentication and authorization using Authorization Code Grant."
                    link="/projects/OAuth2"
                    linktext="More details >>"
                /> */}
                    <ProjectPreview
                        image={mailr}
                        date="Dec 2022"
                        title="mailr"
                        description="A web app through which you can send custom mails to a large amount users with their data as csv.You insert their name as variable to into subject or body. You can also add attachments.When all mails are sent to the sender you will receive a report as mail about how each persons mail status."
                        link1="https://github.com/JaideepGuntupalli/healthsake"
                        linktext1="Github >>"
                        link2="https://healthsake.jaideepguntupalli.com"
                        linktext2="Website >>"
                    />
                    <ProjectPreview
                        image={healthsake}
                        date="Sept 2022 - Nov 2022"
                        title="HealthSake"
                        description="A patient data management system is a web app developed primarily to facilitate the verification of the patients’ documents while buying medicines or making medical claims. The portal that facilitates the secure exchange and verification of electronic health records."
                        link1="https://github.com/JaideepGuntupalli/healthsake"
                        linktext1="Github >>"
                        link2="https://healthsake.jaideepguntupalli.com"
                        linktext2="Website >>"
                    />
                    <ProjectPreview
                        image={Jaideep}
                        date="July 2022"
                        title="Portfolio Website"
                        description="Designed & Developed a personal portfolio site with blog using GatsbyJS, ReactJS, TailwindCSS and Sanity. Hosted using a virutal private server on DigitalOcean."
                        link1="/"
                        linktext1="Website >>"
                    />
                    <ProjectPreview
                        image={back}
                        date="June 2022"
                        title="BackSlash Website"
                        description="Refactored and prepared the back slash website for event during July 2022. Hosted using a virutal private server on Google Cloud."
                        link1="https://github.com/IEEE-IIIT-Delhi/slash-platform"
                        linktext1="Github >>"
                    />
                    <ProjectPreview
                        image={cric}
                        date="May 2022"
                        title="Cric-o-pedia.live"
                        description="Designed & Developed a website for Cric-o-pedia.live, a live cricket scorecard website. Built using ReactJS for frontend, Firebase for authentication and deployed a proxy server to get the live cricket scores and stats using ESPNCricinfo API."
                        link1="https://github.com/JaideepGuntupalli?tab=repositories&q=cric-o-pedia&type=&language=&sort="
                        linktext1="Github >>"
                        link2="https://cric-o-pedia.live/"
                        linktext2="Website >>"
                    />
                    <ProjectPreview
                        image={msg}
                        date="Apr 2022"
                        title="Messaging App"
                        description="Designed & developed a realtime chatting web app using ReactJS for frontend, NodeJS for backend, MySQL for database and Socket.io for realtime communication."
                        link1="https://github.com/JaideepGuntupalli/messaging-app"
                        linktext1="Github >>"
                    />
                    <ProjectPreview
                        image={pixo}
                        date="Apr 2022"
                        title="WebGI Pixotronics"
                        description="Developed the newly redesigned landing page of Pixotronics(client) using Sergey, a light-weight HTML-based Static Site Generator, TailwindCSS, and JavaScript.Integrated 3D scenes, videos as well as Hubspot's custom booking pages into website."
                        link1="https://webgi.pixotronics.com/"
                        linktext1="Website >>"
                    />
                    <ProjectPreview
                        image={mor}
                        date="Mar 2022"
                        title="Mor-Chiraiya"
                        description="Designed & developed Mor-Chiraiya for a client with Google Analytics to track and understand user activity on the page. Integrated razorpay with the website to accept nest orders."
                        link1="https://mor-chiraiya.org/"
                        linktext1="Website >>"
                    />
                    <ProjectPreview
                        image={ieee}
                        date="Feb 2022"
                        title="IEEE-IIITD Student Branch Website"
                        description="Developed IEEE-IIITD website with a custom CMS using Sanity with Astro using ReactJS for frontend. "
                        link1="https://github.com/IEEE-IIIT-Delhi/ieee.iiitd.edu.in"
                        linktext1="Github >>"
                        link2="https://ieee.iiitd.edu.in/"
                        linktext2="Website >>"
                    />
                    <ProjectPreview
                        image={ludo}
                        date="Dec 2021"
                        title="Ludo Master Clone"
                        description="Developed a clone of popular Play Store App Ludo Master for Desktop with Local 2-player Multiplayer game mode developed using Java and JavaFX."
                        link1="https://github.com/JaideepGuntupalli/Ludo-Master-Clone"
                        linktext1="Github >>"
                        link2="https://cric-o-pedia.live"
                        linktext2={""}
                    />
                    <ProjectPreview
                        image={asm}
                        date="Aug 2021"
                        title="Assembler and Simulator"
                        description="Designed and programmed an Assembler and Simulator for Assembly Language in Python where Assembly language is taken as input and outputting corresponding Machine Code."
                        link1="https://github.com/JaideepGuntupalli/Assembler-and-Simulator"
                        linktext1="Github >>"
                        link2="https://cric-o-pedia.live"
                        linktext2={""}
                    />
                    {/* <ProjectPreview
                        image={ludo}
                        date="Dec 2021"
                        title="Ludo Master Clone"
                        description="Developed a clone of popular Play Store App Ludo Master for Desktop with Local 2-player Multiplayer game mode developed using Java and JavaFX."
                        link="https://github.com/JaideepGuntupalli/Ludo-Master-Clone"
                        linktext="More details >>"
                    />
                    <ProjectPreview
                        image={asm}
                        date="Aug 2021"
                        title="Assembler and Simulator"
                        description="Designed and programmed an Assembler and Simulator for Assembly Language in Python where Assembly language is taken as input and outputting corresponding Machine Code."
                        link="https://github.com/JaideepGuntupalli/Assembler-and-Simulator"
                        linktext="More details >>"
                    /> */}
                </div>
            </section>
            <Contact />
        </Layout>
    );
};

export default ProjectsPage;