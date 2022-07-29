import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import PeoplesView from '../components/meet/Peoples';
import Menu from '../components/meet/Menu';
import Container from '../components/Container';

const Home: NextPage = () => {
  return (
    <Container>
      <PeoplesView />

      <Menu />
    </Container>
  )
}

export default Home;
