import SearchBar from '@/components/SearchBar'
import Tile from '@/components/Tile'
import User from '@/components/User'

const fetchGifts = () => {
	return fetch('http://localhost:3000/api/').then(res => res.json())
}

export default async function Home() {
	const gifts = await fetchGifts()

	return (
		<main className='relative py-16 flex flex-col gap-10 items-center content-center min-h-full'>
			<div>
				<div className='flex flex-col items-center flex-wrap justify-center'>
					<h1 className='text-5xl font-bold md:text-7xl'>La Tienda</h1>
					<p className='text-3xl text-center font-semibold md:text-4xl'>
						Canjea los puntos en premios
					</p>

					<div className='flex relative my-5  gap-x-10 flex-wrap justify-center px-4'>
						<div className='flex relative my-5 items-center '>
							<SearchBar />
						</div>
						<div className='flex relative items-center gap-x-4'>
							<User />
						</div>
					</div>
				</div>

				<div className='my-12 grid lg:grid-cols-3 md:grid-cols-2 gap-[40px] justify-center px-4'>
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
