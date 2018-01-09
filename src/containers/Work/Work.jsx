import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import H1 from '../../components/H1/H1';
import H2 from '../../components/H2/H2';
import H3 from '../../components/H3/H3';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ThemeChange from '../../helpers/ThemeChange';
import ResetTheme from '../../helpers/ResetTheme';
import Picture from '../../components/Picture/Picture';

const WorkPage = styled.div`
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

export default class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workItem: { gallery: [], title: '' },
    };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    this.getWorkItem();
  }
  componentDidMount() {
    ResetTheme(document.getElementsByTagName('body')[0], 'work');
    document.getElementsByTagName('body')[0].classList.add('work');
    setTimeout(() => {
      document.getElementsByTagName('body')[0].classList.add('loaded');
    }, 500);

    ThemeChange();
  }

  componentWillUnmount() {
    ResetTheme(document.getElementsByTagName('body')[0], 'work');
  }

  getWorkItem() {
    const path = this.props.location.pathname.substring(5);
    fetch(`https://api.michael-smedley.co.uk/v2${path}.json`)
      .then(resp => {
        return resp.json();
      })
      .then(workInfo => {
        this.setState({ workItem: workInfo });
      });
  }

  render() {
    return (
      <WorkPage>
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {this.state.workItem.title} | Michael Smedley | Preston based web developer
            Developer
          </title>
          <meta
            name="description"
            content={`Find out about the process I followed to help build the ${
              this.state.workItem.title
            } project`}
          />
          <link
            rel="canonical"
            href={`https://www.michael-smedley.co.uk/work/${
              this.state.workItem.slug
            }`}
          />
        </Helmet>
        <Header theme="dark" />
        <div className="container mb-1">
          <div className="sm-col-12 js-animate fadeIn slideUp animate-2">
            <H1 className="sm-text-align-center uppercase large-text">
              {this.state.workItem.title}
            </H1>
          </div>
          <div className="sm-col-12 js-animate fadeIn slideUp animate-3">
            <Picture
              images={this.state.workItem.desktop}
              title={this.state.workItem.title}
            />
          </div>
          <div className="sm-col-12 js-animate fadeIn slideUp animate-4">
            <p>
              <a
                href={this.state.workItem.url}
                rel="nofollow noopener"
                target="_blank"
              >
                {this.state.workItem.url}
              </a>
            </p>
            <H2>Project Brief</H2>
            {this.state.workItem.brief}
            <H2>Implementation</H2>
            {this.state.workItem.implementation}
            <H2>Results</H2>
            {this.state.workItem.results}
            <H2>Tools Used</H2>
            {this.state.workItem.tools}
            <p><Picture
              images={this.state.workItem.tablet}
              title={this.state.workItem.title}
            /></p>
            <p><Picture
              images={this.state.workItem.mobile}
              title={this.state.workItem.title}
            /></p>
          </div>

          <div className="sm-col-12 md-col-12 js-animate fadeIn slideUp animate-5">
            <H3>Does this sound like you?</H3>
            <p>
              I am always interested in listening to any design or development
              opportunities, big or small, so feel free to{' '}
              <a href="mailto:hello@michael-smedley.co.uk">email me</a> or catch
              me on{' '}
              <a
                href="https://twitter.com/smdly"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>.
            </p>
          </div>
        </div>
        <Footer />
      </WorkPage>
    );
  }
}
