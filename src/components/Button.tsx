'use client'

import type { IButton } from '@/models/Button'

export default function Button({ text }: IButton) {
	return (
		<button className='w-[144px] h-[40px] bg-[#815CD0] rounded-[10px] hover:bg-[#6034c0] ease-in-out duration-300'>
			{text}
		</button>
	)
}
