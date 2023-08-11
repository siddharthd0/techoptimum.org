"use client";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import HeroHeader from "@/components/homepage-landing";
import Courses from "@/components/courses";
import Finder from "@/components/internship-finder";
import Features from "@/components/features";
import Approach from "@/components/approach";
import { Box } from "@chakra-ui/react";

export default function Home() {
  const [data, setData] = useState({});

  const DISCORD_WEBHOOK_URL = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL;

  useEffect(() => {
    async function fetchIP() {
      try {
        const response = await axios.get('https://ipgeolocation.abstractapi.com/v1/', {
          params: {
            api_key: '2315cc56532645c7aa892ecc2efe3bd7',
          },
        });

        if (response && response.data) {
          setData(response.data); 


          await axios.post(DISCORD_WEBHOOK_URL, {
            content: `Visitor Data: ${JSON.stringify(response.data)}`
          });
        } else {
          console.error("Unexpected API response format", response.data);
          setData({ error: 'Unexpected response format.' });
        }
      } catch (error) {
        console.error("Failed to fetch data or send to Discord", error);
        setData({ error: "Error fetching data" });
      }
    }

    fetchIP();
  }, []);

  return (
    <Box my={["20px", "130px"]} px={5}>
      <HeroHeader />
      <Courses />
      <Features />
      <Approach />
      <Finder />
      {/* Displaying the IP address at the bottom of the page, you can place it wherever you like */}
      <Box mt={5}>
        <h1>Your IP Address: {data.ip_address ? data.ip_address : 'Loading...'}</h1>
      </Box>
    </Box>
  );
}
