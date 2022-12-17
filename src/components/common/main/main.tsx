import React, { ReactNode } from 'react';

interface MainInterface {
  children: ReactNode;
  customStyles?: object;
}

const pageStyles = {
  color: 'rgba(122,122,129,0.49)',
  height: '100vh',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
  background: `#2d313f url('https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?auto=compress&cs=tinysrgb&w=1600') no-repeat center/cover`,
  opacity: '0.8',
};

const Main: React.FC<MainInterface> = ({ children, customStyles }) => (
  <main style={{ ...pageStyles, ...customStyles }}>{children}</main>
);

export default Main;
