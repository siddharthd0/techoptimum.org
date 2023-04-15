import {
    Box,
    Flex,
    Heading,
    Text,
    Badge,
    Button,
    Link,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
import React from "react";


const CourseDetail = ({ course }) => {
    const IconComponent = course.icon
    return (
        <>
            <Flex
                alignItems={"center"}
                marginLeft={["2rem", "7rem"]}
                marginBottom={["4rem", "7rem"]}
                direction={["column", "row"]}
            >
                <Flex direction={"column"} maxW="800px">
                    <Flex alignItems={"center"}>
                        <IconComponent size={65} color={course.color} />
                        <Heading
                            marginLeft="15px"
                            color={course.color}
                            fontSize={["3xl", "5xl"]}
                        >
                            {course.title}
                        </Heading>
                    </Flex>
                    <Badge
                        borderRadius={"full"}
                        width="175px"
                        px="10px"
                        colorScheme={course.colorScheme}
                        marginTop="1rem"
                        marginBottom={"2rem"}
                    >
                        {course.type}
                    </Badge>
                    <Text fontSize={["sm", "md"]} width="75%" marginBottom={"1rem"}>
                        {course.introduction}
                    </Text>
                    <Menu>
                        <MenuButton
                            width="130px"
                            fontWeight={"light"}
                            colorScheme="buttonBg"
                            as={Button}
                        >
                            Learn More
                        </MenuButton>
                        <MenuList className="link-navs-dropdown">
                            <Link
                                _hover={{
                                    textDecoration: "none",
                                }}
                                href="https://courses.techoptimum.org"
                            >
                                <MenuItem className="link-navs-dd-text">
                                    View Course (under work)
                                </MenuItem>
                            </Link>
                            <Link
                                _hover={{
                                    textDecoration: "none",
                                }}
                                href="./discord"
                            >
                                <MenuItem className="link-navs-dd-text">Course Help</MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                </Flex>
                <Box
                    borderRadius={"15px"}
                    w={["320px", "400px"]}
                    backgroundColor={"#2E3569"}
                    padding={"1.5rem"}
                    mt={["2rem", "0rem"]}
                    marginRight={["2rem", "0rem"]}
                >
                    <Heading
                        marginBottom={["5px", "1rem"]}
                        fontSize={["3xl", "5xl"]}
                        color="primary"
                    >
                        Curriculum
                    </Heading>
                    <Text fontSize={["sm", "md"]}>
                        <ul style={{
                            listStyleType: "none",
                        }}>
                            {course.curriculum.map((lesson, index) => <li key={index}>{lesson}</li>)}
                        </ul>
                    </Text>
                    <br />
                </Box>
            </Flex>
        </>
    )
}

export default CourseDetail
