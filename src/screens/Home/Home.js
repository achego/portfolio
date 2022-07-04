import React from 'react'
import Layout from '../../components/Layout'
import About from './columns/About'
import Contact from './columns/Contact'
import Hero from './columns/Hero'
import LatestProjects from './columns/LatestProjects/LatestProjects'
import Services from './columns/Services/Services'

const Home = () => {
  return (
    <Layout>
        <Hero />
        <About />
        <Services />
        <LatestProjects />
        <Contact />
    </Layout>
  )
}

export default Home