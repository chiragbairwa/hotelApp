import logo from '../assets/logo.png'
import CartIcon from './cart'

function Navbar() {
	return (
		<nav className="flex justify-between items-center">
			<img src={logo} alt="logo" width={80} height={50} />
			<p className="tracking-[4px] text-2xl mr-10">SUNRISE</p>
			<CartIcon />
		</nav>
	)
}

export default Navbar
