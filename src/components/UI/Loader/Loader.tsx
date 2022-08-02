import React from 'react'
export default function Loader() {
  return (
    <div className="loader">
      <div className="loader_inner">
        <div className="heart-rate">
          <svg version="1.0" x="0px" y="0px" width="150px" height="73px" viewBox="0 0 150 73" enableBackground="new 0 0 150 73">
            <polyline fill="none" stroke="#80d6d3" strokeWidth="3" strokeMiterlimit="10" points="0,45.486 38.514,45.486 44.595,33.324 50.676,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,63.729 84.122,45.486 97.297,45.486 103.379,40.419 110.473,45.486 150,45.486"></polyline>
          </svg>
          <div className="fade-in"></div>
          <div className="fade-out"></div>
        </div>
      </div>
    </div>
  )
}
