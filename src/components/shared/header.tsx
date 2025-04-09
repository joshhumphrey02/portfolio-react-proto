import Link from 'next/link';

export default function Header() {
	return (
		<header className=" flex justify-between items-center">
			<div>
				<img src="/logo.png" alt="Logo" className=" w-20 h-20 object-cover" />
			</div>
			<nav>
				<ul className=" flex gap-6 items-center">
					<li>
						<Link
							href={'/'}
							className="font-semibold text-base md:text-lg text-gray-100">
							Services
						</Link>
					</li>
					<li>
						<Link
							href={'/'}
							className="font-semibold text-base md:text-lg text-gray-400">
							Works
						</Link>
					</li>
					<li>
						<Link
							href={'/'}
							className="font-semibold text-base md:text-lg text-gray-400">
							Blog
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
