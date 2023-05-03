import HeroHeader from "../components/homepage-landing";
import Courses from "../components/courses";
import Jobs from "../components/jobs";
import Finder from "../components/internship-finder";
import Socials from "../components/socials";
import Mission from "../components/mission";
import TestimonialCard from "../components/testimonials-card";
import HackathonPreview from "../components/hackathon-preview";
import { useEffect } from "react";
import { useToast, Button, Box } from "@chakra-ui/react";
import Link from "next/link";
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
              transform: "scale(1.1)",
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
    
      <Box my={["20px", "65px"]}>
        <HeroHeader />
        <Mission />
        <Courses />
        <Finder />
        <HackathonPreview />
       
       <Box mt="100px"><TestimonialCard />
       </Box> 
      </Box>
      <Socials />
    </>
  );
}
