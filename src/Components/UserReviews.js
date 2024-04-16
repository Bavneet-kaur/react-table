import React from "react";
import PropTypes from "prop-types";

function UserReviews({ stars }) {
  return (
    <div className="userReview">
      {[...new Array(Math.round(stars <= 10 ? stars : 0)).keys()].map((v) => (
        <div className="star" key={v} />
      ))}
    </div>
  );
}
UserReviews.propTypes = {
  star: PropTypes.number.isRequired,
};
