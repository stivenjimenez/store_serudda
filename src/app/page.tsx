import SearchBar from '@/components/SearchBar'
import Tile from '@/components/Tile'

const fetchGifts = () => {
	return fetch('http://localhost:3000/api/').then(res => res.json())
}

export default async function Home() {
	const gifts = await fetchGifts()

	return (
		<main>
			<div>
				<div className='absolute w-[1158px] h-[1158px;] -translate-x-1/2 -translate-y-[747px] bg-gradient-radial from-[#815CD0]/40  via-[#815CD0]/10 to-transparent left-1/2  rounded-full blur-3xl opacity-70 '></div>

				<div className='flex flex-col items-center py-5'>
					<h1 className='text-7xl font-bold'>La Tienda</h1>
					<h2 className='text-4xl font-semibold'>Canjea los puntos en premios.</h2>

					<div className='flex relative mt-4'>
						<SearchBar />
					</div>
				</div>

				<div className='grid lg:grid-cols-3 md:grid-cols-2 gap-[40px]'>
					{gifts &&
						gifts.map((gift: { name: string; description: string; price: number }) => (
							<Tile
								key={gift.name}
								title={gift.name}
								description={gift.description}
								price={gift.price}
							/>
						))}
				</div>
			</div>
		</main>
	)
}
