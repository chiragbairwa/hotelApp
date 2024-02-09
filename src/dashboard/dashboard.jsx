import reactLogo from '../assets/dish.jpg'
import { useEffect } from 'react'
import MenuCard from './menuCards'
import { useState } from 'react'

function Dashboard() {
	const [productData, setProductData] = useState(null)

	useEffect(() => {
		// fetch('http://192.168.1.115:8000/inventory/breakfast/list/', {
		// if (productData === null) {
		// 	fetch('http://192.168.1.115:8000/inventory/list/', {
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 		},
		// 	})
		// 		.then(res => res.json())
		// 		.then(res => setProductData(res))
		// 		.catch(err => {
		// 			console.log(err)
		// 		})
		// }
	}, [productData])

	const handleClick = category => {
		fetch('http://192.168.1.115:8000/inventory/' + category + '/list/', {
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(res => res.json())
			.then(res => setProductData(res))
			.catch(err => {
				console.log(err)
			})
	}
	return (
		<main className="text-center">
			<p className="tracking-[2px] font-bold text-xl">Our Menu</p>
			{/* Navigation between menu */}
			<div className="flex my-4 mb-0 gap-2 items-center justify-center text-yellow-300 ">
				<button className="px-3 py-1 border rounded hover:border-yellow-300">
					All
				</button>
				<button
					className="px-3 py-1 border rounded hover:border-yellow-300"
					onClick={() => {
						handleClick('breakfast')
					}}
				>
					Breakfast
				</button>
				<button
					className="px-3 py-1 border rounded hover:border-yellow-300"
					onClick={() => {
						handleClick('lunch')
					}}
				>
					Lunch
				</button>
				<button
					className="px-3 py-1 border rounded hover:border-yellow-300"
					onClick={() => {
						handleClick('shakes')
					}}
				>
					Shakes
				</button>
			</div>

			{/* Menu Cards */}
			<div className="py-8 grid lg:grid-cols-2 w-full gap-10 justify-between">
				{productData
					? productData.map((item, index) => (
							<MenuCard productData={item} key={index} imgSrc={reactLogo} />
					  ))
					: null}
			</div>
		</main>
	)
}

export default Dashboard
