import s from "./MainPage.module.css";
import TitleSection from "../../components/TitleSection/TitleSection";
import CatalogSection from "../../components/CatalogSection/CatalogSection";
import SaleGetSection from "../../components/SaleGetSection/SaleGetSection";
import SaleSection from "../../components/SaleSection/SaleSection";
import { useEffect, useRef } from "react";

function MainPage() {
  let SaleSectionRef = useRef();

  function scrollToSaleSection() {
    SaleSectionRef.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() =>{
    document.title= 'MainPage'
  }, [])

  return (
    <div>
      <TitleSection scrollToSaleSection={scrollToSaleSection} />
      <CatalogSection />
      <SaleGetSection />
      <SaleSection ref={SaleSectionRef} />
    </div>
  );
}

export default MainPage;
