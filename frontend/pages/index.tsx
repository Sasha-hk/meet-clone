import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Meet.module.css'

import PeoplesView from '../components/meet/Peoples';
import BottomMenu from '../components/meet/BottomMenu';
import Container from '../components/Container';

const Home: NextPage = () => {
  return (
    <Container>
      <PeoplesView />

      <BottomMenu meetingName='CodeGeeks' />
    </Container>
  )
}

export default Home;
