"use client";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Textarea,
  Button,
  VStack,
  Box,
  useToast,
  Heading,
  Input,
  NumberInput,
  NumberInputField,
  Text,
  Flex,
  Grid,
  Image,
  Checkbox,
  CheckboxGroup,
  GridItem,
} from "@chakra-ui/react";
import { useState } from "react";
import Select from "react-select";

export default function DonationForm() {
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [donationItems, setDonationItems] = useState([]);
  const [itemQuantity, setItemQuantity] = useState(1);
  const [additionalInfo, setAdditionalInfo] = useState("");

  const toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const webhookURL =
      "https://discord.com/api/webhooks/1115401017626992720/bLrzgoyA2vlLjz5yRXkIKiFSWVzjKpHuDYWjo0bG9T-dZjUZ1utn8_EpZcZg6tzk--Pj"; 

    const data = {
      embeds: [
        {
          title: "New Donation Request",
          fields: [
            { name: "Company Name", value: companyName },
            { name: "Contact Name", value: contactName },
            { name: "Contact Email", value: contactEmail },
            { name: "Items to donate", value: donationItems },
            {
              name: "Number of Items to donate",
              value: itemQuantity.toString(),
            },
            { name: "Additional Information", value: additionalInfo },
          ],
        },
      ],
    };

    console.log(data)

    try {
      const response = await fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          description:
            "You have successfully contacted Tech Optimum regarding donating technology. We will get back to you as soon as possible.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setCompanyName("");
        setContactName("");
        setContactEmail("");
        setDonationItems([]);
        setItemQuantity(1);
        setAdditionalInfo("");
      } else {
        throw new Error("Error sending form");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={10}
        mx= {{ base: '2', md: '7'}}
        p={4}
      >
        <GridItem p={4}>
          <Grid alignItems={"center"}>
            <Flex>
              <Box >
                <Heading
                  color="primary"
                  textAlign={{ base: 'center', md: 'start'}}
                  mt="7rem"
                  fontSize="5xl"
                  fontWeight="medium"
                  mb="1rem"
                >
                  Support Technology Access for All
                </Heading>
                <Text mb="2rem" color="primary" textAlign={{ base: 'center', md: 'start'}}>
                  Your donation fuels our mission to bridge the digital gap,
                  ensuring that every person, regardless of their circumstances,
                  can harness the opportunities of the digital world.
                </Text>
              </Box>
            </Flex>
            <Flex>
              <Image src="donate.svg" />
            </Flex>
          </Grid>
        </GridItem>
        <GridItem margin="auto" mb="4rem" w="100%" mt={{base: '2rem', md: '6rem'}}  p={4}>
          <VStack
            margin="auto"
            spacing={4}
            maxW="700px"
            as="form"
            onSubmit={handleSubmit}
            borderRadius="8px"
            px="2rem"
            py="2rem"
            color="primary !important"
            bg="gray.100"
          >
            <FormControl isRequired id="companyName">
              <FormLabel color="primary">Company Name</FormLabel>
              <Input
                _placeholder={{ opacity: 1, color: "gray.500" }}
                borderColor={"gray.300"}
                placeholder="Please enter your Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </FormControl>

            <FormControl isRequired id="contactName">
              <FormLabel color="primary">Contact Name</FormLabel>
              <Input
                _placeholder={{ opacity: 1, color: "gray.500" }}
                borderColor={"gray.300"}
                placeholder="Please enter your Name"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
              />
            </FormControl>

            <FormControl isRequired id="contactEmail">
              <FormLabel color="primary">Contact Email</FormLabel>
              <Input
                _placeholder={{ opacity: 1, color: "gray.500" }}
                borderColor={"gray.300"}
                type="email"
                placeholder="Please enter your email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
              <FormHelperText>We will contact you here</FormHelperText>
            </FormControl>

            <FormControl id="donationItems">
              <FormLabel color="primary">Items to Donate</FormLabel>
              <Select
                isMulti
                options={[
                  { value: "Laptops", label: "Laptops" },
                  { value: "Desktops", label: "Desktops" },
                  { value: "Monitors", label: "Monitors" },
                  { value: "Keyboards", label: "Keyboards" },
                  { value: "Mouses", label: "Mouses" },
                ]}
                value={donationItems}
                onChange={setDonationItems}
              />
            </FormControl>

            <FormControl id="itemQuantity">
              <FormLabel color="primary">Number of Items to Donate</FormLabel>
              <NumberInput
                _placeholder={{ opacity: 1, color: "gray.500" }}
                borderColor={"gray.300"}
                placeholder="130"
                value={itemQuantity}
                onChange={setItemQuantity}
                min={1}
              >
                <NumberInputField />
              </NumberInput>
            </FormControl>

            <FormControl id="additionalInfo">
              <FormLabel color="primary">Additional Information</FormLabel>
              <Textarea
                _placeholder={{ opacity: 1, color: "gray.500" }}
                borderColor={"gray.300"}
                placeholder="Please include any additional information here"
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
              />
            </FormControl>

            <Button
              fontWeight="thin"
              width="100%"
              mt="18px !important"
              colorScheme="blue"
              type="submit"
            >
              Submit
            </Button>
          </VStack>
        </GridItem>
      </Grid>
    </>
  );
}
