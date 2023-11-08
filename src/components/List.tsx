import React from "react";
import s from './List.module.css'

type ListPropsType = {
    message: string;
}

export const List = (props: ListPropsType) => {
    return (
        <div className={s.text}>
            <h3>{props.message}</h3>
        </div>
    )
}