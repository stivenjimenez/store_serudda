import Image from 'next/image'
export default function User() {
	const srcAddress: string = '/user-profile-pic.jpg'
	const userName: string = 'Zyruks#6666'
	return (
		<>
			<Image
				className='rounded-full w-16'
				src={srcAddress}
				width={100}
				height={100}
				alt='user profile'
			/>

			<div>
				<p className='font-bold'>{userName}</p>
				<button className='hover:underline'>Cerrar Sesión</button>
			</div>
		</>
	)
}
