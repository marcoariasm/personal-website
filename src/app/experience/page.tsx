import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

import {
  Achievement,
  AchievementList,
  Company,
  Container,
  Content,
  Description,
  ExperienceCard,
  ExperienceHeader,
  ExperienceList,
  ExperienceMeta,
  ExperiencePeriod,
  ExperienceRole,
  Eyebrow,
  Hero,
  Page,
  PageTitle,
  Skill,
  SkillList,
  SummaryCard,
  SummaryGrid,
  SummaryValue,
} from "./page.styles";

export const metadata: Metadata = {
  title: "Experiencia | Andrés Salazar",
  description:
    "Experiencia profesional en desarrollo frontend, arquitectura y productos digitales.",
};

interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    id: "bank",
    company: "Entidad bancaria",
    role: "Senior Software Engineer",
    period: "2025 — Actualidad",
    location: "Lima, Perú · Híbrido",
    description:
      "Desarrollo de productos digitales para evaluación crediticia y canales asistidos, trabajando en una aplicación React con funcionamiento standalone y embebido.",
    achievements: [
      "Diseño de arquitectura frontend para una aplicación bancaria de modo dual.",
      "Construcción de componentes reutilizables y un design system con styled-components.",
      "Integración con servicios empresariales, permisos y flujos de evaluación.",
      "Mejora de cobertura, calidad de código y procesos de despliegue.",
    ],
    skills: [
      "React",
      "TypeScript",
      "Styled Components",
      "React Query",
      "Vitest",
      "MSW",
    ],
  },
  {
    id: "consulting",
    company: "Consultora de software",
    role: "Senior Frontend Developer",
    period: "2022 — 2025",
    location: "Remoto",
    description:
      "Participación en soluciones digitales para banca, seguros y servicios financieros, colaborando con equipos distribuidos y multidisciplinarios.",
    achievements: [
      "Implementación de aplicaciones React escalables y mantenibles.",
      "Definición de estándares técnicos y buenas prácticas frontend.",
      "Mentoría y acompañamiento técnico a otros desarrolladores.",
      "Participación en refinamientos, estimaciones y decisiones de arquitectura.",
    ],
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "REST APIs",
      "Agile",
    ],
  },
  {
    id: "insurance",
    company: "Compañía de seguros",
    role: "Frontend Technical Lead",
    period: "2019 — 2022",
    location: "Lima, Perú",
    description:
      "Liderazgo técnico de iniciativas frontend para productos de seguros y plataformas internas.",
    achievements: [
      "Diseño de componentes compartidos para múltiples funcionalidades.",
      "Alineación técnica entre frontend, backend y negocio.",
      "Revisión de código y mejora de procesos de entrega.",
      "Optimización del rendimiento y experiencia de usuario.",
    ],
    skills: [
      "JavaScript",
      "React",
      "HTML",
      "CSS",
      "Testing",
      "Technical Leadership",
    ],
  },
];

const summary = [
  {
    label: "Experiencia",
    value: "9+ años",
  },
  {
    label: "Especialidad",
    value: "Frontend",
  },
  {
    label: "Industrias",
    value: "Banca y seguros",
  },
  {
    label: "Modalidad",
    value: "Remoto / híbrido",
  },
];

export default function ExperiencePage() {
  return (
    <Page>
      <Header />

      <main>
        <Container>
          <Hero>
            <Eyebrow>Trayectoria profesional</Eyebrow>

            <PageTitle>
              Experiencia construyendo productos digitales con{" "}
              <span>impacto real.</span>
            </PageTitle>

            <Description>
              He trabajado en productos empresariales para banca, seguros y
              servicios financieros, combinando desarrollo frontend,
              arquitectura, liderazgo y conocimiento de negocio.
            </Description>
          </Hero>

          <SummaryGrid>
            {summary.map((item) => (
              <SummaryCard key={item.label}>
                <SummaryValue>{item.value}</SummaryValue>
                <span>{item.label}</span>
              </SummaryCard>
            ))}
          </SummaryGrid>

          <Content>
            <ExperienceList>
              {experiences.map((experience) => (
                <ExperienceCard key={experience.id}>
                  <ExperienceHeader>
                    <div>
                      <Company>{experience.company}</Company>
                      <ExperienceRole>{experience.role}</ExperienceRole>
                    </div>

                    <ExperienceMeta>
                      <ExperiencePeriod>{experience.period}</ExperiencePeriod>
                      <span>{experience.location}</span>
                    </ExperienceMeta>
                  </ExperienceHeader>

                  <Description>{experience.description}</Description>

                  <AchievementList>
                    {experience.achievements.map((achievement) => (
                      <Achievement key={achievement}>{achievement}</Achievement>
                    ))}
                  </AchievementList>

                  <SkillList>
                    {experience.skills.map((skill) => (
                      <Skill key={skill}>{skill}</Skill>
                    ))}
                  </SkillList>
                </ExperienceCard>
              ))}
            </ExperienceList>
          </Content>
        </Container>
      </main>

      <Footer />
    </Page>
  );
}
