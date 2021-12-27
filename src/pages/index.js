import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Works from "../components/Works";
import Contact from "../components/Contact";
import "../styles/global.css";
import styled from "styled-components";
import Seo from "../components/SEO";

const home = () => {
  return (
    <Layout>
      <Seo />
      <Wrapper>
        <section className='hero dark'>
          <Hero />
        </section>
        <section className='about light'>
          <About />
        </section>
        <section className='light'>
          <Skills />
        </section>
        <section className='dark'>
          <Works />
        </section>
        <section className='contact light'>
          <Contact />
        </section>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.main`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  /* scroll-behavior: smooth; */

  section {
    height: 100vh;
    width: 100%;
    scroll-snap-align: start;
    position: relative;
    overflow: hidden;
  }

  .contact {
    height: calc(92vh);
    width: 100%;
    scroll-snap-align: start;
    position: relative;
  }
`;

export default home;
