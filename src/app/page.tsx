import Image from 'next/image';

// import Link from "next/link";
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

import { AngularIcon } from '../../public/icons/angular';
import { ClaudeIcon } from '../../public/icons/claude';
import { MaterialUiIcon } from '../../public/icons/material-ui';
// import { GitHubIcon } from "../../public/icons/github";
import { NestIcon } from '../../public/icons/nest';
import { NextIcon } from '../../public/icons/next';
import { NodeJsIcon } from '../../public/icons/node-js';
import { OpenAiIcon } from '../../public/icons/open-ai';
import { PostgreIcon } from '../../public/icons/postgre';
import { ReactIcon } from '../../public/icons/react';
import { SalesforceIcon } from '../../public/icons/salesforce';
import { StyledComponentsIcon } from '../../public/icons/styled-components';
import { TanstackIcon } from '../../public/icons/tanstack';
// import { TanstackIcon } from "../../public/icons/tanstack";
import { TypescriptIcon } from '../../public/icons/typescript';
import { WhatsAppDarkIcon } from '../../public/icons/whatsapp-dark';
import {
  About,
  AboutGrid,
  AboutImage,
  AboutItem,
  Actions,
  Container,
  Eyebrow,
  Hero,
  HeroContent,
  HeroImage,
  HeroImageWrapper,
  HeroTitle,
  Page,
  PrimaryButton,
  ProjectCard,
  ProjectContent,
  ProjectGrid,
  ProjectImage,
  Section,
  SectionHeader,
  SectionTitle,
  SkillList,
  SkillTag,
  SkillTitle,
  Subtitle
} from './page.styles';

const capabilities = [
  "Systems Thinking",
  "Software Architecture",
  "Product Thinking",
  "Technical Leadership",
  "Business Understanding",
  "Engineering Excellence",
];

const skills = [
  ClaudeIcon,
  TypescriptIcon,
  AngularIcon,
  ReactIcon,
  NextIcon,
  NodeJsIcon,
  NestIcon,
  PostgreIcon,
  SalesforceIcon,
  // GitHubIcon,
];

const projects = [
  {
    id: "banking",
    title: "Santander Consumer Perú",
    description:
      "Desarrollo de Mesa de Concesiones en el building block de Canales Asistidos",
    image: "/images/credit-assessment.png",
    technologies: [
      OpenAiIcon,
      ReactIcon,
      TypescriptIcon,
      TanstackIcon,
      StyledComponentsIcon,
    ],
  },
  {
    id: "fintech",
    title: "Funding Management System",
    description:
      "Solución financiera para evaluación, seguimiento y gestión de solicitudes de préstamos crowd-funding.",
    image: "/images/project-fintech.jpeg",
    technologies: [
      ReactIcon,
      TypescriptIcon,
      MaterialUiIcon,
      NodeJsIcon,
      PostgreIcon,
    ],
  },
];

export default function HomePage() {
  return (
    <Page>
      <Header />

      <main>
        <Container>
          <Hero>
            <HeroContent>
              <Eyebrow>Hola, soy</Eyebrow>

              <HeroTitle>
                Marco
                <span> Arias</span>
              </HeroTitle>

              <Subtitle>Ingeniero de Software Senior</Subtitle>

              <p>
                Construyo aplicaciones web modernas, escalables y orientadas a
                generar resultados reales para el negocio.
              </p>

              <SkillTitle>Core capabilities:</SkillTitle>
              <SkillList>
                {capabilities.map((capability) => (
                  <SkillTag key={capability}>{capability}</SkillTag>
                ))}
              </SkillList>

              <Actions>
                {/* <PrimaryButton href="#experience">Ver proyectos</PrimaryButton> */}

                <PrimaryButton
                  target="_blank"
                  href="https://wa.me/51975993773?text=Hola%20Marco,%20me%20gustaría%20contactarte%20para%20hablar%20sobre%20una%20oportunidad."
                >
                  <WhatsAppDarkIcon width={18} height={18} />
                  Contactar
                </PrimaryButton>
                {/* <OutlineButton href="#contact">Contactar</OutlineButton> */}
              </Actions>

              <SkillTitle>Technologies:</SkillTitle>
              <SkillList>
                {skills.map((Skill) => (
                  <Skill key={Skill.name} width={30} height={30} />
                ))}
              </SkillList>
            </HeroContent>

            <HeroImageWrapper>
              <HeroImage>
                <Image
                  src="/images/profile-placeholder.png"
                  alt="Retrato profesional"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 42vw"
                />
              </HeroImage>

              <span>🟢 Disponible a tiempo completo</span>
              {/* <span>🟡 Disponible proyectos estratégicos</span>
              <span>🟠 Disponible consultoría en Arquitectura</span>
              <span>🔵 Disponible Mentoría y Speechs</span>
              <span>🔴 No Disponible</span> */}
            </HeroImageWrapper>
          </Hero>

          <About id="about">
            <AboutGrid>
              <div>
                <Eyebrow>Sobre mí</Eyebrow>

                <SectionTitle>
                  Creo soluciones digitales que generan <span>impacto.</span>
                </SectionTitle>

                <p>
                  Desarrollo productos robustos, mantenibles y centrados en la
                  experiencia del usuario.
                </p>
              </div>

              <AboutItem>
                <strong>Código limpio</strong>
                <p>Componentes mantenibles y arquitectura escalable.</p>
                <AboutImage
                  src="/images/clean-code.jpg"
                  alt="Código limpio"
                  width={400}
                  height={250}
                />
              </AboutItem>

              <AboutItem>
                <strong>Centrado en el usuario</strong>
                <p>Interfaces claras que resuelven problemas reales.</p>
                <AboutImage
                  src="/images/user-centered.jpg"
                  alt="Centrado en el usuario"
                  width={400}
                  height={250}
                />
              </AboutItem>

              <AboutItem>
                <strong>Orientado a resultados</strong>
                <p>Entrega de valor medible para producto y negocio.</p>
                <AboutImage
                  src="/images/results-oriented.webp"
                  alt="Orientado a resultados"
                  width={400}
                  height={250}
                />
              </AboutItem>
            </AboutGrid>
          </About>

          <Section id="experience">
            <SectionHeader>
              <div>
                <Eyebrow>Proyectos destacados</Eyebrow>
                <SectionTitle>Algunas experiencias recientes</SectionTitle>
              </div>

              {/* <Link href="/projects">Ver todos los proyectos →</Link> */}
            </SectionHeader>

            <ProjectGrid>
              {projects.map((project) => (
                <ProjectCard key={project.id}>
                  <ProjectImage>
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </ProjectImage>

                  <ProjectContent>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <SkillList>
                      {project.technologies.map((Technology) => (
                        <Technology
                          key={Technology.name}
                          width={30}
                          height={30}
                        />
                      ))}
                    </SkillList>
                  </ProjectContent>
                </ProjectCard>
              ))}
            </ProjectGrid>
          </Section>
        </Container>
      </main>

      <Footer />
    </Page>
  );
}
