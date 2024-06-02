import Image from "next/image";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";


export default function Home() {
  return (
<div class="bg-gradient-to-r from-slate-900 to-slate-700 ">  
<Navbar />
      <Body />
      <Footer />
      </div>
  );
}

