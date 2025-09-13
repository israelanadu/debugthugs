import React from "react";
import DisplayRating from "./displayrating";
import { PiUserLight } from "react-icons/pi";

class Rating extends React.Component {
    calculateRatings() {
        const { rating } = this.props; // [{ rating: 5, comment: "...", name: "..." }, ...]

        if (!rating || rating.length === 0) {
            return {
                average: 0,
                counts: [0, 0, 0, 0, 0], // index 0 = 1 star, 4 = 5 stars
                percentages: [0, 0, 0, 0, 0],
            };
        }

        const total = rating.length;
        let sum = 0;
        const counts = [0, 0, 0, 0, 0];

        rating.forEach(r => {
            const val = Math.round(r.rating); // round rating if decimal
            if (val >= 1 && val <= 5) {
                counts[val - 1] += 1;
                sum += val;
            }
        });

        const average = sum / total;

        // Calculate percentages
        const percentages = counts.map(c => (c / total) * 100);

        return { average, counts, percentages, total };
    }

    render() {
        const { average, counts, percentages // , total
         } = this.calculateRatings();
        const { rating } = this.props;

        const commentList = rating.length > 0 ? rating.map(list =>{
            return(
                <div className="comment_container">
                        <section className="comment_head">
                            <div className="info_contain">
                                <div className="image"><PiUserLight /></div>
                                <h5>{list.name}</h5>
                            </div>
                            <div className="info_contain star">
                                <h5>{list.rating}</h5>
                                <div className="rating_contain">
                                    <DisplayRating rating={list.rating} />
                                </div>
                            </div>
                        </section>
                        <section className="comment_body">
                            <p>{list.comment} </p>
                        </section>

                    </div>
            )
        }) : null 






        return (
            <div className="rating_container">
                <section className="rating_cover one">
                    <div className="rating_number">
                        <h4>{average.toFixed(1)}</h4>
                        <div className="center">
                            <div className="rating_star_contain"><DisplayRating rating={average} /></div>
                            <p>Star Reviews
                                {/* {total} {total === 1 ? "Review" : "Reviews"} */}
                            </p>
                        </div>
                    </div>

                    <div className="rating_bar long">
                        {/* Progress bars */}
                        <div className="line_bar">
                            {percentages.slice().reverse().map((percent, i) => (
                                <li className="color" key={i}>
                                    <div className="progress" style={{ width: `${percent}%` }}></div>
                                </li>
                            ))}
                        </div>

                        {/* Counts per star */}
                        <div className="line_bar short">
                            {[5, 4, 3, 2, 1].map((star, i) => (
                                <li key={star}>
                                    <span>{star}.0</span> {counts[star - 1]} {counts[star - 1] === 1 ? "Review" : "Reviews"}
                                </li>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="rating_cover two">
                    {commentList}
                </section>
            </div>
        );
    }
}


export default Rating