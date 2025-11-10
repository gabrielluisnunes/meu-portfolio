import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    max-width: 900px;
    width: 100%;
    padding: 20px 0;

    @media (min-width: 768px) {
        flex-direction: row;
        gap: 60px;
        text-align: left;
        align-items: flex-start;
    }
`;

const ProfilePicture = styled.div`
    min-width: 250px;
    height: 250px;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
    
    &:hover {
        transform: scale(1.05);
    }
`;

const BioContent = styled.div`
    color: #333;
    
    @media (min-width: 768px) {
      text-align: left;
    }

    h2 {
        font-size: 2.5rem;
        color: #0070f3;
        margin-bottom: 20px;
        text-align: center;
        
        @media (min-width: 768px) {
            text-align: left;
        }
    }
    p {
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 15px;
    }
`;

const LinkContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap; /* Garante que os links quebrem em telas pequenas */
    gap: 20px;
    margin-top: 35px; /* Mais espaço para dar destaque */

    @media (min-width: 768px) {
        justify-content: flex-start;
    }
`;

const SocialLink = styled.a`
    color: #fff;
    background-color: #0070f3;
    padding: 12px 24px; /* Botões um pouco maiores */
    border-radius: 8px; /* Borda mais suave */
    font-weight: 600;
    text-decoration: none;
    transition: background-color 0.3s ease, transform 0.2s ease;
    
    &:hover {
        background-color: #005bb5;
        transform: translateY(-2px); /* Efeito sutil de elevação */
    }
`;

const About: React.FC = () => {
    return (
        <AboutContainer>
            
            <ProfilePicture>
                <Image 
                    src="/images/Gabriel.png" 
                    alt="Foto de Perfil do Gabriel" 
                    fill 
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 250px"
                />
            </ProfilePicture>
            
            <BioContent>
                <h2>Olá! Eu sou Gabriel Luis Parede Nunes</h2>
                
                <p>
                    Desenvolvedor Front-end especializado em construir interfaces de usuário modernas, responsivas e de alta performance. 
                    Minha paixão está em transformar designs complexos em código limpo e eficiente, focado sempre na melhor experiência para o usuário.
                </p>
                
                <p>
                    Sou proficiente em **Next.js**, **React**, **TypeScript** e **Styled Components**, e estou sempre explorando novas tecnologias 
                    para expandir meu conhecimento.
                </p>
                
                <p style={{ fontWeight: 600, color: '#0070f3' }}>
                    🚀 Vamos criar algo incrível juntos? Entre em contato agora!
                </p>
                
                <LinkContainer>
                    <SocialLink href="[Link para seu LinkedIn]" target="_blank">
                        LinkedIn
                    </SocialLink>
                    <SocialLink href="[Link para seu LinkedIn]" target="_blank">
                        GitHub
                    </SocialLink>
                    <SocialLink href="mailto:seu.email@exemplo.com">
                        Enviar Email
                    </SocialLink>
                    <SocialLink href="[Link para seu CV/Download]" target="_blank">
                        Download CV
                    </SocialLink>
                </LinkContainer>
                
            </BioContent>
            
        </AboutContainer>
    );
};

export default About;