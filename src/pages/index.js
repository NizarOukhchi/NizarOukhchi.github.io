import React from 'react';
import SEO from '../components/seo';
import ReactFullpage from '@fullpage/react-fullpage';
import Malarkey from '../components/malarkey';

import Header from '../components/header';
import Mouse from '../components/mouse';

import '../css/style.css';

const IndexPage = () => (
  <div>
    <SEO
      title="Freelancer, Software engineer, Javascript Enthusiast"
      keywords={[
        `Javascript`,
        `Frontend developer`,
        `Fullstack developer`,
        `Freelancer`
      ]}
      description="Nizar Oukhchi, Software Engineer, Freelance & a Javascript enthusiast, I love technology and code."
    />

    <ReactFullpage
      verticalCentered={false}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section flex flex-col main-bg">
              <Header />
              <div className="absolute pin  flex flex-col items-center justify-center">
                <div className="text-center px-5 lg:px-20">
                  <h1 className="text-3xl lg:text-5xl text-white mb-10 text-shadow">
                    Hello, my name is Nizar Oukhchi <br />
                    I'm <Malarkey /> from Morocco.
                  </h1>
                  <h5 className="text-2xl text-white font-normal text-shadow">
                    Crafting beautiful experiences for all kind of peoples.
                  </h5>
                </div>
                <Mouse />
              </div>
            </div>
            <div className="section">
              <p>Section 2</p>
            </div>
            <div className="section">
              <p>Section 3</p>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  </div>
);

export default IndexPage;
