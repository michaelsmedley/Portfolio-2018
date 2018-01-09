import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import H1 from '../../components/H1/H1';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ThemeChange from '../../helpers/ThemeChange';
import ResetTheme from '../../helpers/ResetTheme';

const NotFoundPage = styled.div`
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

export default class NotFound extends Component {
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
      <NotFoundPage>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Michael Smedley | Preston based web developer</title>
          <meta
            name="description"
            content="I am a web developer from Preston, England. I deal with PHP frameworks, front end design and everything in between.  Sometimes I even make broken pages."
          />
        </Helmet>
        <Header theme="light" />
        <main className="container align-top mb-1">
          <div className="sm-col-12 sm-text-align-left">
            <H1 className="js-animate fadeIn slideUp animate-2 mt-0">
              Oh no <span role="img" aria-label="Crying face">😭</span>
            </H1>

            <section className="bg-alt pt-0 pb-1 js-animate fadeIn slideUp animate-3 story-text">
              <p>
                It looks like the page you are trying to visit doesn't actually
                exist.
              </p>

              <p>
                It may be that you have followed an old link (I am terrible for
                archiving), or the link is just broken or plain wrong.
              </p>

              <p>
                If you think that the link is correct, then it would be great if
                you could{' '}
                <a href="mailto:errors@michael-smedley.co.uk">email me</a>,
                telling me where you came from if possible.
              </p>

              <p>
                In the meantime, feel free to have a browse around the site.
                Thanks again.
              </p>
            </section>
          </div>
        </main>
        <Footer />
      </NotFoundPage>
    );
  }
}
