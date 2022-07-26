import Footer from "../components/footer";
import Header from "../components/header";
import HeroHeader from "../components/homepage-landing";
import Courses from "../components/courses";
import Events from "../components/events";

export default function Home() {
  return (
    <>
      <Header />
      <HeroHeader />
      <Courses />
      <Events />
      <Footer />
    </>
  );
}
