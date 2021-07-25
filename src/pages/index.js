import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Home({ products }) {
	return (
		<div className="bg-gray-100">
			<Head>
				<title>Amazon 2.0 by paramjot</title>
			</Head>

			<Header />

			<Main products={products} />
		</div>
	);
}

export const getServerSideProps = async (context) => {
	const response = await fetch("https://fakestoreapi.com/products");
	const products = await response.json();

	return {
		props: {
			products,
		},
	};
};
