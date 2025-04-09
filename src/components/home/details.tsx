import { Airplay, ArrowRight, Package, PenTool } from 'lucide-react';
import Link from 'next/link';

export default function Details() {
	return (
		<section className=" h-dvh md:h-screen space-y-32">
			<div className=" grid grid-cols-2 gap-20">
				<div className="flex flex-col gap-8">
					<span>-Contact</span>
					<h3 className="text-2xl font-bold">
						Any type of Query & Discussion.
					</h3>
					<p className=" text-gray-300">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
						adipisci quae nam.
					</p>
					<Link href={'#'} className=" flex items-center gap-4 text-yellow-500">
						<span className=" text-sm underline">
							joshuahumphrey579@gmail.com
						</span>
						<span className=" text-sm underline">
							<ArrowRight className="w-4 h-4" />
						</span>
					</Link>
				</div>
				<div className="flex flex-col gap-8">
					<h2 className=" text-xl font-medium">
						You can't use up creativity, the more you use, more you have in your
						signficant mind.
					</h2>
					<p className="text-xs text-gray-300">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
						commodi sed vitae animi aperiam temporibus, atque quas cumque minima
						praesentium veritatis expedita, tempore nam. Necessitatibus id magni
						assumenda distinctio sit!
					</p>
					<div className="grid grid-cols-2">
						<div className=" flex gap-2 items-end">
							<h2 className=" text-4xl font-bold text-yellow-500">5</h2>
							<span>Years of Experience</span>
						</div>
						<div className=" flex gap-2 items-end">
							<h2 className=" text-4xl font-bold text-yellow-500">6</h2>
							<span>Happy Clients</span>
						</div>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-3 gap-6">
				<div className=" bg-yellow-500 p-2 flex gap-2 items-end h-56">
					<div className=" h-full flex items-center pl-8">
						<Package className=" w-8 h-8" />
					</div>
					<div className=" flex flex-col gap-6 flex-1 justify-end p-8">
						<h3 className="text-xl font-semibold">Product Designer</h3>
						<span>38 Projects</span>
					</div>
				</div>
				<div className=" bg-[#474d63] p-2 flex gap-2 items-end h-56">
					<div className=" h-full flex items-center pl-8">
						<PenTool className=" w-8 h-8" />
					</div>
					<div className=" flex flex-col gap-6 flex-1 justify-end p-8">
						<h3 className="text-xl font-semibold">Branding Designer</h3>
						<span>40 Projects</span>
					</div>
				</div>
				<div className=" bg-[#474d63] p-2 flex gap-2 items-end h-56">
					<div className=" h-full flex items-center pl-8">
						<Airplay className=" w-8 h-8" />
					</div>
					<div className=" flex flex-col gap-6 flex-1 justify-end p-8">
						<h3 className="text-xl font-semibold">Full Stack Developer</h3>
						<span>100 Projects</span>
					</div>
				</div>
			</div>
		</section>
	);
}
