import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Spacer,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  Image,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { useEffect, useState } from "react";

const DefaultNavItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Curriculum",
    children: [
      {
        label: "Loading...",
        subLabel: "",
        href: "",
      },
    ],
  },

  {
    label: "Initiatives",
    children: [
      {
        label: "Tech Optimum Hacks",
        subLabel:
          "Learn about our annual hackathons with a focus on social good.",
        href: "/hackathon",
      },
      {
        label: "Technology Drive",
        subLabel: "Donate your old technology to help students in need.",
        href: "/technology-donation",
      },
      {
        label: "Tech Optimum Talks",
        subLabel:
          "Listen to our podcast where we interview industry professionals.",
        href: "/podcast",
      },
    ],
  },
  {
    label: "About",
    children: [
      {
        label: "The Team",
        subLabel: "Get to know the team behind the scenes.",
        href: "/about",
      },
      {
        label: "Our Mission",
        subLabel: "Learn about our mission.",
        href: "/mission",
      },
    ],
  },
  {
    label: "Volunteer",
    href: "/join-team",
  },
  {
    label: "Donate",
    href: "/donate",
  },
];

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const [location, setLocation] = useState("/");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLocation(window.location.pathname);
    }
  }, []);

  const [NAV_ITEMS, setNAV_ITEMS] = useState(DefaultNavItems);

  useEffect(() => {
    fetch(`https://dashboard.techoptimum.org/api/courses-external`)
      .then((res) => res.json())
      .then((data) => {
        const updatedNAV_ITEMS = [
          ...NAV_ITEMS.slice(0, 1), // Keep the first item as it is
          {
            label: "Curriculum",
            children: data.map((course) => ({
              label: course.title,
              subLabel: course.description,
              href: `https://dashboard.techoptimum.org/open-curriculum/${course.slug}`,
              image: course.image,
            })),
          },
          ...NAV_ITEMS.slice(2), // Append the remaining items from the original array
        ];

        setNAV_ITEMS(updatedNAV_ITEMS);
      });
  }, []);

  const DesktopSubNav = ({ label, href, subLabel, image }) => {
    const linkColor = useColorModeValue("transparent", "gray.300");
    
    return (
      <Link
        href={href}
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
       
        _hover={{ bg: useColorModeValue("#091D34", "black") }}
        bgColor={location.includes(href) ? "#091D34" : "transparent"}
      >
        <Stack direction={"row"} align={"center"}>
          <Box alignItems="center" display="flex">
            <Flex direction="column">
              <Text
               color={location.includes(href) ? "blue.200" : "primary"}
            
                transition={"color .2s ease"}
                _groupHover={{ color: "blue.400" }}
                fontWeight={500}
              >
                {label}
              </Text>
              <Text
             
                _groupHover={{
                  color: "gray.500",
                }}
                fontSize={"sm"}
              >
                {subLabel.length > 56
                  ? `${subLabel.slice(0, 56)}...`
                  : subLabel}
              </Text>
            </Flex>
            {image && (
              <Image ml="2rem" src={image} alt={label} boxSize="50px" />
            )}
          </Box>
          <Flex
            transition={"all .2s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"blue.400"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };

  const DesktopNav = () => {
    const linkColor = useColorModeValue("primary", "gray.300");
    const linkHoverColor = useColorModeValue("gray.300", "white");
    const popoverContentBgColor = useColorModeValue("#061220", "gray.800");

    return (
      <header>
        <Stack direction={"row"} spacing={4}>
          {NAV_ITEMS.map((navItem) => (
            <Box key={navItem.label}>
              <Popover trigger={"hover"} placement={"bottom-start"}>
                <PopoverTrigger>
                  <Link
                    px={2}
                    href={navItem.href ?? "#"}
                    fontSize={"m"}
                    fontWeight={500}
                    color={
                      location === navItem.href ||
                      navItem.children?.some((child) => location === child.href)
                        ? "blue.400"
                        : linkColor
                    }
                    transitionDelay="0s"
                    _hover={{
                      textDecoration: "none",
                      color: linkHoverColor,
                    }}
                  >
                    {navItem.label}
                  </Link>
                </PopoverTrigger>

                {navItem.children && (
                  <PopoverContent
                    border={0}
                    boxShadow={"xl"}
                    bg={popoverContentBgColor}
                    p={4}
                    rounded={"xl"}
                    minW={"sm"}
                    transitionDelay="0s"
                  >
                    <Stack transitionDelay="0s">
                      {navItem.children.map((child) => (
                        <DesktopSubNav key={child.label} {...child} />
                      ))}
                    </Stack>
                  </PopoverContent>
                )}
              </Popover>
            </Box>
          ))}
        </Stack>
      </header>
    );
  };

  const MobileNavItem = ({ label, children, href, image }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? "#"}
          justify={"space-between"}
          align={"center"}
          _hover={{
            textDecoration: "none",
          }}
        >
          {image && <Image src={image} alt={label} boxSize="50px" />}
          <Text
            color={
              location === href ||
              children?.some((child) => location === child.href)
                ? "blue.400"
                : useColorModeValue("gray.200", "gray.200")
            }
          >
            {label}
          </Text>
          {children && (
            <Icon
              _hover={{
                color: "gray.400",
                bg: "gray.900",
              }}
              as={ChevronDownIcon}
              transition={"all .25s ease-in-out"}
              transform={isOpen ? "rotate(180deg)" : ""}
              w={6}
              h={6}
            />
          )}
        </Flex>

        <Collapse
          in={isOpen}
          animateOpacity
          style={{ marginTop: "0!important" }}
        >
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={"solid"}
            borderColor={useColorModeValue("gray.200", "gray.700")}
            align={"start"}
          >
            {children &&
              children.map((child) => (
                <Link
                  key={child.label}
                  py={2}
                  href={child.href}
                  color={
                    location === child.href
                      ? "blue.400"
                      : useColorModeValue("gray.200", "gray.200")
                  }
                >
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };

  const MobileNav = () => {
    return (
      <Stack p={4} display={{ md: "none" }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };

  return (
    <header>
      <Box
        zIndex="100"
        className="nav-cont stroke"
        top="0 !important"
        pos={"sticky"}
      >
        <Flex
          color={useColorModeValue("gray.600", "white")}
          py="1.1rem"
          px={["3rem", "10rem"]}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              _hover={{
                bg: "gray.900",
              }}
              aria-label={"Toggle Navigation"}
            />
          </Flex>

          <Flex
            alignItems={"center"}
            flex={{ base: 1 }}
            justify={{ base: "start", md: "start" }}
          >
            <Text
              fontSize="2xl"
              fontWeight="bold"
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              color={useColorModeValue("primary", "white")}
            >
              Tech Optimum 
            </Text>
            <Spacer />

            <Flex display={{ base: "none", md: "flex" }}>
              <DesktopNav />
            </Flex>
          </Flex>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </header>
  );
}
