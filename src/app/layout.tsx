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
			<head />
			<body className='text-white min-h-screen bg-bg/dark flex flex-col gap-10 items-center content-center relative overflow-hidden'>
				{children}
			</body>
		</html>
	)
}
