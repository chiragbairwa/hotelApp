import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { createPortal } from 'react-dom'
import ModalContent from '../dashboard/modalContent'
import { FaShoppingCart } from 'react-icons/fa'

function CartIcon() {
	const cartItems = useSelector(store => store.cart.items)
	const [showModal, setShowModal] = useState(false)
	// useEffect(() => {

	// }, [])

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
