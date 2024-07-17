import { Inter } from "next/font/google";
import "./globals.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavbarMain from "./components/NavbarMain";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavbarMain></NavbarMain>
        {children}
        <Footer></Footer>
        </body>
     
    </html>
  );
}
