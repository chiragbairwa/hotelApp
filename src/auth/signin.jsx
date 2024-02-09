import toast from 'react-hot-toast'
import { useState } from 'react'
import { Link, redirect } from 'react-router-dom'

export default function SignIn() {
	const [loading, setLoading] = useState(false)
	const [user, setUser] = useState({
		email: '',
		password: '',
	})

	const handleChange = event => {
		setUser({
			...user,
			[event.target.name]: event.target.value,
		})
	}

	const handleSubmit = event => {
		event.preventDefault()

		setLoading(true)

		fetch('http://192.168.1.115:8000/account/signin/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		})
			.then(res => res.json())
			.then(res => {
				console.log(res)
				if (res.success) {
					toast.success('Login Success')
					setLoading(false)
					// redirect('/')
				}
				if (res.error) toast.error(res.error)
				console.log()
			})
			.catch(err => console.log(err))
			.finally(() => setLoading(false))
	}

	return (
		<main className="px-24 text-white w-screen h-screen flex items-center justify-center">
			<form
				onSubmit={handleSubmit}
				className="flex flex-col gap-4 bg-red-300 rounded p-12 w-96"
			>
				<h1 className="m-auto text-2xl">Sign In</h1>
				<label htmlFor="signinEmail">Email : </label>
				{/* <input type='email' {...register("email")} required className='p-2 rounded -mt-3' placeholder='test@gmail.com'/> */}
				<input
					type="email"
					id="signinEmail"
					onChange={handleChange}
					name="email"
					required
					maxLength={80}
					className="p-2 rounded -mt-3"
					placeholder="test@gmail.com"
					inputMode="email"
				/>

				<label htmlFor="signinPass">Password :</label>
				{/* <input type='password' required className='p-2 rounded -mt-3' placeholder='*********'/> */}
				<input
					id="signinPass"
					onChange={handleChange}
					name="password"
					type="password"
					required
					maxLength={80}
					className="p-2 rounded -mt-3"
					placeholder="*********"
				/>

				{/* isAdmin */}
				<label htmlFor="signinPass">Password :</label>
				{/* <input type='password' required className='p-2 rounded -mt-3' placeholder='*********'/> */}
				<input
					id="signinPass"
					onChange={handleChange}
					name="password"
					type="password"
					required
					maxLength={80}
					className="p-2 rounded -mt-3"
					placeholder="*********"
				/>

				<button
					disabled={loading}
					className={`p-2 rounded border  text-center text-white
            ${
							loading
								? 'bg-green-900 cursor-wait'
								: 'bg-green-800 border-green-800 cursor-pointer'
						}`}
				>
					{loading ? 'Processing...' : 'Login'}
				</button>

				<Link
					to="/signup"
					className="p-2 rounded border text-green-800 border-green-800 bg-white cursor-pointer text-center"
				>
					Sign Up
				</Link>
			</form>
		</main>
	)
}
