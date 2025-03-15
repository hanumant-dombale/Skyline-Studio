import { Play, CheckCircle, Target } from "lucide-react";

const features = [
	{
		icon: <Target className="w-8 h-8 text-red-600" />,
		title: "Custom Solutions",
		description: "Tailored approaches to meet your specific needs",
	},
	{
		icon: <Play className="w-8 h-8 text-red-600" />,
		title: "Quick Turnaround",
		description: "Fast delivery without compromising on quality",
	},
	{
		icon: <CheckCircle className="w-8 h-8 text-red-600" />,
		title: "Expert Team",
		description:
			"Skilled professionals with years of industry experience",
	},
];

function FeatureItem() {
	return features.map((feature, index) => (
		<FeatureItemDesign
			key={index}
			icon={feature.icon}
			title={feature.title}
			description={feature.description}
		/>
	));
}

function FeatureItemDesign({
	icon,
	title,
	description,
}: {
	icon: React.ReactNode;
	title: string;
	description: string;
}) {
	return (
		<div className="text-center">
			<div className="flex justify-center mb-4">{icon}</div>
			<h3 className="text-xl font-semibold mb-3">{title}</h3>
			<p className="text-gray-600">{description}</p>
		</div>
	);
}

export default FeatureItem;
