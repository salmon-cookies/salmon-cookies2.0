import SCNavbar from './navbar';

export default function Layout({ children }) {
  return (
    <>
      <SCNavbar />
      <main>{children}</main>
    </>
  );
}

