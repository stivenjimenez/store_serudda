import Image from 'next/image'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='es'>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body className='text-white min-h-screen bg-bg/dark relative'>
				<div className='w-screen absolute inset-x-0 -top-80 md:-top-1/4 lg:-top-2/4 flex align-center justify-center'>
					<Image
						className=' '
						src={'/ellipse.png'}
						width={1159}
						height={1159}
						alt={'ellipse'}
					/>
				</div>
				{children}
			</body>
		</html>
	)
}
