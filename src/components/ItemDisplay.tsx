import Image from "next/image";

export interface Item {
	name: string;
	type: string;
	description: string;
	imageUrl: string;
}

interface ItemDisplayProps {
	title: string;
	description: string;
	items: Item[];
}

export default function ItemDisplay({ items, title, description }: ItemDisplayProps) {
	return (
		<div className="antialiased bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
					<p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
				</div>
				<ul
					role="list"
					className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
				>
					{items.map((item) => (
						<li key={item.name} className="group">
							<Image
								className="group-hover:brightness-50 ease-in duration-100 aspect-[3/2] w-full rounded-2xl object-cover"
								src={item.imageUrl}
								alt=""
							/>
							<h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900 group-hover:text-indigo-900">
								{item.name}
							</h3>
							<p className="text-base leading-7 text-gray-600 group-hover:text-indigo-600">{item.type}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
