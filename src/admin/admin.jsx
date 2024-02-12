import { useState } from 'react'
import { useEffect } from 'react'
import { CiCircleRemove } from 'react-icons/ci'

function Admin() {
	const [loading, setLoading] = useState(false)
	const [dish, setDish] = useState({
		name: '',
		image: '',
		image_name: '',
		content: '',
		price: 0,
		quantity: 0,
		category: '',
	})

	// useEffect(() => {
	// 	fetch('')
	// }, [])
	const handleImage = event => {
		let selectedFile = event.target.files[0]
		const reader = new FileReader()
		reader.readAsDataURL(selectedFile)
		reader.onload = () => {
			setDish({
				...dish,
				image: reader.result,
			})
		}
	}

	const handleChange = event => {
		setDish({
			...dish,
			[event.target.name]: event.target.value,
		})
	}

	const handleSubmit = event => {
		event.preventDefault()
		setDish({
			...dish,
			image_name: dish.name,
		})

		console.log(dish)
		fetch('http://192.168.1.115:8000/inventory/add/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
			},
			body: JSON.stringify(dish),
		})
			.then(res => res.json())
			.then(res => console.log(res))
			.catch(err => {
				console.log(err)
			})
	}

	return (
		<>
			{/* Menu Cards */}
			<div className="p-16 w-full gap-10 flex flex-col justify-between">
				<h1 className="font-bold">Add a Dish</h1>
				<form
					onSubmit={handleSubmit}
					className="flex flex-col justify-between gap-10"
				>
					{/* name */}
					<label className="flex gap-2">
						Name of Dish:
						<input
							name="name"
							onChange={handleChange}
							className="border border-black rounded"
						></input>{' '}
					</label>

					{/* image */}
					<label>
						image of Dish:
						<input
							type="file"
							name="name"
							onChange={handleImage}
							className="border border-black rounded w-fit"
						></input>
					</label>

					{/* content */}
					<label>
						content of Dish:
						<input
							name="content"
							onChange={handleChange}
							className="border border-black rounded"
						></input>{' '}
					</label>

					{/* price */}
					<label>
						price of Dish:
						<input
							name="price"
							onChange={handleChange}
							className="border border-black rounded"
						></input>{' '}
					</label>

					{/* quantity */}
					<label>
						quantity of Dish:
						<input
							name="quantity"
							onChange={handleChange}
							className="border border-black rounded"
						></input>{' '}
					</label>

					{/* category */}
					<label>
						category of Dish:
						<input
							name="category"
							onChange={handleChange}
							className="border border-black rounded"
						></input>{' '}
					</label>

					{/* Submit */}
					<button
						disabled={loading}
						className={`p-2 w-fit rounded border text-center text-white
            ${
							loading
								? 'bg-red-900 border-red-900 cursor-wait'
								: 'bg-red-800 border-red-800 cursor-pointer'
						}`}
						type="submit"
					>
						{loading ? 'Processing...' : 'Add Dish'}
					</button>
				</form>
			</div>
		</>
	)
}

export default Admin
