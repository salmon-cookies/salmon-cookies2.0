import { Table, Button, Card, Grid, Container, Text } from "@nextui-org/react";
import Image from "next/image";

export default function StoreInfo() {
  const hours = {
    9: {
      key: 9,
      label: "9AM",
      cookieMultiplier: 20,
    },
    10: {
      key: 10,
      label: "10AM",
      cookieMultiplier: 12.8,
    },
    11: {
      key: 11,
      label: "11AM",
      cookieMultiplier: 2.5,
    },
    12: {
      key: 12,
      label: "12PM",
      cookieMultiplier: 9,
    },
    13: {
      key: 13,
      label: "1PM",
      cookieMultiplier: 18,
    },
    14: {
      key: 14,
      label: "2PM",
      cookieMultiplier: 1.8,
    },
    15: {
      key: 15,
      label: "3PM",
      cookieMultiplier: 6.2,
    },
    16: {
      key: 16,
      label: "4PM",
      cookieMultiplier: 7,
    },
    17: {
      key: 17,
      label: "5PM",
      cookieMultiplier: 7.3,
    },
  };

  const stores = {
    seattle: {
      name: "Seattle",
      avgCookiesPerHour: 12,
    },
    neworleans: {
      name: "New Orleans",
      avgCookiesPerHour: 7,
    },
    brazil: {
      name: "Brazil",
      avgCookiesPerHour: 23,
    },
    tokyo: {
      name: "Tokyo",
      avgCookiesPerHour: 42,
    },
  };

  return (
    <>
      <section>
        <header style={{ height: "50vh", backgroundColor: "#FFC2EE" }}>
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                left: "50%",
                transform: "translate(-50%, -10%)",
              }}
            >
              <Image
                alt="Cookie logo"
                src="./cookie-logo.png"
                width="500px"
                height="500px"
              />
            </div>
          </div>
        </header>
      </section>
      <article style={{ width: "50vw", margin: "auto", paddingTop: "60px" }}>
        <Text h3 css={{ textAlign: "center" }}>
          Lorem ipsum dolor sit amet
        </Text>
        <Text
          h6
          css={{
            fontFamily: "Roboto Slab",
            fontWeight: "100",
            textAlign: "center",
          }}
        >
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam
        </Text>
      </article>

      <Table>
        <Table.Header>
          <Table.Column>LOCATION</Table.Column>
          {Object.keys(hours).map((hour) => {
            return (
              <Table.Column key={hours[hour].key}>
                {hours[hour].label}
              </Table.Column>
            );
          })}
        </Table.Header>
        <Table.Body>
          {Object.keys(stores).map((store) => {
            return (
              <Table.Row key={store}>
                <Table.Cell>{stores[store].name}</Table.Cell>
                {Object.keys(hours).map((hour) => {
                  return (
                    <Table.Cell key={`${store}-${hour}`}>
                      {Math.round(
                        hours[hour].cookieMultiplier *
                          stores[store].avgCookiesPerHour
                      )}
                    </Table.Cell>
                  );
                })}
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
}
