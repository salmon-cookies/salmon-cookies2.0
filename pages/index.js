import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Navbar, Button, Link, Text } from "@nextui-org/react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar isBordered >
          <Navbar.Brand>
            <Text b color="inherit" hideIn="xs">
              COOKIES
            </Text>
          </Navbar.Brand>
          <Navbar.Content hideIn="xs">
            <Navbar.Link href="/">HOME</Navbar.Link>
            <Navbar.Link isActive href="/sales">SALES</Navbar.Link>
            <Navbar.Link href="/about">ABOUT</Navbar.Link>
          </Navbar.Content>
          <Navbar.Content>
            <Navbar.Item>
              <Button auto flat as={Link} href="#">
                Sign Up
              </Button>
            </Navbar.Item>
          </Navbar.Content>
        </Navbar>
        </main>
    </div>
  )
}
