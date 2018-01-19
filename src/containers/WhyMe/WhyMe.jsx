import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import H1 from '../../components/H1/H1';
import H2 from '../../components/H2/H2';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Container, Box } from '../../components/Grid/Grid';
import ThemeChange from '../../helpers/ThemeChange';
import ResetTheme from '../../helpers/ResetTheme';

const HomePage = styled.div`
  footer {
    background: #4c5c68;
    color: #dcdcdd;

    a {
      color: #dcdcdd;
      &:after {
        border-color: #dcdcdd;
      }
      &:hover {
        color: #dcdcdd;
        &:after {
          border-color: #dcdcdd;
        }
      }
    }
  }
`;

export default class WhyMe extends Component {
  componentDidMount() {
    ResetTheme(document.getElementsByTagName('body')[0], 'home');
    setTimeout(() => {
      document.getElementsByTagName('body')[0].classList.add('loaded');
    }, 500);
    ThemeChange();
  }

  componentWillUnmount() {
    ResetTheme(document.getElementsByTagName('body')[0], 'home');
  }

  render() {
    return (
      <HomePage>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Why Me? | Michael Smedley | Preston based web developer</title>
          <meta
            name="description"
            content="Find out how I can help reach out to businesses and individuals to help reach their web goals."
          />
          <link
            rel="canonical"
            href="https://www.michael-smedley.co.uk/why-me"
          />
        </Helmet>
        <Header theme="light" />
        <Container className="align-top mb-1">
          <Box
            sm="12"
            md="12"
            lg="12"
            xl="12"
            xxl="12"
            className="sm-text-align-left"
          >
            <H1 className="js-animate fadeIn slideUp animate-2 mt-0">
              Available for hire
            </H1>

            <section className="bg-alt pt-0 pb-1 js-animate fadeIn slideUp animate-3 story-text">
              <p>
                Over the last ten years, since graduating from University, I
                have held a number of diverse roles across multiple companies.
                In this time, I have learned great skills from great mentors,
                and I now want to use these skills to build amazing projects.
              </p>

              <p>
                I have always kept an interest in all aspects of web design, and
                have been involved in all stages of the process. This is quite
                unique as it means I can have an insight on everything from
                mockup stage, to build, to CMS integration, to deployment, to
                post launch analysis.
              </p>

              <H2>But why me?</H2>

              <p>
                I like to go into real detail with projects and deliver the best
                possible outcome using the correct tools. Over the years I have
                learned about front end design frameworks, CSS pre-processors,
                PHP frameworks, command line server management and analytics
                implementations, so I have a very broad knowledge of what tools
                are the best for a project.
              </p>

              <p>
                I have also worked with many small, medium and large scale
                projects, whether it's building Facebook apps for Nikon, a
                custom registration system for Microsoft, an award-winning
                bespoke front end and content management system for
                VisitEngland, or helping to maintain Skiddle, one of the UK's
                most visited websites, I have great experience in many areas.
              </p>

              <H2>Want to talk?</H2>

              <p>
                I am interested in any project, big or small, and am willing to
                listen to any opportunities. I'm even happy to help give advice
                or feedback on anything. If you want to discuss any projects,
                then please feel free to email me at{' '}
                <a href="mailto:hello@michael-smedley.co.uk">
                  hello@michael-smedley.co.uk
                </a>, or follow me,{' '}
                <a
                  href="https://twitter.com/smdly"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @smdly
                </a>, on twitter.
              </p>
            </section>
          </Box>
        </Container>
        <Footer />
      </HomePage>
    );
  }
}
