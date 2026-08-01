import type { Metadata } from "next";
import Image from "next/image";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

import {
  AboutContent,
  AboutGrid,
  AccentText,
  Collage,
  CollageImage,
  Container,
  DailyCard,
  DailyGrid,
  DailySection,
  DailyText,
  Eyebrow,
  Hero,
  HeroActions,
  HeroDescription,
  HeroTitle,
  Highlight,
  HighlightGrid,
  ImageCaption,
  Page,
  PersonalNote,
  PrimaryLink,
  Quote,
  SecondaryLink,
  SectionDescription,
  SectionHeader,
  SectionTitle,
  StorySection,
  StoryText,
  ValueCard,
} from "./page.styles";

export const metadata: Metadata = {
  title: "Sobre mí | Marco Arias",
  description:
    "Conoce más sobre mi trayectoria, intereses y forma de entender la tecnología.",
};

const dailyLife = [
  {
    id: "music",
    title: "Música y guitarra",
    description:
      "Tocar guitarra me ayuda a desconectarme, entrenar la paciencia y encontrar nuevas formas de expresarme.",
    image: "/images/about/guitar.jpg",
    alt: "Guitarra en un espacio personal",
  },
  {
    id: "cooking",
    title: "Cocinar",
    description:
      "Disfruto preparar comida, experimentar con ingredientes y compartir el resultado con las personas cercanas.",
    image: "/images/about/cooking.jpg",
    alt: "Preparación de comida en una cocina",
  },
  {
    id: "exploring",
    title: "Conocer nuevos lugares",
    description:
      "Viajar, recorrer ciudades y observar cómo vive la gente alimenta mi curiosidad y cambia mi perspectiva.",
    image: "/images/about/travel.jpg",
    alt: "Paisaje urbano durante un viaje",
  },
];

const values = [
  {
    title: "Curiosidad",
    description:
      "Me interesa comprender cómo funcionan las cosas, desde un producto digital hasta un negocio completo.",
  },
  {
    title: "Claridad",
    description:
      "Busco convertir problemas complejos en soluciones comprensibles, implementables y medibles.",
  },
  {
    title: "Ejecución",
    description:
      "Valoro las ideas, pero sobre todo la capacidad de llevarlas a producción y generar resultados.",
  },
];

export default function AboutPage() {
  return (
    <Page>
      <Header />

      <main>
        <Container>
          <Hero>
            <AboutContent>
              <Eyebrow>Un poco más personal</Eyebrow>

              <HeroTitle>
                Tecnología, curiosidad y una vida más allá del{" "}
                <AccentText>código.</AccentText>
              </HeroTitle>

              <HeroDescription>
                Soy ingeniero de sistemas y desarrollador de software, pero mi
                forma de trabajar también está influenciada por la música, los
                viajes, las conversaciones, la cocina y la observación de cómo
                las personas usan la tecnología en su vida cotidiana.
              </HeroDescription>

              <HeroActions>
                <PrimaryLink href="/proyectos">
                  Conocer mis proyectos
                </PrimaryLink>

                <SecondaryLink href="/experiencia">
                  Ver experiencia
                </SecondaryLink>
              </HeroActions>
            </AboutContent>

            <Collage aria-label="Momentos de mi vida cotidiana">
              <CollageImage $position="portrait">
                <Image
                  src="/images/about/portrait.jpg"
                  alt="Retrato personal"
                  fill
                  priority
                  sizes="(max-width: 768px) 70vw, 22rem"
                />
              </CollageImage>

              <CollageImage $position="workspace">
                <Image
                  src="/images/about/workspace.jpg"
                  alt="Espacio de trabajo"
                  fill
                  sizes="(max-width: 768px) 45vw, 14rem"
                />
              </CollageImage>

              <CollageImage $position="travel">
                <Image
                  src="/images/about/travel.jpg"
                  alt="Momento durante un viaje"
                  fill
                  sizes="(max-width: 768px) 45vw, 13rem"
                />
              </CollageImage>

              <CollageImage $position="luna">
                <Image
                  src="/images/about/luna.jpg"
                  alt="Luna, mi gata"
                  fill
                  sizes="(max-width: 768px) 42vw, 12rem"
                />
              </CollageImage>

              <ImageCaption>
                Trabajo, música, viajes y algunos momentos supervisados por
                Luna.
              </ImageCaption>
            </Collage>
          </Hero>

          <StorySection>
            <SectionHeader>
              <Eyebrow>Mi historia</Eyebrow>

              <SectionTitle>
                Construir software es también entender a las{" "}
                <AccentText>personas.</AccentText>
              </SectionTitle>
            </SectionHeader>

            <AboutGrid>
              <StoryText>
                <p>
                  Mi carrera ha estado principalmente vinculada a productos
                  digitales para banca, seguros y servicios financieros. En
                  estos entornos aprendí que una buena solución no depende
                  únicamente de escribir código correctamente.
                </p>

                <p>
                  También requiere comprender el negocio, dialogar con perfiles
                  diferentes, cuestionar supuestos y convertir necesidades
                  ambiguas en productos que realmente puedan utilizarse.
                </p>

                <p>
                  Me interesa trabajar en el punto donde se encuentran la
                  tecnología, la estrategia y la ejecución. Allí es donde una
                  aplicación deja de ser únicamente software y empieza a
                  convertirse en una solución.
                </p>
              </StoryText>

              <PersonalNote>
                <Quote>
                  “La mejor forma de entender algo es intentar explicarlo y
                  convertirlo en una solución simple.”
                </Quote>

                <span>Una idea que guía mi forma de trabajar.</span>
              </PersonalNote>
            </AboutGrid>
          </StorySection>

          <Highlight>
            <SectionHeader>
              <Eyebrow>Cómo veo mi trabajo</Eyebrow>
              <SectionTitle>
                Principios que intento aplicar cada día
              </SectionTitle>
            </SectionHeader>

            <HighlightGrid>
              {values.map((value, index) => (
                <ValueCard key={value.title}>
                  <span>0{index + 1}</span>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </ValueCard>
              ))}
            </HighlightGrid>
          </Highlight>

          <DailySection>
            <SectionHeader>
              <Eyebrow>Fuera del trabajo</Eyebrow>

              <SectionTitle>
                Las cosas sencillas también alimentan las grandes ideas.
              </SectionTitle>

              <SectionDescription>
                Parte de mi creatividad y capacidad para resolver problemas
                proviene de actividades que no tienen relación directa con el
                desarrollo de software.
              </SectionDescription>
            </SectionHeader>

            <DailyGrid>
              {dailyLife.map((item) => (
                <DailyCard key={item.id}>
                  <div>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  <DailyText>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </DailyText>
                </DailyCard>
              ))}
            </DailyGrid>
          </DailySection>
        </Container>
      </main>

      <Footer />
    </Page>
  );
}
