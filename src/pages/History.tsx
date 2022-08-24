import React from "https://cdn.skypack.dev/react@17.0.2?dts";
import styled from "https://cdn.skypack.dev/styled-components@5.3.3?dts";
import { Footer } from "../component/footer.tsx";
import { Container, Grid, Header, Label, Button, Input, Dimmer, Loader, Segment, Divider } from "https://esm.sh/semantic-ui-react@2.1.3";
import { HistoryViewModel } from "../view_model/HistoryViewModel.ts";

export const History = (): React.ReactElement => {
  const viewModel = new HistoryViewModel();
  return (
    <Container>
      <Header size="huge">行った場所</Header>
      <Divider section></Divider>

      <Header>ルート</Header>
      <ul>{viewModel.routeHistory.map(item => {
        <li key={item}>{item}</li>
      })}</ul>
      <Divider section></Divider>

      <Header>ホットスポット</Header>
      <ul>{viewModel.hotspotHistory.map(item => {
        <li key={item}>{item}</li>
      })}</ul>
      <Divider section></Divider>
      <Footer />
    </Container>
  );
};