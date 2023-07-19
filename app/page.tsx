'use client';
import { useContext } from 'react';

import { Container, ThemeToggler } from './components';
import { ThemeContext } from '../app/providers';

export default function Home() {
  // @ts-ignore
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <Container>
      {/* <div
        className="
            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
      >
        There
      </div> */}

    </Container>
  );
}
