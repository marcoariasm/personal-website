import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

import {
  AngularIcon,
  ClaudeIcon,
  NestIcon,
  NextIcon,
  NodeJsIcon,
  OpenAiIcon,
  PostgreIcon,
  ReactIcon,
  SalesforceIcon,
  TypescriptIcon,
  WhatsAppDarkIcon
} from '../../../public/icons';
import { EXPERIENCE_CONFIG } from './experience/experience.config';
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

const skills = [
  ClaudeIcon,
  OpenAiIcon,
  TypescriptIcon,
  AngularIcon,
  ReactIcon,
  NextIcon,
  NodeJsIcon,
  NestIcon,
  PostgreIcon,
  SalesforceIcon,
];

export default async function HomePage() {
  const t = await getTranslations("HomePage");
  const t_capabilities = await getTranslations("HomePage.capabilities");
  const t_about = await getTranslations("HomePage.aboutItems");
  const t_experience = await getTranslations("HomePage.experienceItems");

  const capabilities = [
    t_capabilities("capability1"),
    t_capabilities("capability2"),
    t_capabilities("capability3"),
    t_capabilities("capability4"),
    t_capabilities("capability5"),
    t_capabilities("capability6"),
  ];

  const aboutItems = [
    {
      title: t_about("item1.title"),
      description: t_about("item1.description"),
      image: t_about("item1.imageSrc"),
      alt: t_about("item1.imageAlt"),
    },
    {
      title: t_about("item2.title"),
      description: t_about("item2.description"),
      image: t_about("item2.imageSrc"),
      alt: t_about("item2.imageAlt"),
    },
    {
      title: t_about("item3.title"),
      description: t_about("item3.description"),
      image: t_about("item3.imageSrc"),
      alt: t_about("item3.imageAlt"),
    },
  ];

  const experienceItems = EXPERIENCE_CONFIG.map((experience) => ({
    id: experience.id,
    title: t_experience(`${experience.id}.title`),
    description: t_experience(`${experience.id}.description`),
    image: experience.image,
    alt: t_experience(`${experience.id}.imageAlt`),
    techStack: experience.techStack,
  }));

  return (
    <Page>
      <Header />

      <main>
        <Container>
          <Hero>
            <HeroContent>
              <Eyebrow>{t("hello")}</Eyebrow>

              <HeroTitle>
                {t("name")}
                <span>{t("lastName")}</span>
              </HeroTitle>

              <Subtitle>{t("subtitle")}</Subtitle>

              <p>{t("paragraph")}</p>

              <SkillTitle>{t("coreCapabilities")}</SkillTitle>
              <SkillList>
                {capabilities.map((capability) => (
                  <SkillTag key={capability}>{capability}</SkillTag>
                ))}
              </SkillList>

              <Actions>
                {/* <PrimaryButton href="#experience">{t("seeMoreExperience")}</PrimaryButton> */}

                <PrimaryButton target="_blank" href={t("hrefContact")}>
                  <WhatsAppDarkIcon width={18} height={18} />
                  {t("contact")}
                </PrimaryButton>
                {/* <OutlineButton href="#contact">Contactar</OutlineButton> */}
              </Actions>

              <SkillTitle>{t("technologies")}</SkillTitle>
              <SkillList>
                {skills.map((Skill) => (
                  <Skill key={Skill.name} width={30} height={30} />
                ))}
              </SkillList>
            </HeroContent>

            <HeroImageWrapper>
              <HeroImage>
                <Image
                  src="/images/MarcoArias.png"
                  alt={t("imageAlt")}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 42vw"
                />
              </HeroImage>

              <span>{t("availability")}</span>
              {/* "availability": "🟡 Available strategic projects",
              "availability": "🟠 Available consulting in Architecture",
              "availability": "🔵 Available Mentorship and Talks",
              "availability": "🔴 Unavailable", */}
            </HeroImageWrapper>
          </Hero>

          <About id="about">
            <AboutGrid>
              <div>
                <Eyebrow>{t("about")}</Eyebrow>

                <SectionTitle>
                  {t("aboutTitle")}
                  <span>{t("aboutTitleBold")}</span>
                </SectionTitle>

                <p>{t("aboutParagraph")}</p>
              </div>

              {aboutItems.map((item) => (
                <AboutItem key={item.title}>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                  <AboutImage
                    src={item.image}
                    alt={item.alt}
                    width={400}
                    height={250}
                  />
                </AboutItem>
              ))}
            </AboutGrid>
          </About>

          <Section id="experience">
            <SectionHeader>
              <div>
                <Eyebrow>{t("experienceEyebrow")}</Eyebrow>
                <SectionTitle>{t("experienceTitle")}</SectionTitle>
              </div>

              {/* <Link href="/projects">{t("seeMoreExperience")}</Link> */}
            </SectionHeader>

            <ProjectGrid>
              {experienceItems.map((experience) => (
                <ProjectCard key={experience.id}>
                  <ProjectImage>
                    <Image
                      src={experience.image}
                      alt={experience.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </ProjectImage>

                  <ProjectContent>
                    <h3>{experience.title}</h3>
                    <p>{experience.description}</p>

                    <SkillList>
                      {experience.techStack.map((Technology, index) => (
                        <Technology
                          key={`${experience.id}-${index}`}
                          aria-hidden={true}
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
