import { Container, Flex, Heading, Text, Button } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons";


export default function HeroHeader() {

    return (
        <>
            <Flex
                height={"100vh"}
                width={"100%"}
                direction={"column"}
            >
                <Flex 
                    direction={"column"}
                    width={"60%"}
                    margin={"7rem 0 0 6rem"}
                >
                    <Heading color="primary" fontSize="5xl" marginBottom={"2.5rem"}>
                        Learn. Participate. Accomplish.
                    </Heading>
                    <Text
                        fontSize="2xl"
                        color="primary"
                        marginBottom={"2.5rem"}
                        width={"85%"}
                    >A student-led organization helping and inspiring future leaders of the tech industry worldwide.</Text>
                    <Button
                        backgroundColor="transparent"
                        _hover={{ backgroundColor: "transparent" }}
                        width="fit-content"
                        padding={"0"}
                        color="#1B76FF"
                        fontWeight={"400"}
                        rightIcon={ <ExternalLinkIcon /> }
                    >LEARN MORE</Button>
                </Flex>
                <Container
                    maxWidth={"60%"} 
                    backgroundColor="#29368C"
                    height={"20vh"}
                    margin={"0 auto"}
                    borderRadius={"36px"}
                    marginTop={"5rem"}
                >
                    <Flex
                        alignItems={"center"}
                        height={"100%"}
                    >
                        <Heading
                            color="white"
                            fontSize="2xl"
                            fontWeight={"400"}
                            width={"30%"}
                            textAlign={"center"}
                        >
                            40+ FREE PROGRAMMING COURSES
                        </Heading>
                        <Heading
                            color="white"
                            fontSize="2xl"
                            fontWeight={"400"}
                            width={"5%"}
                        >+</Heading>
                        <Heading
                            color="white"
                            fontSize="2xl"
                            fontWeight={"400"}    
                            width={"30%"}
                            textAlign={"center"}

                        >
                            INTERNSHIP FINDER
                        </Heading>
                        <Heading
                            color="white"
                            fontSize="2xl"
                            fontWeight={"400"}
                            width={"5%"}
                        >+</Heading>
                        <Heading
                            color="white"
                            fontSize="2xl"
                            fontWeight={"400"}     
                            width={"30%"}
                            textAlign={"center"}
                        >
                            HACKATHONS
                        </Heading>
                    </Flex>
                </Container>
            </Flex>
        </>
    )
}