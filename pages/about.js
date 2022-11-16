import * as React from 'react';
import { createTheme, NextUIProvider } from '@nextui-org/react';
// import { Card, Grid, Row, Text } from "@nextui-org/react";
import { Card, Grid, Text, Link } from "@nextui-org/react";


const AboutUs = () => {

  //   const list = [
  //     {
  //       title: "Elaine Huynh",
  //       img: "./elaine.jpeg",
  //       bio: "https://github.com/nextui-org/nextui",
  //     },
  //     {
  //       title: "Robert Shepley",
  //       img: "./robert.jpg",
  //       bio: ""
  //     },
  //     {
  //       title: "Stephen Martinez",
  //       img: "./stephen.jpeg",
  //       bio: ""
  //     }
  //   ];

  //   return (

  //     <Grid.Container gap={5} justify="space-between">
  //       {list.map((item, index) => (
  //         <Grid xs={6} sm={3} key={index}>
  //           <Card isPressable>
  //             <Card.Body css={{ p: 0 }}>
  //               <img
  //                 src={item.img}
  //                 objectFit="cover"
  //                 width="100%"
  //                 height={300}
  //                 alt={item.title}
  //               />
  //             </Card.Body>
  //             <Card.Footer css={{ justifyItems: "flex-start" }}>
  //               <Row wrap="wrap" justify="space-between" align="center">
  //                 <Text b>{item.title}</Text>
  //                 <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
  //                   {item.bio}
  //                 </Text>
  //               </Row>
  //             </Card.Footer>

  //           </Card>
  //         </Grid>
  //       ))}
  //     </Grid.Container>
  //   );
  return (
    <Grid.Container css={{ p: "$6", m: "$2", gap: "20px"  }}>
      <Card isHoverable variant="bordered" css={{ p: "$6", mw: "550px", m: "$0"}}>
        <Card.Header>
          <img
            alt="elaine photo"
            src="./elaine.jpeg"
            width="300px"
            height="300px"
          />
          <Grid.Container css={{ pl: "$6" }}>
            <Grid xs={12}>
              <Text h4 css={{ lineHeight: "$xs" }}>
                Elaine Huynh
              </Text>
            </Grid>
            <Grid xs={12}>
              <Link
                icon
                color="primary"
                target="_blank"
                href="https://www.linkedin.com/in/nurselaine/"
              >
                https://www.linkedin.com/in/nurselaine/

              </Link>
            </Grid>
            <Grid>

              <Link
                icon
                color="primary"
                target="_blank"
                href="https://github.com/nurselaine"
              >
                https://github.com/nurselaine

              </Link>
            </Grid>

          </Grid.Container>
        </Card.Header>
        <Card.Body css={{ py: "$2" }}>
          <Text>
            Make beautiful websites regardless of your design experience.
          </Text>
        </Card.Body>
        <Card.Footer>

        </Card.Footer>
      </Card>

      <Card isHoverable variant="bordered" css={{ p: "$6", mw: "550px" }}>
        <Card.Header>

          <img
            alt="robert photo"
            src="./robert.jpg"
            width="200px"
            height="300px"
          />
          <Grid.Container css={{ pl: "$6" }}>
            <Grid xs={12}>
              <Text h4 css={{ lineHeight: "$xs" }}>
                Robert Shepley
              </Text>
            </Grid>
            <Grid xs={12}>
              <Link
                icon
                color="primary"
                target="_blank"
                href="https://www.linkedin.com/in/robert-shepley/"
              >
                https://www.linkedin.com/in/robert-shepley/

              </Link>
            </Grid>
            <Grid>

              <Link
                icon
                color="primary"
                target="_blank"
                href="https://github.com/ShepleySound"
              >
                https://github.com/ShepleySound

              </Link>
            </Grid>

          </Grid.Container>
        </Card.Header>
        <Card.Body css={{ py: "$2" }}>
          <Text>
          I am an aspiring software developer with experience and education in audio engineering and music production. My experience has provided me with the opportunity to work as a lead technician and manager of production teams in various environments. Having worked closely with digital audio workstations such as Pro Tools and Ableton Live, I am fascinated by the intersection between complex tasks, data, and the user experience
          </Text>
        </Card.Body>
      </Card>

      <Card isHoverable variant="bordered" css={{ p: "$6", mw: "550px" }}>
        <Card.Header>
          <img
            alt="stephen photo"
            src="./stephen.jpeg"
            width="200px"
            height="300px"
          />
          <Grid.Container css={{ pl: "$6" }}>
            <Grid xs={12}>
              <Text h4 css={{ lineHeight: "$xs" }}>
                Stephen Martinez
              </Text>
            </Grid>
            <Grid xs={12}>
              <Link
                icon
                color="primary"
                target="_blank"
                href="https://www.linkedin.com/in/stephen-martinez-16767a57/"
              >
                https://www.linkedin.com/in/stephen-martinez-16767a57/

              </Link>
            </Grid>
            <Grid>

              <Link
                icon
                color="primary"
                target="_blank"
                href="https://github.com/SdMartinez13"
              >
                https://github.com/SdMartinez13

              </Link>
            </Grid>

          </Grid.Container>
        </Card.Header>
        <Card.Body css={{ py: "$2" }}>
          <Text>
           I am a Software Developer looking forward to a rewarding Career my new field. I am hard working and motivated, my work ethic and drive will accelerate me toward my goals. Currently enrolled at Code Fellows.
          </Text>
        </Card.Body>
      </Card>
    </Grid.Container>
  )
}



export default AboutUs;
