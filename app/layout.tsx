import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <main>
          {children}
          <Link href='/real-route'>
              Real Route
          </Link>
          <Link href='/symlink-route'>
              Symlink Route
          </Link>
      </main>
      </body>
    </html>
  )
}
