import React from "https://cdn.skypack.dev/react@17.0.2?dts";
import styled from "https://cdn.skypack.dev/styled-components@5.3.3?dts";
import { Footer } from "../component/footer.tsx";
import { Container, Grid, Header, Label, Button, Image, Dimmer, Loader, Segment, Divider } from "https://esm.sh/semantic-ui-react@2.1.3";
import { StampRallyViewModel } from "../view_model/StampRallyViewModel.ts";
import { HeaderS } from "../component/Header.tsx";
import { useEffect } from 'https://cdn.skypack.dev/react@17.0.2?dts';

export const StampRally = (): React.ReactElement => {
  const viewModel = new StampRallyViewModel();
  
  useEffect(() => {
    console.log('ヒストリー');
  },['key']);

  return (
    <Container textAlign="center">
      <HeaderS />
      <Divider section></Divider>

      <Header>ルート</Header>
      <Container textAlign="center">
        <Image circular size="medium" src="images/animal.jpg" onClick={()=>{
          viewModel.stampEntrance();
        }}></Image>
        <Image circular size="medium" src="images/fountain.jpg"></Image>
        <Image circular size="medium" src="images/garden.jpg"></Image>
        <Image circular size="medium" src="images/lawn.jpg"></Image>
        <Image circular size="medium" src="images/observation_tower.jpg"></Image>
        <Image circular size="medium" src="images/animal.jpg"></Image>
      </Container>

      <Footer />
    </Container>
  );
};