const protfoloios = [
	{
		image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80",
		title: "Commercial Production",
	},
	{
		image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80",
		title: "Wedding Films",
	},
	{
		image: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&q=80",
		title: "Corporate Videos",
	},
];

function PortfolioItem() {
	return protfoloios.map((portfolio, index) => (
		<PortfolioItemDesign
			key={index}
			image={portfolio.image}
			title={portfolio.title}
		/>
	));
}

function PortfolioItemDesign({
	image,
	title,
}: {
	image: string;
	title: string;
}) {
	return (
		<div className="relative group overflow-hidden rounded-xl">
			<img
				src={image}
				alt={title}
				className="w-full h-64 object-cover"
			/>
			<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
				<h3 className="text-white text-xl font-semibold">
					{title}
				</h3>
			</div>
		</div>
	);
}

export default PortfolioItem;
