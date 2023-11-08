import React from "react";

type AccordionTitlePropsType = {
    text: string;
}

function AccordionTitle (props: AccordionTitlePropsType) {
    return <h3>{props.text}</h3>
}

export default AccordionTitle