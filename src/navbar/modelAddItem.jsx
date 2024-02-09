export default function ModelAddItem({ onClose }) {
	const cartItems = useSelector(store => store.cart.items)
	const dispatch = useDispatch()

	const totalCartPrice = () => {
		if (!cartItems.length) {
			return 0
		}
		return 4545
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
								<CartItem key={index} price={392} />
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
