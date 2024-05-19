import React from 'react'

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
	return (
		<>
			<div className="idCard">
				<img src={picture} alt={`${firstName} ${lastName}`} />

				<div>
					<p>
						<strong>First name:</strong> {lastName}
					</p>
					<p>
						<strong>Last name:</strong> {firstName}
					</p>
					<p>
						<strong>Gender</strong> {gender}
					</p>
					<p>
						<strong>Height:</strong> {height} cm
					</p>
					<p>
						<strong>Birth</strong>{' '}
						{birth.toLocaleDateString('en-EN', {
							month: 'long',
							year: 'numeric',
							day: 'numeric',
						})}
					</p>
				</div>
			</div>
		</>
	)
}

export default IdCard
