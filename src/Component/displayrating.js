import React, { Component } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

class DisplayRating extends Component {
    state = {
        rating: 3.75
    }
    // rating sport here, will still move it
    renderStars() {
        const rating  = this.props.rating ?? 0;;
        const stars = [];

        // Extract integer and decimal part
        let fullStars = Math.floor(rating);
        const decimal = rating - fullStars;
        let hasHalfStar = false;

        if (decimal >= 0.9) {
            fullStars += 1;
        } else if (decimal >= 0.4) {
            hasHalfStar = true;
        }

        const totalDisplayed = fullStars + (hasHalfStar ? 1 : 0);
        const emptyStars = 5 - totalDisplayed;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={`full-${i}`} />);
        }

        if (hasHalfStar) {
            stars.push(<FaStarHalfAlt key="half" />);
        }

        for (let i = 0; i < emptyStars; i++) {
            stars.push(<FaRegStar key={`empty-${i}`} />);
        }

        return stars;
    }
    render() {
        return (
            <>
                {this.renderStars().map((star, index) => (
                    <li key={index}>{star}</li>
                ))}
            </>
        )
    }
}


export default DisplayRating