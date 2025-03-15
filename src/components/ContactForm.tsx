import { useState } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
	const [formData, setFormData] = useState({
		from_name: "",
		from_email: "",
		message: "",
	});

	const [status, setStatus] = useState(""); // To show success/error message

	const handleChange = (e: any) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();

		emailjs.send(
			import.meta.env.VITE_EMAILJS_SERVICE_ID,
			import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
			{
				from_name: formData.from_name,
				from_email: formData.from_email,
				message: formData.message,
			},
			import.meta.env.VITE_EMAILJS_PUBLIC_KEY
		).then(
			(response: any) => {
				console.log("Email sent:", response);
				setStatus("success");
				setFormData({
					from_name: "",
					from_email: "",
					message: "",
				}); // Clear form
			},
			(error: any) => {
				console.error("Error:", error);
				setStatus("error");
			}
		);
	};

	return (
		<div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
			<h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
				Contact Us
			</h2>

			{status === "success" && (
				<p className="text-green-600 bg-green-100 p-3 rounded-md text-center mb-4">
					Message sent successfully!
				</p>
			)}

			{status === "error" && (
				<p className="text-red-600 bg-red-100 p-3 rounded-md text-center mb-4">
					Failed to send message. Please try
					again.
				</p>
			)}

			<form className="space-y-6" onSubmit={handleSubmit}>
				<input
					type="text"
					name="from_name"
					placeholder="Your Name"
					value={formData.from_name}
					onChange={handleChange}
					required
					className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
				/>
				<input
					type="email"
					name="from_email"
					placeholder="Your Email"
					value={formData.from_email}
					onChange={handleChange}
					required
					className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
				/>
				<textarea
					name="message"
					placeholder="Your Message"
					rows={4}
					value={formData.message}
					onChange={handleChange}
					required
					className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
				></textarea>
				<button
					type="submit"
					className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300 shadow-md"
				>
					Send Message
				</button>
			</form>
		</div>
	);
}

export default ContactForm;
