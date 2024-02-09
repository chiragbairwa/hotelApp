import { useEffect } from 'react'
import cart from '../assets/cart.svg'
import { useSelector, useDispatch } from 'react-redux'

function CartIcon() {
	const cartItems = useSelector(store => store.cart.items)
	const dispatch = useDispatch()

	// useEffect(() => {

	// }, [])

	return (
		<div className="relative">
			<img src={cart} alt="logo" width={32} height={32} />

			{cartItems.length ? (
				<div className="absolute -top-2 -right-2 h-4 text-white text-xs grid place-content-center rounded-full p-1 bg-red-500">
					{' '}
					{cartItems.length}{' '}
				</div>
			) : null}
		</div>
	)
}

export default CartIcon
