
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Navbar, Button, Container, Link, Text, Grid } from "@nextui-org/react";

const Stars = () => (
  <ul style={{ display: 'flex', flexDirection: 'row', listStyle: 'none', marginLeft: 'auto' }}>
    <li><img src='./star.png' style={{ height: '1rem', width: '1rem' }} /></li>
    <li><img src='./star.png' style={{ height: '1rem', width: '1rem' }} /></li>
    <li><img src='./star.png' style={{ height: '1rem', width: '1rem' }} /></li>
    <li><img src='./star.png' style={{ height: '1rem', width: '1rem' }} /></li>
    <li><img src='./star.png' style={{ height: '1rem', width: '1rem' }} /></li>
  </ul>
)

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Home App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Concert+One&family=Roboto+Slab:wght@500&display=swap" rel="stylesheet" />
      </Head>
      <section>
        <header style={{ height: '50vh', backgroundColor: '#FFC2EE'}}>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: '50%', transform: 'translate(-50%, -10%)' }}>
              <img
                src='./cookie-logo.png'
                style={{ height: '30rem', width: '30rem' }}
              />
            </div>
          </div>
        </header>
        <Grid.Container style={{ marginTop: '60px' }} gap={2} justify='center'>
          <Grid sx={3}>
            <img
              src='./image-1.png'
              style={{ width: '20rem', height: '20rem' }}
            />
          </Grid>
          <Grid sx={3}>
            <img
              src='./image-2.png'
              style={{ width: '20rem', height: '20rem' }}
            />
          </Grid>
          <Grid sx={3}>
            <img
              src='./image-3.png'
              style={{ width: '20rem', height: '20rem' }}
            />
          </Grid>
          <Grid sx={3}>
            <img
              src='./image-4.png'
              style={{ width: '20rem', height: '20rem' }}
            />
          </Grid>
        </Grid.Container>
        <article style={{ width: '50vw', margin: 'auto', paddingTop: '60px' }}>
          <Text h3 css={{ fontFamily: 'Roboto Slab', textAlign: 'center' }} >Lorem ipsum dolor sit amet</Text>
          <Text h6 css={{ fontFamily: 'Roboto Slab', fontWeight: '100', textAlign: 'center' }} >consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Text>
        </article>
        <Grid.Container style={{ marginTop: '60px' }} gap={2} justify='center'>
          <Grid sx={4}>
            <img
              src='./cookie1.png'
              style={{ width: '20rem', height: '20rem', borderRadius: '15px' }}
            />
            <article>
              <Text h6>Chocolate Flavor</Text>
              <Stars />
            </article>
          </Grid>
          <Grid sx={4}>
            <img
              src='./cookie2.png'
              style={{ width: '20rem', height: '20rem', borderRadius: '15px' }}
            />
            <Text h6>Strawberry Flavor</Text>
            <Stars />
          </Grid>
          <Grid sx={4}>
            <img
              src='./cookie4.png'
              style={{ width: '20rem', height: '20rem', borderRadius: '15px' }}
            />
            <Text h6>Milk Flavor</Text>
            <Stars />
          </Grid>
        </Grid.Container>
        <Grid.Container gap={2} justify='center' >
          <Grid sx={6} css={{ margin: 'auto'}} >
            <div >
              <img 
                src="./map.png"
                style={{ height: '30rem', width: '30rem'}}
              />
            </div>
          </Grid>
          <Grid sx={6} style={{ width: '400px', margin: 'auto'}}>
              <Text h3>Lorem ipsum dolor sit amet,</Text>
              <Text h6>Lorem ipsum dolor sit amet,
               consectetur adipiscing elit, sed do eiusmod 
               tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat. Duis aute irure dolor 
                in reprehenderit in voluptate velit esse cillum 
                dolore eu fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa 
                qui officia deserunt mollit anim id est laborum.</Text>
                <Button size='lg' css={{ backgroundColor: '$primaryLightHover', color: '$text'}}>
                  <Link css={{ color: '$background'}} href='/sales'>Order Now!</Link>
                </Button>
          </Grid>
        </Grid.Container>
      </section>

    </div>
  );
}
