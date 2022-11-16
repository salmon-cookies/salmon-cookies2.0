import * as React from 'react';
// import { createTheme, NextUIProvider } from '@nextui-org/react';
// import { Card, Grid, Row, Text } from "@nextui-org/react";
import { Card, Grid, Text, Link } from "@nextui-org/react";


const AboutUs = () => {

  return (
    <Grid.Container css={{ p: "$6", m: "$2", gap: "20px" }}>
      <Card isHoverable variant="bordered" css={{ p: "$6", mw: "550px", m: "$0" }}>
        <Card.Header>
          <img
            alt="elaine photo"
            src="./elaine.JPEG"
            width="200px"
            height="300px"
            style={{ borderRadius: '10px' }}

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
        <Card.Body css={{ borderRadius: '$xs', backgroundColor: "#FFC4EE", py: "$2" }}>
          <Text>
            Hello! I'm Elaine, a full-stack software engineer with a background in Healthcare. My values in building and being creative as well as my need to work in a team setting are all found in this profession. I see myself thriving in this field and making meaningful connections with future teammates as I continue to expand on my impact as an engineer and team member. My appreciation for engineering comes from being able to create products people find useful. As a highly driven individual, I envision myself taking on impactful projects, and future mentorship roles, as well as empowering other women in tech and career changers wanting to break into the field as well! 
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
            style={{ borderRadius: '10px' }}

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
        <Card.Body css={{ borderRadius: '$xs', backgroundColor: "#FFC4EE", py: "$2" }}>
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
            style={{ borderRadius: '10px' }}
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
        <Card.Body css={{ borderRadius: '$xs', backgroundColor: "#FFC4EE", py: "$2" }}>
          <Text>
            I am a Software Developer looking forward to a rewarding Career my new field. I am hard working and motivated, my work ethic and drive will accelerate me toward my goals. Currently enrolled at Code Fellows.
          </Text>
        </Card.Body>
      </Card>
    </Grid.Container>
  )
}



export default AboutUs;
