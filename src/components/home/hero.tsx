import Link from 'next/link';
import Header from '../shared/header';
import { ArrowRight, Dribbble, Instagram, Linkedin } from 'lucide-react';

export default function Hero() {
	return (
		<section className=" h-dvh md:h-screen">
			<div className="flex h-full relative flex-col gap-20 py-12 md:py-20">
				<div className=" absolute -z-10 top-20 h-[70%] w-[80%] mx-auto left-[10%]">
					<img
						src="/user.png"
						alt="User"
						className=" w-full object-contain h-full"
					/>
				</div>
				<Header />
				<div className=" grid grid-cols-3 gap-8">
					<div className=" col-span-2 flex flex-col justify-between gap-24">
						<div className=" flex flex-col gap-4">
							<h2 className=" text-4xl md:text-7xl font-bold">
								Humphrey <br /> Joshua.
							</h2>
							<div className="w-20 h-1 bg-yellow-500"></div>
						</div>
						<div>
							<ul className=" flex gap-4 items-center">
								<li>
									<Link href={'#'}>
										<Dribbble className=" w-4 h-4 text-white" />
									</Link>
								</li>
								<li>
									<Link href={'#'}>
										<Instagram className=" w-4 h-4 text-white" />
									</Link>
								</li>
								<li>
									<Link href={'#'}>
										<Linkedin className=" w-4 h-4 text-white" />
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="flex flex-col gap-8">
						<span>-Introduction</span>
						<h3 className="text-2xl font-bold">
							Full-Stack Developer, Product Designer, based in Nigeria.
						</h3>
						<p className=" text-gray-300">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
							adipisci quae nam. Tenetur ipsam natus illo eligendi maiores
							voluptates asperiores sunt velit numquam! In culpa minima delectus
							sapiente harum sunt!
						</p>
						<Link
							href={'#'}
							className=" flex items-center gap-4 text-yellow-500">
							<span className=" text-sm underline">My Story</span>
							<span className=" text-sm underline">
								<ArrowRight className="w-4 h-4" />
							</span>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
