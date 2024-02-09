'use client'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

type FormData = {
	username: String
	email: String
	password: String
}

export default function SignUp() {
	const router = useRouter()
	const [loading, setLoading] = useState(false)

	const [user, setUser] = useState<FormData>({
		username: '',
		email: '',
		password: '',
	})

	const [errors, setErrors] = useState({
		username: false,
		email: false,
		password: false,
	})
	const handleChange = (event: any) => {
		setUser({
			...user,
			[event.target.name]: event.target.value,
		})
	}

	const handleSubmit = (event: any) => {
		event.preventDefault()

		setLoading(true)
		fetch('/api/signup', {
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
					router.push('/signin')
				}
				if (res.error) {
					toast.error(res.error)
					setErrors({ username: false, email: false, password: false })
				}
			})
			.catch(err => console.log(err))
			.finally(() => setLoading(false))
	}
	return (
		<main>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col gap-4 bg-gray-200 rounded p-12 w-96"
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

				<button
					disabled={loading}
					className={`p-2 rounded border text-center text-white
            ${
							loading
								? 'bg-green-900 border-green-900 cursor-wait'
								: 'bg-green-800 border-green-800 cursor-pointer'
						}`}
				>
					{loading ? 'Processing...' : 'Sign up'}
				</button>

				<Link
					href="/signin"
					className="p-2 rounded border text-green-800 border-green-800 bg-white cursor-pointer text-center"
				>
					Sign In
				</Link>
			</form>
		</main>
	)
}
