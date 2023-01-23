import Header from "@/components/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-zinc-900 text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
