import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
		<html lang='es'>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<title>La Tienda 🪙</title>
			<head />
			<body className='text-[#FFFCF7] min-h-screen bg-[#141717] flex flex-col gap-10 items-center content-center relative overflow-hidden'>
				{children}
			</body>
		</html>
	)
}
