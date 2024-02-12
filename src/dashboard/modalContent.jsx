import { useSelector, useDispatch } from 'react-redux'
import { clearCart, removeItem } from '../../redux/user/cartSlice'
// Icons
import { IoIosClose } from 'react-icons/io'
import { MdDelete } from 'react-icons/md'
import { FaShoppingCart } from 'react-icons/fa'
import { useState } from 'react'

const CartItem = ({ productData }) => {
	const dispatch = useDispatch()
	const [num, setNum] = useState(0)
	return (
		<div className="flex items-center justify-around">
			<img
				src={productData?.image}
				className="w-12 h-12 bg-black rounded-full"
			/>
			<div>
				<p className="text-left">Cart Item</p>
				<p className="flex items-center justify-center gap-3">
					{`₹${productData?.price}`}
					<span className="border rounded-2xl w-fit flex items-center gap-2 px-2 ">
						<button className="text-xl" onClick={() => setNum(num + 1)}>
							+
						</button>
						<span className="text-red-600 text-sm">{num}</span>
						<button className="text-2xl" onClick={() => setNum(num - 1)}>
							-
						</button>
					</span>
				</p>
			</div>
			<MdDelete
				color="red"
				size={28}
				onClick={() => dispatch(removeItem(productData.name))}
				className="cursor-pointer"
			/>
		</div>
	)
}

export default function ModalContent({ onClose }) {
	const cartItems = useSelector(store => store.cart.items)
	const dispatch = useDispatch()

	const totalCartPrice = () => {
		if (!cartItems.length) {
			return 0
		}
		let total = 0
		cartItems.map(item => {
			total += item.price
		})
		return total
	}

	return (
		<div className="absolute top-0 flex w-full min-h-full backdrop-blur-[1px]">
			<section
				className="hidden md:block w-1/2 min-h-full "
				onClick={onClose}
			/>

			<section className="relative bg-white md:w-1/2 min-h-full p-12 shadow-2xl rounded text-center">
				<IoIosClose
					className="cursor-pointer absolute top-3 right-5"
					size={32}
					onClick={onClose}
				/>

				<div className="flex justify-between items-center">
					{'+91 8239382938'}
					<div className="flex items-center gap-2">
						<FaShoppingCart />

						{cartItems.length
							? `${cartItems.length} Items - ₹${totalCartPrice()}`
							: null}
					</div>
				</div>

				<div className="flex flex-col gap-6 my-6">
					{cartItems.length
						? cartItems.map((item, index) => (
								<CartItem key={index} productData={item} />
						  ))
						: null}
				</div>

				<span className="mr-36 text-xl font-bold">Total :</span>
				<span className="tracking-[1px]">{`₹${totalCartPrice()}`}</span>

				<div className="flex gap-4 items-center justify-center my-6">
					{cartItems.length ? (
						<button
							onClick={() => dispatch(clearCart())}
							className="border rounded px-1 py-0"
						>
							Clear Cart
						</button>
					) : null}
					<button onClick={() => {}} className="border rounded px-1 py-0">
						CheckOut
					</button>
				</div>
			</section>
		</div>
	)
}
