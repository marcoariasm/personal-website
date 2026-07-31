import type { Metadata } from "next";
import Image from "next/image";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

import {
  CategoryButton,
  CategoryList,
  Container,
  Description,
  Eyebrow,
  Page,
  PageHeader,
  PageTitle,
  ProjectCard,
  ProjectContent,
  ProjectDescription,
  ProjectGrid,
  ProjectImage,
  ProjectLink,
  ProjectMeta,
  ProjectTitle,
  Skill,
  SkillList,
} from "./page.styles";

export const metadata: Metadata = {
  title: "Proyectos | Andrés Salazar",
  description:
    "Selección de proyectos frontend, fintech, e-commerce y productos digitales.",
};

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  year: string;
  image: string;
  technologies: string[];
  href: string;
}

const projects: Project[] = [
  {
    id: "banking-platform",
    title: "Plataforma de evaluación crediticia",
    description:
      "Aplicación empresarial para gestionar solicitudes, evaluaciones, permisos y procesos de decisión crediticia.",
    category: "Fintech",
    year: "2026",
    image: "/images/projects/banking-platform.jpg",
    technologies: ["React", "TypeScript", "React Query", "Styled Components"],
    href: "/proyectos/banking-platform",
  },
  {
    id: "dental-platform",
    title: "Sistema de gestión para clínica dental",
    description:
      "Plataforma para gestionar pacientes, profesionales, agenda, consultas y finanzas.",
    category: "SaaS",
    year: "2026",
    image: "/images/projects/dental-platform.jpg",
    technologies: ["Next.js", "Supabase", "React", "TypeScript"],
    href: "/proyectos/dental-platform",
  },
  {
    id: "analytics-dashboard",
    title: "Dashboard analítico",
    description:
      "Panel de indicadores con visualizaciones, filtros y reportes orientados a la toma de decisiones.",
    category: "Data",
    year: "2025",
    image: "/images/projects/analytics-dashboard.jpg",
    technologies: ["Next.js", "TypeScript", "Charts", "REST API"],
    href: "/proyectos/analytics-dashboard",
  },
  {
    id: "ecommerce",
    title: "E-commerce de estaciones de trabajo",
    description:
      "Tienda especializada en accesorios, mobiliario y tecnología para espacios de trabajo.",
    category: "E-commerce",
    year: "2026",
    image: "/images/projects/ecommerce.jpg",
    technologies: ["Shopify", "Next.js", "Cloudflare", "SEO"],
    href: "/proyectos/ecommerce",
  },
  {
    id: "embedded-app",
    title: "Aplicación React embebida",
    description:
      "Frontend dual con funcionamiento standalone e integrado mediante iframe y postMessage.",
    category: "Enterprise",
    year: "2026",
    image: "/images/projects/embedded-app.jpg",
    technologies: ["React", "PostMessage", "OAuth", "MSW"],
    href: "/proyectos/embedded-app",
  },
  {
    id: "portfolio",
    title: "Portafolio profesional",
    description:
      "Sitio personal de alto rendimiento para mostrar experiencia, proyectos y capacidades técnicas.",
    category: "Web",
    year: "2026",
    image: "/images/projects/portfolio.jpg",
    technologies: ["Next.js", "Styled Components", "TypeScript"],
    href: "/proyectos/portfolio",
  },
];

const categories = [
  "Todos",
  "Fintech",
  "SaaS",
  "Data",
  "E-commerce",
  "Enterprise",
];

export default function ProjectsPage() {
  return (
    <Page>
      <Header />

      <main>
        <Container>
          <PageHeader>
            <Eyebrow>Portafolio</Eyebrow>

            <PageTitle>
              Proyectos creados para resolver <span>problemas reales.</span>
            </PageTitle>

            <Description>
              Una selección de productos y plataformas en los que he trabajado,
              combinando desarrollo, diseño, arquitectura y estrategia.
            </Description>
          </PageHeader>

          <CategoryList aria-label="Filtrar proyectos">
            {categories.map((category, index) => (
              <CategoryButton
                key={category}
                type="button"
                $active={index === 0}
              >
                {category}
              </CategoryButton>
            ))}
          </CategoryList>

          <ProjectGrid>
            {projects.map((project) => (
              <ProjectCard key={project.id}>
                <ProjectImage>
                  <Image
                    src={project.image}
                    alt={`Vista previa de ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </ProjectImage>

                <ProjectContent>
                  <ProjectMeta>
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </ProjectMeta>

                  <ProjectTitle>{project.title}</ProjectTitle>

                  <ProjectDescription>{project.description}</ProjectDescription>

                  <SkillList>
                    {project.technologies.map((technology) => (
                      <Skill key={technology}>{technology}</Skill>
                    ))}
                  </SkillList>

                  <ProjectLink href={project.href}>
                    Ver caso de estudio
                    <span aria-hidden="true">→</span>
                  </ProjectLink>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectGrid>
        </Container>
      </main>

      <Footer />
    </Page>
  );
}
