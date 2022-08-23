import { Link } from "aleph/react";
import { Button, Container, Divider, Grid, Input, Dimmer, Loader } from "https://esm.sh/semantic-ui-react";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        height: 80,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "90%",
          maxWidth: 900,
          height: "100%",
          margin: "0 auto",
        }}
      >
        <h1>
          <Link
            style={{ fontSize: 16, color: "#333" }}
            to="/"
          >
          お散歩ぽん
          </Link>
        </h1>
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Button as="a" href="https://deno.land/x/aleph">
            過去の記録
          </Button>
        </nav>
      </div>
    </header>
  );
}
