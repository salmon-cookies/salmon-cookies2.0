import { Navbar, Button, Link, Text } from "@nextui-org/react";

export default function Navbar(){
  return (
    <Navbar isBordered variant={variant}>
    <Navbar.Brand>
      <AcmeLogo />
      <Text b color="inherit" hideIn="xs">
        ACME
      </Text>
    </Navbar.Brand>
    <Navbar.Content hideIn="xs">
      <Navbar.Link href="#">Features</Navbar.Link>
      <Navbar.Link isActive href="#">Customers</Navbar.Link>
      <Navbar.Link href="#">Pricing</Navbar.Link>
      <Navbar.Link href="#">Company</Navbar.Link>
    </Navbar.Content>
    <Navbar.Content>
      <Navbar.Link color="inherit" href="#">
        Login
      </Navbar.Link>
      <Navbar.Item>
        <Button auto flat as={Link} href="#">
          Sign Up
        </Button>
      </Navbar.Item>
    </Navbar.Content>
  </Navbar>
  )
}