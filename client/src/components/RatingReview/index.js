import React from "react";
import { useState } from "react";
import RatingStar from "../RatingStar";

const RatingReview = () => {
    const [gradeIndex, setGradeIndex] = useState();
    const GRADES = ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'];
    const activeStar = {
        fill: '#31587a'
    };

    const changeGradeIndex = (index) => {
        setGradeIndex(index);
    }

    return (
        <div className="rating-container">

            <p className="rating-result" style={{ fontSize: '13px' }}>
                {GRADES[gradeIndex] ? GRADES[gradeIndex] : 'You didn\'t review yet'}
            </p>

            <div className="rating-stars">
                {
                    GRADES.map((grade, index) => (
                        <RatingStar
                            index={index}
                            key={grade}
                            changeGradeIndex={changeGradeIndex}
                            style={gradeIndex > index ? activeStar : {}}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default RatingReview;