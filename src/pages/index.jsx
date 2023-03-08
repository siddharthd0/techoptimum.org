import HeroHeader from "../components/homepage-landing";
import Courses from "../components/courses";
import Jobs from "../components/jobs";
import Events from "../components/events";
import Finder from "../components/internship-finder";
import Socials from "../components/socials";
import Mission from "../components/mission";
import TestimonialCard from "../components/testimonials-card";
import { useEffect } from "react";
import { useToast, Button, Box } from "@chakra-ui/react";
import Link from "next/link";
//redepoylkafmkfm
export default function Home() {
  const toast = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      toast.closeAll();
    }, 50000);
    toast({
      position: "bottom-right",

      render: () => (
       <Link href="announcements">
        <Box
        transition={"300ms"}
        _hover={{
          cursor: "pointer",
          transform: 'scale(1.1)',
        }} 
          borderRadius={"10px"}
          mb="1rem"
          mx="1.5rem"
          color="white"
          p={3}
          bg="#29368C"
          px="1.5rem"
        >
          Check out our latest announcements →
         
        </Box>
         </Link>
      ),
    });
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      {/* <Button onClick={() => toast.closeAll()}>Close Toast</Button>*/}
      <meta name="og:title" content="Tech Optimum "></meta>
      <meta
        name="og:description"
        content="A student-led organization dedicated to helping and inspiring the next generation of tech leaders."
      ></meta>
      <meta name="og:image" content=" /meta.png"></meta>
      <Box my={["20px", "65px"]} _hover={{}}>
        <HeroHeader />
        <Mission />
        <Courses />
        <Events />
        <Jobs />
        <Finder />
        <TestimonialCard />
      </Box>
      <Socials />
    </>
  );
}
