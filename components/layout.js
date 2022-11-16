import { Navbar, Button, Link, Text } from "@nextui-org/react";

export default function Layout({children}){
  return (
    <div>
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
              Order Now
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      <img 
        src='./cookie-logo.png'
      />
      <section>
        {children}
      </section>
    </div>
  )
}