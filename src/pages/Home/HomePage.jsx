import Content from "../../components/Content/Content";
import ContentSection from "../../components/Content/ContentSection";
import Hero from "../../components/Hero/Hero";
import Marketing from "../../components/marketing/Marketing";
import Services from "../../components/services/Services";


export default function HomePage() {
  return (
    <>
      <Hero />
      <Marketing />
      <Content />
      <ContentSection />
      <Services />
    </>
  )
}
