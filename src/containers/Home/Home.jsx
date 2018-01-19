import React, { Component } from 'react';
import styled from 'styled-components';
import H1 from '../../components/H1/H1';
import H2 from '../../components/H2/H2';
import WorkStatus from '../../components/WorkStatus/WorkStatus';
import SocialBar from '../../components/SocialBar/SocialBar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import WorkThumb from '../../components/WorkThumb/WorkThumb';
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

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { available: true, workList: [] };
  }

  componentWillMount() {
    this.getWork();
    ResetTheme(document.getElementsByTagName('body')[0], 'home');
  }

  componentDidMount() {
    ThemeChange();
    ResetTheme(document.getElementsByTagName('body')[0], 'home');
    setTimeout(() => {
      document.getElementsByTagName('body')[0].classList.add('loaded');
    }, 500);
  }

  componentWillUnmount() {
    ResetTheme(document.getElementsByTagName('body')[0], 'home');
  }

  getWork() {
    fetch('https://api.michael-smedley.co.uk/v2/work.json')
      .then(resp => {
        return resp.json();
      })
      .then(workInfo => {
        this.setState({ workList: workInfo });
      });
  }

  render() {
    const WorkList = this.state.workList.map((item, index) => {
      return (
        <WorkThumb
          key={index}
          name={item.title}
          link={'/work/' + item.slug}
          images={item.thumbnail}
        />
      );
    });

    return (
      <HomePage>
        <Header />
        <main>
          <Container className="align-center mb-1">
            <Box
              sm="12"
              md="12"
              lg="12"
              xl="12"
              xxl="12"
              className="ssm-text-align-left"
            >
              <H1 className="js-animate fadeIn animate-2 mt-0">
                I am a Web Developer from Preston, UK.<br />
                <span className="js-animate fadeIn animate-3">
                  I currently work for{' '}
                  <a
                    href="https://www.skiddle.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Skiddle
                  </a>
                </span>
              </H1>
              <H2 className="js-animate fadeIn  animate-5">
                I am <WorkStatus availability={this.state.available} />
              </H2>
              <SocialBar />
            </Box>
          </Container>
          <Container className="js-animate fadeIn animate-5 mb-1">
            {WorkList}
          </Container>
        </main>
        <Footer />
      </HomePage>
    );
  }
}
