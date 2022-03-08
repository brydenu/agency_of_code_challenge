import React, { useState } from "react";
import filledStar from "../Resources/star-filled.png";
import blankStar from "../Resources/star-blank.png";
import previewText from "./previewText.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Product.css";

/**
 * Product - individual product/review
 *
 * Components:
 * photos - photos to be displayed of the product
 * review - text review of product
 * rating - user rating
 * user - object containing "avi" (picture of user) and "name" of user
 */
export default function Product({ photos, review, rating, user }) {
    const [stars, setStars] = useState(rating);
    const [expandedReview, setExpandedReview] = useState(false);

    // Lets you change rating by clicking on any star you want.
    const handleStarClick = (evt) => {
        evt.preventDefault();
        const starNumber = evt.target.attributes.value.value;
        setStars(starNumber);
    };

    // Expands review beyond preview, and back,
    const handleReviewClick = (evt) => {
        evt.preventDefault();
        setExpandedReview((current) => !current);
    };

    // Logic for displaying the correct amound of filled in and empty stars
    const starArr = Array(5);
    let i = 0;
    while (i < 5) {
        if (stars >= i + 1) {
            starArr[i] = (
                <img
                    src={filledStar}
                    className={`s-${i + 1}`}
                    value={i + 1}
                    onClick={handleStarClick}
                />
            );
        } else {
            starArr[i] = (
                <img
                    src={blankStar}
                    className={`s-${i + 1}`}
                    value={i + 1}
                    onClick={handleStarClick}
                />
            );
        }
        i++;
    }

    const formattedReview = previewText(review);
    const expanded = expandedReview ? "expanded" : "minimized";

    return (
        <div className="product-container">
            <div className="product-header">
                <img src={user.avi} />
                <div className="header-info">
                    <p>{user.name}</p>
                    <div className="star-rating">
                        {starArr.map((star) => star)}
                    </div>
                </div>
            </div>
            <div className={"product-review " + expanded}>
                <p className={"review-text " + expanded}>
                    {formattedReview.full}
                </p>
                <FontAwesomeIcon
                    icon={faAngleDown}
                    onClick={handleReviewClick}
                />
            </div>
            <div className="product-photos">
                {photos.map((photo) => (
                    <img src={photo} />
                ))}
            </div>
        </div>
    );
}
