// /api/create-checkout-session

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const mapToStripeItem = (item) => ({
	description: item.description,
	quantity: 1,
	price_data: {
		currency: "inr",
		unit_amount: item.price * 100,
		product_data: {
			name: item.title,
			images: [item.image],
		},
	},
});

export default async (req, res) => {
	console.log("BACKEND, baby");
	const { items, email } = req.body;
	const stripeLineItems = items.map(mapToStripeItem);
	const itemImages = items.map((item) => item.image);

	const session = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		line_items: stripeLineItems,
		mode: "payment",
		success_url: `${process.env.HOST}/success`,
		cancel_url: `${process.env.HOST}/cancel`,
		metadata: {
			email,
			images: JSON.stringify(itemImages),
		},
		shipping_address_collection: {
			allowed_countries: ["GB", "IN", "US"],
		},
		shipping_rates: ["shr_1JHCL3SEmR6PvsUZwBcEhQXn"],
	});

	console.log({ session });
	res.status(200).json({ id: session.id });
};
