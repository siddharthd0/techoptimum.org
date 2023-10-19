"use client";
import {
  Box,
} from "@chakra-ui/react";
import PodcastHero from "@/components/talks-landing";
import ShowOff from "@/components/show-off";
export default function Podcasts() {

  return (
    <>
      <Box mb="100px">


        <PodcastHero />
        <ShowOff />

      </Box>

    </>
  );
}
