import type { ITile } from '@/models/Tile.model'
import Button from './Button'

export default function Tile({ title, description, price }: ITile): JSX.Element {
	return (
		<div className='w-[20rem] h-[20rem] rounded-xl bg-black/primary py-[35px] px-[30px] flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl ease-in-out duration-150'>
			<h3 className='text-3xl font-bold truncate text-ellipsis'>{title}</h3>
			<p className='text-2sm  h-max mb-auto my-[14px] text-justify line-clamp-3 break-words antialiased'>
				{description}
			</p>
			<span className='text-2xs font-bold text-purple mb-[10px] '>{price} pts</span>
			<Button text={'Canjear'} />
		</div>
	)
}
