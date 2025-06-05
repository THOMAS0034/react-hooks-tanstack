import React from 'react'

export const Productcard = ({name,image,price,rating}) => {
  return (
    <div>
        <div className="card-container">
            <div className="card">
                <h2>{name}</h2>
      <img src={image} alt={name} width="150" />
      <p>Price: {price}</p>
      <p>Average Rating: {rating?.average}</p>
      <p>Reviews: {rating?.reviews}</p>
            </div>
        </div>
    </div>
  )
}
