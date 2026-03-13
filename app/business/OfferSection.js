export default function OfferSection({ id, cards = [], className = "" }) {
	return (
		<div id={id} className={className}>
			{cards.map((card, index) => (
				<div
					key={card.title}
					className={`content-category ${index !== cards.length - 1 ? "border-b border-white/10 pb-10" : ""
						} ${index !== 0 ? "pt-10" : ""}`}
				>
					<h2>
						{card.title}
					</h2>

					<p dangerouslySetInnerHTML={{ __html: card.description }}></p>

					<div className="">
						<img
							src={card.image}
							alt={card.title}
							className="h-[150px] w-full object-cover md:h-[200px] rounded-2xl"
						/>
					</div>
				</div>
			))}
		</div>
	);
}