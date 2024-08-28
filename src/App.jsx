import { Container } from './components/Container';
import { Header } from './components/Header';
import { Dice } from './components/Dice/Dice';
// import { Dice } from './components/Dice/Dice';
// import { Player } from './components/Player/Player';
// import { useEffect, useState } from 'react';

export default function App() {
  return (
    <Container>
      <Header>Roll the Dice</Header>
      <Dice />
    </Container>
  );
}
