// 1. Definição da Tipagem (TypeScript)
// Isso garante que cada projeto tenha exatamente estas propriedades, evitando erros.
export interface Project {
  id: number;
  title: string;
  description: string;
  techs: string[]; // Array de strings para as tecnologias (ex: React, Next.js, Styled Components)
  imageUrl: string; // URL da imagem ou caminho na pasta /public
  projectUrl: string; // Link para o projeto online
  githubUrl: string; // Link para o repositório
}

// 2. Array de Dados (Seus Projetos)
export const projects: Project[] = [
  {
    id: 1,
    title: "Website Ativ Academia",
    description: "O projeto tem como finalidade a criação de uma aplicação web para a academia ATIV , simplificando a interação entre o consumidor e o profissional,além de proporcionar um aumento na visibilidade da empresa.Na Aplicação o Usuário pode acessar, e checar informações sobre a academia, tirar suas dúvidas e também consultar o WhatsApp da Empresa.",
    techs: ["Html5, CSS3, JavaScript, BOOTSTRAP E Figma"],
    imageUrl: "/images/ATIVACADEMIA.png", 
    projectUrl: "https://previsao-tempo-projeto.vercel.app/",
    githubUrl: "https://github.com/PedroMajewski/ProjetoIntegradorExtensao-PIE--ATIV",
  },
  {
    id: 2,
    title: "Venda-Fest",
    description: "O VendaFest foi o maior desafio da minha jornada como desenvolvedor até agora. Trata-se de um aplicativo web completo criado para otimizar a experiência de compra em eventos, eliminando filas e tornando o processo rápido, prático e totalmente digital.",
    techs: ["Java SprintBoot, Angular, TypeScript, HTML, SCCS e MySQL"],
    imageUrl: "/images/VendaFest.png",
    projectUrl: "",
    githubUrl: "",
  },
  {
    id: 3,
    title: "Portfolio One-Page (Este Projeto)",
    description: "Este portfólio demonstra habilidades em navegação por âncora, design responsivo, animações e organização de código.",
    techs: ["Next.js", "TypeScript", "Styled Components", "Swiper", "Animações CSS"],
    imageUrl: "/images/portfolio.png",
    projectUrl: "#", // Aponta para a própria página
    githubUrl: "https://github.com/Gabriel/meu-portfolio-moderno",
  },
];