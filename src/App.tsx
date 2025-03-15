import { Link } from "react-scroll";
import { Mail, Phone, Instagram } from "lucide-react";
import {
	ContactForm,
	ServiceCard,
	FeatureItem,
	PortfolioItem,
} from "./components";

function App() {
	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<header className="relative h-screen">
				<div className="absolute inset-0">
					<img
						src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80"
						alt="Video editing background"
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-black bg-opacity-60"></div>
				</div>

				<div className="relative h-full flex flex-col items-center justify-center text-white px-4">
					<h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
						Professional Video Solutions
					</h1>
					<p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
						Transform your vision into
						compelling content with our
						expert video editing and
						marketing services
					</p>
					<Link
						to="contact"
						smooth={true}
						duration={500}
						offset={-100}
						className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
					>
						Get Started
					</Link>
				</div>
			</header>

			{/* Services Section */}
			<section className="py-20 px-4">
				<h2 className="text-4xl font-bold text-center mb-16">
					Our Services
				</h2>
				<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					<ServiceCard />
				</div>
			</section>

			{/* Portfolio Section */}
			<section className="bg-gray-900 text-white py-20 px-4">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-4xl font-bold text-center mb-16">
						Our Work
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<PortfolioItem />
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-20 px-4 bg-white">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-4xl font-bold text-center mb-16">
						Why Choose Us
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<FeatureItem />
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section
				id="contact"
				className="bg-gray-100 py-20 px-4"
			>
				<div className="max-w-7xl mx-auto">
					<h2 className="text-4xl font-bold text-center mb-16">
						Contact Us
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
						<div>
							<h3 className="text-2xl font-semibold mb-6">
								Get in Touch
							</h3>
							<div className="space-y-4">
								<p className="flex items-center">
									<Mail className="w-6 h-6 mr-3" />
									skylinestudio0504@gmail.com
								</p>
								<p className="flex items-center">
									<Phone className="w-6 h-6 mr-3" />
									+91
									8483889717
								</p>
								<div className="flex space-x-4 mt-6">
									<a
										href="https://www.instagram.com/sky_line.studio/profilecard/?igsh=YnQ5aThkcjRqbmx3"
										target=""
										rel="noopener noreferrer"
										className="hover:text-red-600"
									>
										<p className="flex items-center">
											<Instagram className="w-6 h-6 mr-3" />
											Intagram
										</p>
									</a>
								</div>
							</div>
						</div>
						<ContactForm />
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-900 text-white py-8 px-4">
				<div className="max-w-7xl mx-auto text-center">
					<p>
						&copy; 2024 Video Services. All
						rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}

export default App;
