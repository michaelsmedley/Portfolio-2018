import React, { Component } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import H1 from "../../components/H1/H1";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import H3 from "../../components/H3/H3";
import { Container, Box } from '../../components/Grid/Grid';
import ThemeChange from "../../helpers/ThemeChange";
import ResetTheme from "../../helpers/ResetTheme";

const AboutPage = styled.div`
  color: #dcdcdd;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #dcdcdd;
  }
  a {
    color: #a8a8ab;

    &:after {
      border-color: #a8a8ab;
    }
    &:hover {
      color: #a8a8ab;
      &:after {
        border-color: #a8a8ab;
      }
    }
  }

  .logo {
    a {
      border-color: #dcdcdd;
      animation: none;
    }
    path {
      fill: #dcdcdd;
      animation: none;
    }
  }
  footer {
    background: #c5c3c6;
    a {
      color: #4c5c68;
      &:after {
        border-color: #4c5c68;
      }
      &:hover {
        color: #1985a1;
        &:after {
          border-color: #1985a1;
        }
      }
    }
  }
`;

export default class About extends Component {
  componentDidMount() {
    ResetTheme(document.getElementsByTagName("body")[0], "about");
    document.getElementsByTagName("body")[0].classList.add("about");
    setTimeout(() => {
      document.getElementsByTagName("body")[0].classList.add("loaded");
    }, 500);
    ThemeChange();
  }

  componentWillUnmount() {
    ResetTheme(document.getElementsByTagName("body")[0]);
  }

  render() {
    return (
      <AboutPage>
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            About Me | Michael Smedley | Preston based web developer
          </title>
          <meta
            name="description"
            content="I am a web developer from Preston, England. I deal with PHP frameworks, front end design and everything in between."
          />
          <link
            rel="canonical"
            href="https://www.michael-smedley.co.uk/about"
          />
        </Helmet>
        <Header theme="dark" />
        <Container className="align-top mb-1">
          <Box sm="12" className="sm-text-align-center">
            <H1 className="sm-text-align-center uppercase large-text js-animate fadeIn animate-2">
              I ❤ to make things for the Internet
            </H1>
          </Box>

          <Box sm="12" lg="4" className="js-animate fadeIn animate-3">
            <img
              src="https://s3.eu-west-2.amazonaws.com/2017.michael-smedley.co.uk/www/assets/img/profile.jpg"
              alt="Portrait shot"
            />
          </Box>
          <Box sm="12" lg="8" className="story-text js-animate fadeIn animate-3">
            <p className="mt-0">
              I have over 10 years industry experience working in-house and for
              agencies. I have made award winning projects for clients like
              VisitEngland, AO, Microsoft, BAE and Nikon
            </p>

            <p>
              Whilst originally a PHP Developer, I have recently become more
              involved with Front end development using modern day tools. This
              has allowed me to have a great in-depth understanding of the whole
              web design process, from wireframe up to deployment.
            </p>

            <p>
              Away from web development, I'm a keen PS4 gamer, avid Netflix
              watcher, and love spending as much time with my wife and two sons.
            </p>
          </Box>

          <Box sm="12" md="6" lg="3" className="js-animate fadeIn animate-3">
            <H3>Back end</H3>
            <ul className="mt-0 listless  serif">
              <li>PHP 5+</li>
              <li>CakePHP</li>
              <li>MySQL</li>
              <li>Wordpress</li>
            </ul>
          </Box>
          <Box sm="12" md="6" lg="3" className="js-animate fadeIn animate-3">
            <H3>Front End</H3>

            <ul className="mt-0 listless serif">
              <li>HTML 5</li>
              <li>Javascript / jQuery</li>
              <li>CSS / Sass</li>
              <li>Angular JS</li>
              <li>React</li>
            </ul>
          </Box>
          <Box sm="12" md="6" lg="3" className="js-animate fadeIn animate-3">
            <H3>Server side</H3>

            <ul className="mt-0 listless serif">
              <li>Node.js</li>
              <li>GIT</li>
              <li>AWS</li>
            </ul>
          </Box>
          <Box sm="12" md="6" lg="3" className="js-animate fadeIn animate-3">
            <H3>Everything else</H3>

            <ul className="mt-0 listless serif">
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>UXPin</li>
            </ul>
          </Box>


          <Box sm="12" className="js-animate fadeIn animate-3">
            <H3>Want to talk?</H3>
            <p>
              I am always interested in listening to any design or development
              opportunities, big or small, so feel free to{" "}
              <a href="mailto:hello@michael-smedley.co.uk">email me</a> or catch
              me on{" "}
              <a
                href="https://twitter.com/smdly"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>.
            </p>
          </Box>
        </Container>
        <Footer />
      </AboutPage>
    );
  }
}
