import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Main } from 'components/common/main';

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: '#663399',
};
const paragraphStyles = {
  marginBottom: 48,
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Main>
      <h1 style={headingStyles}>
        <br />
        <span style={headingAccentStyles}></span>
      </h1>
      <p style={paragraphStyles}></p>
      <ul></ul>
    </Main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
