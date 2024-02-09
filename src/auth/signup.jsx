import { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, redirect } from 'react-router-dom'

export default function SignUp() {
	const [loading, setLoading] = useState(false)

	const [user, setUser] = useState({
		username: '',
		email: '',
		password: '',
		passConfirm: '',
		contactNo: 0,
		isAdmin: false,
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
		if (user.password === user.passConfirm) {
			setLoading(true)
			fetch('http://192.168.1.60:5000/signUp', {
				method: 'POST',
				cache: 'no-cache',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(user),
			})
				.then(res => res.json())
				.then(res => {
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
				<label htmlFor="signupNumber">
					Mobile :{' '}
					{errors.password && (
						<span className="-mt-4 text-red-700">This field is required</span>
					)}
				</label>
				<input
					id="signupNumber"
					onChange={handleChange}
					name="contactNo"
					type="number"
					required
					maxLength={20}
					className={`p-2 rounded -mt-3 border-2 ${
						errors.password ? 'border-rose-600' : 'border-none'
					}`}
					placeholder="*********"
				/>

				{/* isAdmin */}
				<label htmlFor="signupNumber">
					Are you an Admin? :{' '}
					{errors.password && (
						<span className="-mt-4 text-red-700">This field is required</span>
					)}
					<input
						id="isAdmin"
						onChange={e => {
							setUser({
								...user,
								isAdmin: e.target.checked,
							})
						}}
						checked={user.isAdmin}
						name="isAdmin"
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
