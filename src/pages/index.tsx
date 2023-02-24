import Header from "@/components/Header";
import ItemDisplay from "@/components/ItemDisplay";
import Head from "next/head";
import { Item } from "@/components/ItemDisplay";

const nations: Item[] = [
	{
		name: "Darkhan",
		description:
			"The birthplace & homeland of the Darkhan Empire. Centuries ago the hordes of Darkhan roamed theses lands terrorizing the inhabitants. Today the Darkhan Empires sprawls across multiple peoples and landmasses. It's influence rivals that of the Zuros Republic.",
		type: "Nation",
		imageUrl: "darkhan.webp",
	},
	{
		name: "Zuros",
		description: "The home of the Republic of Zuros.",
		type: "Nation",
		imageUrl: "zuros.webp",
	},
	{
		name: "Fjoll",
		description:
			"Birthplace of the Elves. Mountainous in the north and heavily forested. This is a sacred land to the people of Zorus.",
		type: "Nation",
		imageUrl: "fjoll.webp",
	},
	{
		name: "Kide",
		description:
			"Land of the northern Humans and ancient Dwarves. The Dwarves have been exiled from society and keep to their caves underground. They have a neutrality pact with the Republic. There are many monasteries here, inhabited by some rather... unruly monks.",
		type: "Nation",
		imageUrl: "kide.webp",
	},
	{
		name: "Ardon",
		description:
			"Once inhabited by the ancient races of Orc's, tieflings and others. As the humans and elves expanded, many of these races were killed off in horrible wars. This land has never really fit into society well, but is currently inhabited by mostly working class humans, elves and half elves. There is a lot of industry influence from the Empire here, even though it's technically in the republic's sphere of influence.",
		type: "Nation",
		imageUrl: "ardon.webp",
	},
];

export default function Home() {
	return (
		<>
			<Head>
				<title>Darkhan Rising</title>
				<meta name="description" content="The world handbook for Darkhan Rising" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Header image="Orox (No Text).jpg"></Header>
				<ItemDisplay
					title="The 7 Nations of Orox"
					description="Orox is a small world with a big presence. The history of the 7 nations is violent and unfinished."
					items={nations}
				></ItemDisplay>
			</main>
		</>
	);
}
