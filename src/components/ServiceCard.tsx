import { Video, Camera, Megaphone, Target } from "lucide-react";

const services = [
	{
		icon: <Video className="w-10 h-10" />,
		title: "Video Editing",
		description: "Professional editing with creative storytelling.",
	},
	{
		icon: <Camera className="w-10 h-10" />,
		title: "Video Shooting",
		description:
			"High-quality video production with professional equipment.",
	},
	{
		icon: <Megaphone className="w-10 h-10" />,
		title: "Digital Marketing",
		description:
			"Strategic digital marketing to reach your audience.",
	},
	{
		icon: <Target className="w-10 h-10" />,
		title: "Meta Ad Runs",
		description:
			"Targeted Meta advertising campaigns for engagement.",
	},
];

function ServiceCard() {
	return services.map((service, index) => (
		<ServiceCardDesign
			key={index}
			icon={service.icon}
			title={service.title}
			description={service.description}
		/>
	));
}

function ServiceCardDesign({
	icon,
	title,
	description,
}: {
	icon: React.ReactNode;
	title: string;
	description: string;
}) {
	return (
		<div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
			<div className="text-red-600 mb-4">{icon}</div>
			<h3 className="text-xl font-semibold mb-3">{title}</h3>
			<p className="text-gray-600">{description}</p>
		</div>
	);
}

export default ServiceCard;
