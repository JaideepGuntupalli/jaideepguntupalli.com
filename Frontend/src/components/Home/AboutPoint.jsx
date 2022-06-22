import * as React from "react";

const AboutPoint = ({ title, img, imgAlt, desc }) => {
    return (
        <div className="flex items-start gap-8">
            <img src={img} alt={imgAlt} className="w-1/6" />
            <div>
                <h4 className="font-bold text-3xl md:text-[2rem]">{title}</h4>
                <p className="text-lg md:text-xl leading-normal">{desc}</p>
            </div>
        </div>
    );
};

export default AboutPoint;
