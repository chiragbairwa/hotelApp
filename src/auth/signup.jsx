import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp() {
	const [loading, setLoading] = useState(false)
	const redirect = useNavigate()

	const [user, setUser] = useState({
		username: '',
		email: '',
		password: '',
		passwordConfirm: '',
		phone_number: 0,
		is_admin: false,
	})

	const [errors, setErrors] = useState({
		username: false,
		email: false,
		password: false,
	})
	const handleChange = event => {
		setUser({
			...user,
			[event.target.name]: event.target.value,
		})
	}

	const handleSubmit = event => {
		event.preventDefault()

		if (user.password === user.passwordConfirm) {
			setLoading(true)
			fetch('http://192.168.1.115:8000/account/register/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(user),
			})
				.then(res => res.json())
				.then(res => {
					console.log(res)

					if (res.message) {
						toast.success('Sign Up Completed')
						redirect('/signin')
					}
					if (res.error) {
						toast.error(res.error)
						setErrors({ username: false, email: false, password: false })
					}
				})
				.catch(err => console.log(err))
				.finally(() => setLoading(false))
		}
	}
	useEffect(() => {
		if (window.sessionStorage.getItem('token')) {
			redirect('/')
		}
	}, [])

	return (
		<main className="text-white w-screen h-screen flex items-center justify-center">
			<form
				onSubmit={handleSubmit}
				className="flex flex-col gap-4 bg-red-300 rounded p-12 w-96"
			>
				<h1 className="m-auto text-2xl">Sign Up</h1>
				<label htmlFor="signupUsername">
					Username :{' '}
					{errors.username && (
						<span className="-mt-4 text-red-700">{errors.username}</span>
					)}
				</label>
				{/* <input type='text' {...register("username", { required: true, maxLength: 20 })} className='p-2 rounded -mt-3' placeholder='Username'/> */}
				<input
					id="signupUsername"
					onChange={handleChange}
					name="username"
					required
					maxLength={20}
					className={`p-2 rounded -mt-3 border-2 ${
						errors.username ? 'border-rose-600' : 'border-none'
					}`}
					placeholder="your username"
					pattern="[A-Za-z]+"
					title="Only alphabets | without spaces"
				/>

				<label htmlFor="signupEmail">Email : </label>
				{/* <input type='email' {...register("email", { required: true, maxLength: 20 })} className='p-2 rounded -mt-3' placeholder='test@gmail.com'/> */}
				<input
					type="email"
					id="signupEmail"
					onChange={handleChange}
					name="email"
					required
					maxLength={20}
					className={`p-2 rounded -mt-3 border-2 ${
						errors.email ? 'border-rose-600' : 'border-none'
					}`}
					placeholder="test@gmail.com"
					inputMode="email"
				/>

				<label htmlFor="signupPass">
					Password :{' '}
					{errors.password && (
						<span className="-mt-4 text-red-700">This field is required</span>
					)}
				</label>
				<input
					id="signupPass"
					onChange={handleChange}
					name="password"
					type="password"
					required
					maxLength={20}
					className={`p-2 rounded -mt-3 border-2 ${
						errors.password ? 'border-rose-600' : 'border-none'
					}`}
					placeholder="*********"
				/>

				{/* Confirm Password */}
				<label htmlFor="signupPassConfirm">
					Confirm Password :{' '}
					{errors.password && (
						<span className="-mt-4 text-red-700">This field is required</span>
					)}
				</label>
				<input
					id="signupPassConfirm"
					onChange={handleChange}
					name="passwordConfirm"
					type="password"
					required
					maxLength={20}
					className={`p-2 rounded -mt-3 border-2 ${
						errors.password ? 'border-rose-600' : 'border-none'
					}`}
					placeholder="*********"
				/>

				{/* Contact Number */}
				<label htmlFor="phone_number">
					Mobile :{' '}
					{errors.password && (
						<span className="-mt-4 text-red-700">This field is required</span>
					)}
				</label>
				<input
					id="phone_number"
					onChange={handleChange}
					name="phone_number"
					type="number"
					required
					maxLength={20}
					className={`p-2 rounded -mt-3 border-2 ${
						errors.password ? 'border-rose-600' : 'border-none'
					}`}
				/>

				{/* isAdmin */}
				<label htmlFor="is_admin">
					Are you an Admin? :{' '}
					{errors.password && (
						<span className="-mt-4 text-red-700">This field is required</span>
					)}
					<input
						id="is_admin"
						onChange={e => {
							setUser({
								...user,
								is_admin: e.target.checked,
							})
						}}
						checked={user.is_admin}
						name="is_admin"
						type="checkbox"
						className={`p-2 rounded -mt-3 border-2`}
					/>
				</label>
				<button
					disabled={loading}
					className={`p-2 rounded border text-center text-white
            ${
							loading
								? 'bg-red-900 border-red-900 cursor-wait'
								: 'bg-red-800 border-red-800 cursor-pointer'
						}`}
					type="submit"
				>
					{loading ? 'Processing...' : 'Sign up'}
				</button>

				<Link
					to="/signin"
					className="p-2 rounded border text-green-800 border-green-800 bg-white cursor-pointer text-center"
				>
					Sign In
				</Link>
			</form>
		</main>
	)
}
