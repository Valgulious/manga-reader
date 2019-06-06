import React from 'react'
import {Link} from "react-router-dom"

const Item = (props) => {

    return(
        <div>
            <Link className='uk-link-reset' to={props.link}>
                <img className='uk-padding-small' src={"http://localhost:8080/covers/" + props.cover} alt=""/>
                <div className='uk-text-center'><h4>{props.rusTitle}</h4></div>
            </Link>
        </div>
    )

};

export default Item;