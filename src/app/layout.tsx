import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// ⚠️ 1. Importar o componente StyledComponentsRegistry
import StyledComponentsRegistry from './lib/StyledComponentsRegistry'; 

// Importa a fonte do Google que o Next.js já configurou
const inter = Inter({ subsets: ['latin'] }); 

// Metadados para SEO - Título e descrição do seu portfólio
export const metadata: Metadata = {
  title: 'Meu Portfólio Moderno',
  description: 'Projetos Front-end utilizando Next.js, React e TypeScript.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {}
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}