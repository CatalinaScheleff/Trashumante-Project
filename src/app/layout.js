import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trashumante",
  description: "Audiovisual",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={inter.className}>
      <ToastContainer/>
        <div className="relative min-h-screen">
        <Navbar/>
        {children}
        <Footer/>
        </div>
        </body>
    </html>
  );
}
