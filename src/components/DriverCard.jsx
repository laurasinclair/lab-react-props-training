import React from 'react'
import Rating from './Rating.jsx'

function DriverCard({ name, rating, img, car }) {
	return (
		<div className="DriverCard">
			<img src={img} alt={`${name}`}/>
			
			<div>
				<p><strong>{name}</strong></p>
				<Rating>{rating}</Rating>
				<p>{car.model} - {car.licensePlate}</p>
			</div>
		</div>
	)
}

export default DriverCard
