import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StyledComponentsRegistry from './lib/StyledComponentsRegistry';
import { GlobalStyles } from './globalStyles'; 


import Header from './components/Header';
import Footer from './components/Footer';


const inter = Inter({ subsets: ['latin'] }); 

// 1. Definindo Metadados (SEO)
export const metadata: Metadata = {
  title: 'Gabriel | Portfólio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          
          {}
          <GlobalStyles />
          
          {}
          <Header />
          
          {}
          {}
          <main style={{ flexGrow: 1 }}>
            {children}
          </main>
          
          {}
          <Footer />

        </StyledComponentsRegistry>
      </body>
    </html>
  );
}