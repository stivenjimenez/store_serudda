'use client'

import type { IButton } from '@/models/Button'

export default function Button({ text }: IButton) {
	return (
		<button className='w-[144px] h-[40px] bg-purple rounded-[10px] hover:bg-purple/secondary ease-in-out duration-300'>
			{text}
		</button>
	)
}
