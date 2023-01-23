import SearchBar from '@/components/SearchBar'
import Tile from '@/components/Tile'

const fetchGifts = () => {
	return fetch('http://localhost:3000/api/').then(res => res.json())
}

export default async function Home() {
	const gifts = await fetchGifts()

	return (
		<main className='relative py-16 flex flex-col gap-10 items-center content-center min-h-full'>
			<div>
				<div className='flex flex-col items-center'>
					<h1 className='text-7xl font-bold'>La Tienda</h1>
					<h2 className='text-4xl font-semibold'>Canjea los puntos en premios</h2>

					<div className='flex relative my-5'>
						<SearchBar />
					</div>
				</div>

				<div className='my-12 grid lg:grid-cols-3 md:grid-cols-2 gap-[40px]'>
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
