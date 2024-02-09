import logo from '../assets/logo.png'
import { FaFacebookF, FaTwitter, FaWifi } from 'react-icons/fa'
import { TiSocialGooglePlus } from 'react-icons/ti'
import { GoDotFill } from 'react-icons/go'

function Footer() {
	return (
		<div className="bg-black text-white flex flex-col items-center pt-16 pb-8">
			<div className="w-full flex justify-between px-40 uppercase">
				<img src={logo} alt="logo" width={100} className="h-fit aspect-video" />

				<div className="flex flex-col">
					<a href="#">Weekly Themes</a>
					<a href="#">Pre-Sale Faqs</a>
					<a href="#">Submit A Ticket</a>
				</div>

				<div className="flex flex-col">
					<a href="#">Services</a>
					<a href="#">Theme Tweak</a>
				</div>

				<div className="flex flex-col">
					<a href="#">Showcase</a>
					<a href="#">Widgetkit</a>
					<a href="#">Support</a>
				</div>
				<div className="flex flex-col">
					<a href="#">About Us</a>
					<a href="#">Contact Us</a>
					<a href="#">Affiliates</a>
					<a href="#">Resources</a>
				</div>
			</div>

			<hr className="my-12 w-[80vw]" />

			<div className="flex items-center justify-center gap-3">
				<a href="#">
					<FaFacebookF className="border p-2 rounded-full" size={40} />
				</a>
				<a href="#">
					<FaTwitter className="border p-2 rounded-full" size={40} />
				</a>
				<a href="#">
					<FaWifi className="border p-2 rounded-full rotate-45" size={40} />
				</a>
				<a href="#">
					<TiSocialGooglePlus className="border p-1 rounded-full" size={40} />
				</a>
				<a href="#">
					<GoDotFill className="border p-1 rounded-full" size={40} />
				</a>
			</div>
			<p className="mt-4 text-sm">{'©Copyright. All rights reserved.'}</p>
		</div>
	)
}

export default Footer
