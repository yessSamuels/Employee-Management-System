import React from 'react'
import SearchBox from "./SearchBox";
import DataTable from "./DataTable";


export default function Main(props) {
    return (
        <div>
            {props.children}
        </div>
    )
};