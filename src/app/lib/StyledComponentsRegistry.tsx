'use client'; // Linha obrigatória no App Router para indicar que é um componente do lado do cliente

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation'; // Hook do Next.js para injetar HTML no <head>
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'; // Ferramentas do Styled Components

// 1. Define o componente que irá gerenciar os estilos
export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // 2. Cria uma instância do ServerStyleSheet (que coleta os estilos)
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  // 3. Hook para injetar os estilos no HTML do servidor
  useServerInsertedHTML(() => {
    // Coleta as tags de estilo geradas pelo Styled Components
    const styles = styledComponentsStyleSheet.getStyleElement();
    
    // Limpa a folha de estilo para o próximo ciclo de renderização
    styledComponentsStyleSheet.instance.clearTag(); 
    
    // Retorna os estilos para serem injetados no <head>
    return <>{styles}</>;
  });

  // 4. Se não estiver no modo de desenvolvimento, apenas renderiza os filhos (otimização)
  if (typeof window !== 'undefined') return <>{children}</>;

  // 5. No servidor, envolve a aplicação com o StyleSheetManager para coletar os estilos
  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}