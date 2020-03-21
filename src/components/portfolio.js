import React from "react"
import styled from "styled-components"

const CellImage = styled.div`
background-image: url(${props => props.image});
background-size: contain;
background-repeat: no-repeat;
height: 40vw;
`

const Cell = props => (
            <div>
                <h2>{props.category}</h2>
                <h1>{props.title}</h1>
                <CellImage image={props.image}></CellImage>
                <p>{props.description}</p>
                <a href={props.url}>{props.urlname}</a>
                <hr/>
            </div>
)


export default Cell
