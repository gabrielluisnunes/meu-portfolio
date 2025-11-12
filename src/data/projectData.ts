export interface Project {
  id: number;
  title: string;
  description: string;
  techs: string[];
  imageUrl: string;
  projectUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Website Ativ Academia",
    description: "O projeto tem como finalidade a criação de uma aplicação web para a academia ATIV, simplificando a interação entre o consumidor e o profissional, além de proporcionar um aumento na visibilidade da empresa. Na Aplicação o Usuário pode acessar, e checar informações sobre a academia, tirar suas dúvidas e também consultar o WhatsApp da Empresa.",
    techs: ["Html5", "CSS3", "JavaScript", "BOOTSTRAP", "Figma"],
    imageUrl: "/images/ATIVACADEMIA.png", 
    projectUrl: "https://ativ-preview.netlify.app/home/",
    githubUrl: "https://github.com/PedroMajewski/ProjetoIntegradorExtensao-PIE--ATIV",
  },
  {
    id: 2,
    title: "Venda-Fest",
    description: "O VendaFest foi o maior desafio da minha jornada como desenvolvedor até agora. Trata-se de um aplicativo web completo criado para otimizar a experiência de compra em eventos, eliminando filas e tornando o processo rápido, prático e totalmente digital.",
    techs: ["Java SprintBoot", "Angular", "TypeScript", "HTML", "SCCS", "MySQL"],
    imageUrl: "/images/VendaFest.png",
    projectUrl: "#", 
    githubUrl: "#", 
  },
  {
    id: 3,
    title: "Portfólio Gabriel",
    description: "Este portfólio demonstra habilidades em navegação por âncora, design responsivo, animações e organização de código.",
    techs: ["Next.js", "TypeScript", "Styled Components", "Swiper", "Animações CSS"],
    imageUrl: "/images/Portfolio.png",
    projectUrl: "https://gabrielnunes-portfolio.vercel.app/", 
    githubUrl: "https://github.com/gabrielluisnunes/meu-portfolio",
  },
{
id: 4,
    title: "MG Electric",
    description: "Site para a empresa MG Electric, com uma cara nova e moderna, reforçando a presença digital da empresa.",
    techs: ["HTML5", "JavaScript", "CSS3", "Shopify", "SEO"],
    imageUrl: "/images/mg.png",
    projectUrl: "https://mgelectric.com.br/", 
    githubUrl: "",
  },
{
id: 5,
    title: "PN Performance Mídia",
    description: "O projeto consiste na criação da nova Landing Page institucional para a PN Performance, com o objetivo principal de otimizar a captação de leads qualificados através de uma experiência mobile e desktop de alta performance.",
    techs: ["Next.js", "TypeScript", "Bootstrap", "React Bootstrap", "CSS3", "Vercel"],
    imageUrl: "/images/pnlp.png",
    projectUrl: "https://www.pnperformancemidia.com/", 
    githubUrl: "https://github.com/gabrielluisnunes/Pnperformance",
  },
    
];