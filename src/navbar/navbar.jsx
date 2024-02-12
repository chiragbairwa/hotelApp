import logo from '../assets/logo.png'
import CartIcon from './cart'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
	const redirect = useNavigate()

	const is_admin = useSelector(store => store.cart.is_admin)
	const onLogout = () => {
		window.sessionStorage.removeItem('token')
		redirect('/signin')
	}
	return (
		<nav className="flex justify-between items-center">
			<img src={logo} alt="logo" width={80} height={50} />
			{is_admin && (
				<Link to="/admin" className="border p-2 rounded">
					Add ITEM
				</Link>
			)}
			<p className="tracking-[4px] text-2xl -mr-12">SUNRISE</p>
			<div className="flex gap-4">
				<CartIcon />
				<button
					onClick={onLogout}
					className="flex gap-2 relative border py-1 px-3 rounded hover:border-red-500 hover:bg-red-500 hover:text-white"
				>
					Logout
				</button>
			</div>
		</nav>
	)
}

export default Navbar
