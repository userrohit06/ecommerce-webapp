import React, { Fragment } from 'react'

const Stars = ({ stars = 0 }) => {
    // convert numbers into stars

    // convert rating to a number between 0 and 5
    const normalizedRating = Math.min(Math.max(stars, 0), 5)

    // calculate the number of filled and empty stars
    const filledStars = Math.floor(normalizedRating)
    const emptyStars = 5 - filledStars

    return (
        <Fragment>
            {
                [...Array(filledStars)].map((_, index) => (
                    <span key={index} style={{ color: 'black' }}>&#9733;</span>
                ))
            }{
                [...Array(emptyStars)].map((_, index) => (
                    <span key={index} style={{ color: 'lightGrey' }}>&#9734;</span>
                ))
            }
        </Fragment>
    )
}

export default Stars