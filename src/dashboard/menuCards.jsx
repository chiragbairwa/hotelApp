import { addItem } from '../../redux/user/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

const MenuCard = ({ productData }) => {
	const cartItems = useSelector(store => store.cart.items)
	const dispatch = useDispatch()

	const [cartNum, setCartNum] = useState(1)

	const addToCart = () => {
		let data = cartItems

		for (let i = 0; i < cartNum; i++) {
			data = [...data, productData]
		}
		dispatch(addItem(data))
	}

	return (
		<div className="flex gap-4 lg:max-w-[30vw] ">
			<img
				src={productData.image}
				alt={productData.name}
				className="w-[192px] h-[192px] aspect-square outline outline-yellow-600 rounded"
			/>

			<div className="text-left w-full">
				<p className="font-bold flex justify-between tracking-[2px]">
					{productData.name}
					<span className="text-yellow-300">{`₹${productData.price}`}</span>
				</p>
				<hr className="my-2" />
				{/* dish content */}
				<div className="text-sm h-24">
					{productData.content}
					<div className="flex gap-2 float-right mt-2 ">
						<button className="border rounded-2xl px-3 " onClick={addToCart}>
							Add <span className="text-red-300">+</span>
						</button>
						<div className="border rounded-2xl w-fit flex items-center gap-4 px-2 ">
							<button
								className="text-2xl"
								onClick={() => setCartNum(cartNum - 1)}
							>
								-
							</button>
							<span className="text-red-300">{cartNum}</span>
							<button
								className="text-xl"
								onClick={() => setCartNum(cartNum + 1)}
							>
								+
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MenuCard
