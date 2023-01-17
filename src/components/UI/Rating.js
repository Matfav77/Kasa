import React from 'react'
const Rating = props => {

    let ratingSignature = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= props.rating) ratingSignature.push(true);
        else ratingSignature.push(false);
    }

    return (
        <p>
            {ratingSignature.map((e, index) => {
                return e ? <i className="fa-solid fa-star" key={index}></i> : <i className="fa-regular fa-star" key={index}></i>;
            })}
        </p>
    )
}

export default Rating