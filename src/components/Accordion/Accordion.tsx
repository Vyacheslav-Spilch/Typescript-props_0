import React from "react";
import AccordionTitle from "./AccordionTitle/AccordionTitle";
import AccordionBody from "../AccordionBody";

type AccordionPropsTypy = {
    status: boolean;
}

const Accordion = (props: AccordionPropsTypy) => {
    if(props.status) {
        return (
            <div>
                <AccordionTitle text = {"Value component true"} />
                <AccordionBody />
            </div>
        )
    } else {
        return (
            <div>
                <AccordionTitle text = {"Value component false"} />
                <AccordionBody />
            </div>
        )
    }
}

export default Accordion