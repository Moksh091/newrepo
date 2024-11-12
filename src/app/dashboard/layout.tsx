import { Navbar } from "@/components/UI/Navbar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
            <Navbar/>
          {children}
        </body>
      </html>
    );
  }
  