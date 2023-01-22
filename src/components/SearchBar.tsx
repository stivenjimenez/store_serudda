import Image from 'next/image'

export default function SearchBar() {
	return (
		<>
			<input
				type='text'
				className='font-semibold w-96 text-white bg-black/primary py-2 px-3 rounded-lg focus:ring-purple focus:ring-2 focus-visible:outline-0 border-0 ease-in-out duration-100'
				placeholder='Buscar...'
				autoComplete='off'
				maxLength={40}
			/>
			<button className='absolute top-2 right-4'>
				<Image src={'/search.png'} width={22} height={22} alt='search-icon' priority />
			</button>
		</>
	)
}
