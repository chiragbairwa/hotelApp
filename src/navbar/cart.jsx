import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createPortal } from 'react-dom'
import ModalContent from '../dashboard/modalContent'
import { FaShoppingCart } from 'react-icons/fa'
import { syncCart } from '../../redux/user/cartSlice'

function CartIcon() {
	const cartItems = useSelector(store => store.cart.items)
	const dispatch = useDispatch()

	const [showModal, setShowModal] = useState(false)

	useEffect(() => {
		fetch('http://192.168.1.115:8000/cart/list/', {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
			},
		})
			.then(res => res.json())
			.then(res => {
				console.log(res.results)
				dispatch(syncCart(res.results))
			})
			.catch(err => {
				console.log(err)
			})
	}, [])

	return (
		<div className="relative cursor-pointer">
			<FaShoppingCart size={32} onClick={() => setShowModal(true)} />

			{/* Cart Counter */}
			{cartItems.length ? (
				<div className="absolute -top-2 -right-2 h-4 text-white text-xs grid place-content-center rounded-full p-1 bg-red-500">
					{cartItems.length}
				</div>
			) : null}

			{showModal &&
				createPortal(
					<ModalContent onClose={() => setShowModal(false)} />,
					document.body
				)}
		</div>
	)
}

export default CartIcon
