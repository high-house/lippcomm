import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/Navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased bg-[#292828] text-[#9fdcff] relative`}
        style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        cz-shortcut-listen="true"
      >
        <div className="tab1">

        </div>
        <div className="tab2">

        </div>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
