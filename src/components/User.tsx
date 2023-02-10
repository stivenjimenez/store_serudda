export default function User() {
	const srcAddress: string = './user-profile-pic.jpg'
	const userName: string = 'Zyruks#6666'
	return (
		<>
			<img className='rounded-full w-16' src={srcAddress} alt='user profile pic' />
			<div>
				<p className='font-bold'>{userName}</p>
				<button className='hover:underline'>Cerrar Sesión</button>
			</div>
		</>
	)
}
