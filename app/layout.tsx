import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "AR VR Anatomy",
  description: "Immersive anatomy learning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}