import { useState, useEffect } from 'react'

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
	const [typeLogo, setTypeLogo] = useState('')

	useEffect(() => {
		switch (type) {
			case 'Master Card':
				setTypeLogo('/src/assets/images/Mastercard_2019_logo.svg')
				break
			case 'Visa':
				setTypeLogo('/src/assets/images/visa-logo-svgrepo-com.svg')
				break
		}
	}, [type])

	return (
		<div className="creditCard" style={{ backgroundColor: bgColor || '#eeeeee', color: color || '#222222' }}>
			<div className="creditCard_content">
				<div className="creditCard_type">
					<img src={typeLogo} alt="" />
				</div>
				<div className="creditCard_number">{number && '•••• •••• •••• •••• ' + number.toString().slice(12, 16)}</div>
				<div className="creditCard_info">
					<div>
						<div className="creditCard_info_expiration">
							Expires {expirationMonth}/{expirationYear}
						</div>
						<div>{bank}</div>
					</div>
					<div>{owner}</div>
				</div>
			</div>
		</div>
	)
}

export default CreditCard
