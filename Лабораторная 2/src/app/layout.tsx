import type { Metadata } from 'next'
import { Caveat, Inter } from 'next/font/google'

import './style.css'

const caveat = Caveat({
	variable: '--font-caveat-sans',
	subsets: ['cyrillic']
})

const inter = Inter({
	variable: '--font-inter',
	subsets: ['cyrillic']
})

export const metadata: Metadata = {
	title: 'Cats',
	description: 'Cats site'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="ru">
			<body className={`${caveat.variable} ${inter.variable} antialiased`}>{children}</body>
		</html>
	)
}
