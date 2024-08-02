import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Busra Yilmaz - Portfolio",
  description: "Busra Yilmaz's portfolio website. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative  text-gray-950`}>
        <div className="h-[31.25rem] w-[31.25rem] sm:w-[68.75rem] absolute -z-10 top-[-6rem] right-[11rem] rounded-full blur-[10rem] ">
          <div className="h-[31.25rem] w-[50rem] sm:w-[68.75rem] md:left-[33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] absolute -z-10 top-[-1rem] left-[-35rem] rounded-full "></div>
        </div>
        <Header />
        <div className="flex flex-col lg:flex-row justify-evenly items-center max-w-6xl mx-auto">
          <div className="min-h-screen flex items-center justify-center ">
            <Sidebar />
          </div>
          <div className="lg:w-3/4  ">{children}</div>
        </div>
      </body>
    </html>
  );
}
