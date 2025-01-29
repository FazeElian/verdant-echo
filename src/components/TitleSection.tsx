// Styles
import React from "react";
import "../assets/css/components/TitleSection.css";

type TitleSectionType = {
    svg: React.ComponentType
    title: string
}

const TitleSection = (props: TitleSectionType) => {
    return (
        <div className="cont-title-section">
            <div className="title-section">
                <props.svg />
                {props.title}
            </div>
        </div>
    )
}

export { TitleSection };