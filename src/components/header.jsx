import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Spacer,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
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
    label: "Hackathon",
    href: "/hackathon",
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

  const [NAV_ITEMS, setNAV_ITEMS] = useState(DefaultNavItems);
  /// hello

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
            })),
          },
          ...NAV_ITEMS.slice(1), // Append the remaining items from the original array
        ];

        setNAV_ITEMS(updatedNAV_ITEMS);
      });
  }, []);

  const DesktopSubNav = ({ label, href, subLabel }) => {
    const linkColor = useColorModeValue("primary", "gray.200");
    const linkHoverColor = useColorModeValue("gray.400", "white");
    const popoverContentBgColor = useColorModeValue("black", "gray.800");
    return (
      <Link
        href={href}
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("#091D34", "black") }}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              color="primary"
              transition={"all .3s ease"}
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
              {subLabel}
            </Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
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
                    color={linkColor}
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
                  >
                    <Stack>
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

  const MobileNavItem = ({ label, children, href }) => {
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
          <Text color={useColorModeValue("gray.200", "gray.200")}>{label}</Text>
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
                <Link key={child.label} py={2} href={child.href}>
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
          borderBottom={1}
          borderStyle={"solid"}
          borderColor="gray.900"
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
