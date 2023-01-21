import type { ITile } from '@/models/Tile.model'
import Button from './Button'

export default function Tile({ title, description, price }: ITile): JSX.Element {
	return (
		<div className='w-[25rem] h-[19rem] rounded-xl bg-[#1B1F1F] py-[35px] px-[30px] flex flex-col'>
			<h3 className='text-3xl font-bold truncate text-ellipsis'>{title}</h3>
			<p className='text-2sm  h-[5rem] my-[14px] line-clamp-3 break-all antialiased'>
				{description}
			</p>
			<span className='text-2xs text-[#815CD0] mb-[30px] '>{price} pts</span>
			<Button text={'Canjear'} />
		</div>
	)
}
