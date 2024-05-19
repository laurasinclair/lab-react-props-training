import {useState, useEffect} from 'react'

function Random({min, max}) {
	const [number, setNumber] = useState(0)

	useEffect(() => {
		setNumber(Math.floor(Math.random() * (max - min + 1) + min))
	}, [min, max])

	return (
		<p>Random value between {min} and {max} = {number}</p>
	)
}

export default Random
