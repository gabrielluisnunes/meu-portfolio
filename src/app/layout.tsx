import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StyledComponentsRegistry from './lib/StyledComponentsRegistry';
import { GlobalStyles } from './globalStyles'; 

import Header from './components/Header';
import Footer from './components/Footer';
import StarParticlesBackground from './components/StarParticlesBackground';

const inter = Inter({ subsets: ['latin'] }); 


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {}
        <StarParticlesBackground />
        
        <StyledComponentsRegistry>
          <GlobalStyles />
          
          <Header />
          
          {}
          <main style={{ flexGrow: 1, position: 'relative', zIndex: 1 }}>
            {children}
          </main>
          
          <Footer />

        </StyledComponentsRegistry>
      </body>
    </html>
  );
}