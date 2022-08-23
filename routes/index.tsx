import { Head, Link } from "aleph/react";
import { Button, Container, Header, Divider, Grid, Input, Dimmer, Loader } from "https://esm.sh/semantic-ui-react";

const externalLinks = [
  ["Get Started", "https://alephjs.org/docs/get-started"],
  ["Docs", "https://alephjs.org/docs"],
  ["Github", "https://github.com/alephjs/aleph.js"],
];

export default function Index() {
  return (
    <div
      className="w-screen flex flex-col items-center justify-center"
      style={{
        height: "calc(100vh - 2 * 80px)",
      }}
    >
      <Head>
        <title>Aleph.js</title>
        <meta name="description" content="The Fullstack Framework in Deno." />
      </Head>

      <Container textAlign="center">
        <Grid columns={2}><Grid.Row verticalAlign="middle">
          <Grid.Column width={8} textAlign="right">
          </Grid.Column>

          <Grid.Column width={8} textAlign="left">
          </Grid.Column>
        </Grid.Row></Grid>
      </Container>

    </div>
  );
}
