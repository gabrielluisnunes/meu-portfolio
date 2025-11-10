'use client'; 

import React, { useCallback } from 'react';
import type { Container, Engine } from '@tsparticles/engine'; 
import Particles, { initParticlesEngine } from '@tsparticles/react'; // ⚠️ CORREÇÃO: Importar initParticlesEngine
import { loadStarsPreset } from '@tsparticles/preset-stars'; 
import styled from 'styled-components';

// 1. Otimização: Criar o componente estilizado para aplicar os estilos de layout
const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const StarParticlesBackground: React.FC = () => {
  // Use um estado para saber se o engine foi inicializado
  const [init, setInit] = React.useState(false);

  // 2. CORREÇÃO: Inicializar o engine uma única vez no mount
  React.useEffect(() => {
    // Inicializa o engine do tsParticles e carrega o preset de estrelas
    initParticlesEngine(async (engine) => {
      await loadStarsPreset(engine);
    }).then(() => {
      setInit(true); // Marca como inicializado
    });
  }, []);

  // 3. Callback de carregamento (Opcional, mas útil para debug)
  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      // Opcional: console.log('Partículas carregadas');
    },
    [],
  );

  // 4. Se o engine não estiver pronto, não renderize nada
  if (!init) {
    return null;
  }

  // 5. Opções de configuração (Fundo preto e interatividade)
  const options = {
    // Fundo preto que você pediu
    background: {
      color: {
        value: '#000000', 
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: false, mode: 'push' },
        onHover: { enable: false, mode: 'repulse' },
        resize: true,
      },
    },
    particles: {
      number: { value: 100, density: { enable: true, area: 800 } },
      color: { value: '#ffffff' },
      shape: { type: 'star' },
      opacity: {
        value: 0.5,
        random: true,
        anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
      },
      size: {
        value: 1,
        random: true,
        anim: { enable: true, speed: 4, size_min: 0.3, sync: false },
      },
      line_linked: { enable: false },
      move: {
        enable: true,
        speed: 0.5,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
      },
    },
    // 6. Configuração para usar o preset de estrelas que carregamos
    preset: 'stars',
  };

  return (
    <ParticlesContainer>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded} // Propriedade corrigida
        options={options as any}
      />
    </ParticlesContainer>
  );
};

export default StarParticlesBackground;