import {useState, useEffect} from 'react'

function Greetings({lang, children}) {
	const [greeting, setGreeting] = useState('Hello')

	useEffect(() => {
		switch (lang) {
			case 'fr':
				setGreeting('Bonjour')
				break;
			case 'en':
				setGreeting('Hello')
				break;
			case 'de':
				setGreeting('Guten Tag')
				break;
			case 'es':
				setGreeting('Buenos dias')
				break;
	}
	}, [lang])

	return (
		<p>
			{greeting} {children}
		</p>
	)
}

export default Greetings