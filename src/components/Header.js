import React from 'react'

const styles = {
    header: {
        backgroundColor: "rgb(243,242,242)",
        color: "white",
        textShadow: "10px 10px 25px black",
        textAlign: "center",
        marginTop: "-1.5rem",
        marginLeft: "-1.5rem",
        marginRight: "-1.5rem",
        padding: "2rem",
        borderBottom: "5px solid red"
    }
    
}

export default function Header(props) {
    return (
        <div style={styles.header}>
            <h1>{props.title}</h1>
            <h2 className="display-2 text-center font-weight-bold">{props.subtitle}</h2>
        </div>
    )
}