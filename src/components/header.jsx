import React from "react";
import {
  Flex,
  Text,
  Button,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";

import Link from "next/link";
import Head from "next/head";

export default function Header() {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();
  const {
    isOpen: isSecondOpen,
    onOpen: onSecondOpen,
    onClose: onSecondClose,
  } = useDisclosure();

  return (
    <>
      <Head>
        <link rel='icon' href='/TechOptimumLogo.png' />
        <meta name='title' content='Tech Optimum' />
        <meta
          name='description'
          content='A student-led organization helping and inspiring future leaders of the tech industry worldwide.'
        />
      </Head>
      <Flex
        zIndex={100}
        position='relative'
        justifyContent='space-between'
        alignItems='center'
        padding='20px 10%'
      >
        <Heading href='./#' fontSize='3xl' color='primary'>
          Tech Optimum
        </Heading>

        <nav>
          <ul className='nav-links'>
            <li>
              <Text className='link-navs' color='primary'>
                <Link href='/'>HOME</Link>
              </Text>
            </li>
            <li>
              <Menu gutter={"5"} isOpen={isEditOpen}>
                <MenuButton
                  className='link-navs'
                  bgColor={"transparent"}
                  color='primary'
                  onMouseEnter={onEditOpen}
                  onMouseLeave={onEditClose}
                >
                  ABOUT
                </MenuButton>
                <div className='testing-nav'>
                  <MenuList
                    onMouseEnter={onEditOpen}
                    onMouseLeave={onEditClose}
                    className='link-navs-dropdown'
                  >
                    <Link href='/about'>
                      <MenuItem className='link-navs-dd-text'>
                        Meet the Team
                      </MenuItem>
                    </Link>
                    <Link href='/contact'>
                      <MenuItem className='link-navs-dd-text'>
                        Contact us
                      </MenuItem>
                    </Link>
                    <Link href='/faq'>
                      <MenuItem className='link-navs-dd-text'>Faq</MenuItem>
                    </Link>
                  </MenuList>
                </div>
              </Menu>
            </li>
            <li>
              <Menu gutter={"5"} isOpen={isSecondOpen}>
                <MenuButton
                  className='link-navs'
                  bgColor={"transparent"}
                  color='primary'
                  onMouseEnter={onSecondOpen}
                  onMouseLeave={onSecondClose}
                >
                  INITIATIVES
                </MenuButton>
                <MenuList
                  onMouseEnter={onSecondOpen}
                  onMouseLeave={onSecondClose}
                  className='link-navs-dropdown'
                >
                  <Link href='/join'>
                    <MenuItem className='link-navs-dd-text'>Community</MenuItem>
                  </Link>
                  <Link href='/hackathon'>
                    <MenuItem className='link-navs-dd-text'>Hackathon</MenuItem>
                  </Link>
                  <Link href='/podcast'>
                    <MenuItem className='link-navs-dd-text'>
                      Tech Optimum Talks
                    </MenuItem>
                  </Link>
                  <Link isExternal href='https://dashboard.techoptimum.org'>
                    <MenuItem className='link-navs-dd-text'>Courses</MenuItem>
                  </Link>
                </MenuList>
              </Menu>
            </li>
            <li>
              <Text className='link-navs' color='primary'>
                <Link href='/join-team'>VOLUNTEER</Link>
              </Text>
            </li>
          </ul>
        </nav>
        <Flex alignItems='right' justifyContent='space-between'>
          <Button
            colorScheme='secondaryButton'
            borderRadius='full'
            px='6'
            fontWeight='normal'
          >
            Sign up
          </Button>
          <Button
            colorScheme='primaryButton'
            borderRadius='full'
            px='6'
            n
            fontWeight='normal'
            marginLeft='20px'
          >
            Log in
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
