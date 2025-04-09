import Details from '@/components/home/details';
import Hero from '@/components/home/hero';

export default function Home() {
	return (
		<div className=" min-h-screen w-full md:w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto px-4 md:px-16">
			<Hero />
			<Details />
		</div>
	);
}
