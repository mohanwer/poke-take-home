export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <meta name="viewport" content="initial-scale=1, width=device-width"/>
      <title>Pokemon page</title>
    </head>
    <body>
    {children}
    </body>
    </html>
  );
}
