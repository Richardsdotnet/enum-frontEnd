import Image from "next/image";
import { Inter } from "next/font/google";
import SchoolNav from "@/component/SchoolNav";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return(
    <div className="">
      {/* Hellooo
      <p>HELLO WORD</p>
      <p>HELLO WOJJHHHRD</p>
      <p>HELLO WORD</p>
      <p>HELLO WORD</p>
      <p>HELLO WORD</p> */}
      <SchoolNav/>
    </div>
  )
  // return (
  // <div>
  // Hello
  //     <div/>
  //     );
}
