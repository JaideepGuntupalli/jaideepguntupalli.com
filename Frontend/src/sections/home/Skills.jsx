import * as React from "react";
// import { useIntersection } from "react-use";
// import gsap from "gsap";
// import { useRef } from "react";
import SectHeading from "../../components/common/SectHeading";
import firebase from "../../images/icons/tech/firebase.svg";
import flutter from "../../images/icons/tech/flutter.svg";
import gatsby from "../../images/icons/tech/gatsby.svg";
import gcp from "../../images/icons/tech/gcp.svg";
import graphsql from "../../images/icons/tech/graphql.svg";
import heroku from "../../images/icons/tech/heroku.svg";
import javascript from "../../images/icons/tech/javascript.svg";
import java from "../../images/icons/tech/java.svg";
import typescript from "../../images/icons/tech/typescript.svg";
import react from "../../images/icons/tech/react.svg";
import next from "../../images/icons/tech/next.svg";
import mysql from "../../images/icons/tech/mysql.svg";
import node from "../../images/icons/tech/node.svg";
import mongo from "../../images/icons/tech/mongo.svg";
import postgres from "../../images/icons/tech/postgres.svg";
import postman from "../../images/icons/tech/postman.svg";
import tailwindcss from "../../images/icons/tech/tailwindcss.svg";
import sanity from "../../images/icons/tech/sanity.svg";
import WorkExp from "../../components/Home/WorkExp";

const Skills = () => {
    // const sectionRef = useRef(null);
    // const intersection = useIntersection(sectionRef, {
    //     root: null,
    //     rootMargin: "0px",
    //     threshold: 0.4,
    // });

    // const fadeIn = (element) => {
    //     gsap.to(element, {
    //         duration: 1,
    //         opacity: 1,
    //         y: 0,
    //         ease: "power4.out",
    //         stagger: {
    //             amount: 0.3,
    //         },
    //     });
    // };

    // const fadeOut = (element) => {
    //     gsap.to(element, {
    //         duration: 1,
    //         opacity: 0,
    //         y: 40,
    //         ease: "power4.out",
    //     });
    // };

    // intersection && intersection.intersectionRatio < 0.4
    //     ? fadeOut(".fadeInSkills")
    //     : fadeIn(".fadeInSkills");
    return (
        <section id="skills" className="py-20 md:py-28 fadeInSkills">
            <SectHeading
                heading="Work Experience & Skills"
                link={true}
                linktext="View more details"
                addr="/skills"
            />
            <section className="flex flex-col md:flex-row justify-between gap-20">
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 fadeInSkills">
                    <img
                        className="fadeInSkills"
                        src={javascript}
                        alt="javascript"
                    />
                    <img
                        className="hidden md:block fadeInSkills"
                        src={typescript}
                        alt="typescript"
                    />
                    <img className="fadeInSkills" src={next} alt="next" />
                    <img
                        className="hidden md:block fadeInSkills"
                        src={react}
                        alt="react"
                    />
                    <img
                        className="hidden md:block fadeInSkills"
                        src={gatsby}
                        alt="gatsby"
                    />
                    <img
                        className="fadeInSkills"
                        src={tailwindcss}
                        alt="tailwindcss"
                    />
                    <img className="fadeInSkills" src={gcp} alt="gcp" />
                    <img
                        className="fadeInSkills"
                        src={firebase}
                        alt="firebase"
                    />
                    <img className="fadeInSkills" src={mysql} alt="mysql" />
                    <img
                        className="hidden md:block fadeInSkills"
                        src={postgres}
                        alt="postgres"
                    />
                    <img
                        className="hidden md:block fadeInSkills"
                        src={mongo}
                        alt="mongo"
                    />
                    <img
                        className="hidden md:block fadeInSkills"
                        src={sanity}
                        alt="sanity"
                    />
                    <img
                        className="hidden md:block fadeInSkills"
                        src={graphsql}
                        alt="graphql"
                    />
                    <img className="fadeInSkills" src={node} alt="node" />
                    <img
                        className="hidden md:block fadeInSkills"
                        src={postman}
                        alt="postman"
                    />
                    <img className="fadeInSkills" src={java} alt="java" />
                    <img
                        className="hidden md:block fadeInSkills"
                        src={heroku}
                        alt="heroku"
                    />
                    <img className="fadeInSkills" src={flutter} alt="flutter" />
                </div>
                <div className="md:w-2/5 flex flex-col justify-around gap-10 md:gap-6">
                    <WorkExp
                        date="May 2022"
                        role="Frontend Developer Intern"
                        company="Tweek Labs"
                        addr="/work-experience/tweek-labs"
                    />
                    <WorkExp
                        date="Apr 2022"
                        role="Web Developer Intern"
                        company="Pixotronics"
                        addr="/work-experience/pixotronics"
                    />
                    <WorkExp
                        date="Mar 2022"
                        role="Software Engineer Intern"
                        company="Auriga Innovative Labs"
                        addr="/work-experience/auriga-innovative-labs"
                    />
                </div>
            </section>
        </section>
    );
};

export default Skills;
