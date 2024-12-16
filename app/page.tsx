import BlueHeader from "./components/blue-header";
import Carousel from "./components/caraousel";
import Editors from "./components/editorspick";
import Footer from "./components/footer";
import GreenDiv from "./components/green-div";
import Finaldiv from "./components/lastdiv";
import Navbar from "./components/navbar";
import ProductCard from "./components/products-card";
import Whitediv from "./components/white-dic";

export default function Home(){
  return(
    <div>
      <BlueHeader/>
      <Navbar/>
      <Carousel/>
      <Editors/>
      <ProductCard/>
      <GreenDiv/>
      <Whitediv/>
      <Finaldiv/>
      <Footer/>
           
    </div>
  )
}