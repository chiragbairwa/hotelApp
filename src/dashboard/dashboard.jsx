import reactLogo from '../assets/dish.jpg'

const MenuCard = ({ imgSrc, name, price, content }) => {
	return (
		<div className="flex gap-4 w-full">
			<img
				src={imgSrc}
				alt={name}
				className="w-[12rem] h-fit outline outline-yellow-600 rounded"
			/>

			<div className="text-left">
				<p className="font-bold flex justify-between tracking-[2px]">
					{name}
					<span className="text-yellow-300">{`₹${price}`}</span>
				</p>
				<hr className="my-2" />
				{/* dish content */}
				<p className="text-sm">
					{content}
					<div className="flex gap-1 float-right mt-2 ">
						<button className="border rounded-2xl px-3 " onClick={() => {}}>
							Add <span className="text-red-300">+</span>
						</button>
						<div className="border rounded-2xl w-fit flex items-center gap-2 px-2 ">
							<button className="text-2xl">-</button>
							<span className="text-red-300">{2}</span>
							<button className="text-xl">+</button>
						</div>
					</div>
				</p>
			</div>
		</div>
	)
}

function Dashboard() {
	return (
		<main className="text-center">
			<p className="tracking-[2px] font-bold text-xl">Our Menu</p>
			{/* Navigation between menu */}
			<div className="flex my-4 mb-0 gap-2 items-center justify-center text-yellow-300 ">
				<a
					href="#all"
					className="px-3 py-1 border rounded hover:border-yellow-300"
				>
					All
				</a>
				<a
					href="#Breakfast"
					className="px-3 py-1 border rounded hover:border-yellow-300"
				>
					Breakfast
				</a>
				<a
					href="#Lunch"
					className="px-3 py-1 border rounded hover:border-yellow-300"
				>
					Lunch
				</a>
				<a
					href="#Shakes"
					className="px-3 py-1 border rounded hover:border-yellow-300"
				>
					Shakes
				</a>
			</div>

			{/* Menu Cards */}
			<div className="py-8 grid lg:grid-cols-2 grid-flow-row-dense gap-10 justify-between">
				{[...Array(8)].map(item => (
					<MenuCard
						key={item}
						imgSrc={reactLogo}
						name="Buttermilk Pancakes"
						price={150}
						content={
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "
						}
					/>
				))}
			</div>
		</main>
	)
}

export default Dashboard
