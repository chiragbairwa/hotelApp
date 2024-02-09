import Navbar from './navbar/navbar'
import Dashboard from './dashboard/dashboard'
import Footer from './footer/footer'

function App() {
	return (
		<>
			<div className="px-8 md:px-32 py-4 md:py-4">
				<Navbar />
				<Dashboard />
			</div>
			<Footer />
		</>
	)
}

export default App
