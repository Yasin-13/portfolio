import Image from "next/image";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";


export default function Home() {
  return (
<div class="bg-white ">  
<Navbar />
      <Body />
      <Footer />
      </div>
  );
}

