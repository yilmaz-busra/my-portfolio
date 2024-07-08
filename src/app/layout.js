import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../Components/Header";
import About from "../Components/About";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Busra Yilmaz - Portfolio",
  description: "Busra Yilmaz's portfolio website. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative bg-gray-50 text-gray-950`}>
        <div className="h-[31.25rem] w-[31.25rem]  sm:w-[68.75rem] absolute -z-10 top-[-6rem] right-[11rem] rounded-full blur-[10rem] bg-[#fbe2e3]">
          <div className="h-[31.25rem] w-[50rem]  sm:w-[68.75rem] md:left-[33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] absolute -z-10 top-[-1rem] left-[-35rem] rounded-full blur-[10rem] bg-[#fbe2e3]"></div>
        </div>
        <Header />
        {children}
      </body>
    </html>
  );
}
