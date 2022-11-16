import { Navbar, Text, Button, Link } from '@nextui-org/react';
import { useRouter } from 'next/router';

const links = [
  { path: '/', text: 'HOME' },
  { path: '/sales', text: 'SALES' },
  { path: '/about', text: 'ABOUT' },
];
export default function SCNavbar() {
  const { pathname } = useRouter();

  return (
    <Navbar isBordered>
      <Navbar.Brand>
        <Text b color='inherit' hideIn='xs'>
          SALMON COOKIES
        </Text>
      </Navbar.Brand>
      <Navbar.Content variant={'underline'}>
        {links.map((link, index) => {
          return (
            <Navbar.Link
              isActive={pathname === link.path}
              key={index}
              href={link.path}
            >
              {link.text}
            </Navbar.Link>
          );
        })}
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item>
          <Button auto flat>
            Order Now
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}
