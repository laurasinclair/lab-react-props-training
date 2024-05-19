import {useState, useEffect} from 'react'

function Rating({children}) {
	const [stars, setStars] = useState('☆☆☆☆☆')

	return (
		<div>
			{
				stars.slice(5 - Math.round(children)).replaceAll('☆', '★') + stars.slice(Math.round(children))
			}
		</div>
	)
}

export default Rating