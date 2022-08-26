import React from "https://cdn.skypack.dev/react@17.0.2?dts";
import styled from "https://cdn.skypack.dev/styled-components@5.3.3?dts";
import { Footer } from "../component/footer.tsx";
import { Container, Grid, Header, Label, Button, Input, Dimmer, Loader, Segment, Divider } from "https://esm.sh/semantic-ui-react@2.1.3";
import { HistoryViewModel } from "../view_model/HistoryViewModel.ts";
import { HeaderS } from "../component/Header.tsx";
import { useEffect } from 'https://cdn.skypack.dev/react@17.0.2?dts';

export const History = (): React.ReactElement => {
  const viewModel = new HistoryViewModel();
  
  useEffect(() => {
    console.log('ヒストリー');
    viewModel.getHistory();
    viewModel.getHotspotHistory();
  },['key']);

  return (
    <Container>
      <HeaderS />
      <Divider section></Divider>

      <Header>ルート</Header>
      {viewModel.routeHistory.length != 0
        ? <ul>{viewModel.routeHistory.map((item) =>
          <li>ルート{item}</li>
        )}</ul>
        : <p>履歴がないぞい</p>
      }
      <Divider section></Divider>

      <Header>ホットスポット</Header>
      {viewModel.hotspotHistory.length != 0
        ? <ul>{viewModel.hotspotHistory.map((item) =>
          <li>{item}</li>
        )}</ul>
        : <p>履歴がないぞい</p>
      }
      <Divider section></Divider>

      <Footer />
    </Container>
  );
};