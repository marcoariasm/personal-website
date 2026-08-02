"use client";

import Image from 'next/image';
import styled from 'styled-components';

import { Link } from '@/i18n/navigation';

export const Page = styled.div`
  min-height: 100vh;
  background:
    radial-gradient(
      circle at 70% 20%,
      rgba(36, 135, 220, 0.16),
      transparent 30%
    ),
    ${({ theme }) => theme.colors.background};
`;

export const Container = styled.div`
  width: min(
    calc(100% - ${({ theme }) => theme.spacing.xl}),
    ${({ theme }) => theme.layout.contentMaxWidth}
  );
  margin: 0 auto;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.header};

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  backdrop-filter: blur(12px);

  ${Container} {
    min-height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

export const Logo = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.75rem;
  font-weight: 800;
  display: flex;
  gap: 0.25rem;
  
  div {
    font-size: 1.25rem;
    font-weight: 400;
    padding-top: 0.6125rem;
  }

  &::after {
    content: ".";
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  a {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 0.875rem;
    font-weight: 600;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: 48rem) {
    display: none;
  }
`;

export const Hero = styled.section`
  min-height: calc(100vh - 5rem);
  padding: ${({ theme }) => theme.spacing.section} 0;

  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(20rem, 0.9fr);
  align-items: center;
  gap: ${({ theme }) => theme.spacing.section};

  @media (max-width: 56rem) {
    grid-template-columns: 1fr;
    padding: ${({ theme }) => theme.spacing.xxl} 0;
  }
`;

export const HeroContent = styled.div`
  max-width: 39rem;

  > p {
    max-width: 35rem;
    margin-top: ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 1.125rem;
  }
`;

export const Eyebrow = styled.span`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const HeroTitle = styled.h1`
  font-size: clamp(3.5rem, 8vw, 6.5rem);
  line-height: 0.88;
  letter-spacing: -0.06em;

  span {
    color: ${({ theme }) => theme.colors.beige};
  }
`;

export const Subtitle = styled.h2`
  margin-top: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.25rem;
`;

export const Actions = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const PrimaryButton = styled(Link)`
  min-height: 3rem;
  padding: 0 ${({ theme }) => theme.spacing.md};

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};

  border-radius: ${({ theme }) => theme.radius.sm};
  background: linear-gradient(
    120deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.primaryStrong}
  );
  color: #04101e;
  font-weight: 700;

  transition:
    transform 180ms ease,
    box-shadow 180ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0.75rem 2rem rgba(52, 159, 255, 0.2);
  }
`;

export const OutlineButton = styled.a`
  min-height: 3rem;
  padding: 0 ${({ theme }) => theme.spacing.md};

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};

  color: ${({ theme }) => theme.colors.text};
  font-size: 0.8rem;
  font-weight: 700;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SkillList = styled.div`
  margin-top: ${({ theme }) => theme.spacing.sm};
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const SkillTitle = styled.h4`
  margin-top: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const SkillTag = styled.span`
  background-color: ${({ theme }) => theme.colors.pillBgColor};
  padding: 0.35rem 0.7rem;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.pill};

  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.75rem;
`;

export const HeroImageWrapper = styled.div`
  position: relative;

  > span {
    position: absolute;
    right: -1rem;
    bottom: 2rem;

    padding: ${({ theme }) => theme.spacing.md}
      ${({ theme }) => theme.spacing.lg};

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.md};
    background: ${({ theme }) => theme.colors.dark};
    backdrop-filter: blur(1rem);

    color: ${({ theme }) => theme.colors.beige};
    font-size: 0.875rem;
  }
`;

export const HeroImage = styled.div`
  position: relative;
  min-height: 36rem;
  overflow: hidden;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};

  img {
    object-fit: cover;
  }

  @media (max-width: 56rem) {
    min-height: 25rem;
  }
`;

export const About = styled.section`
  padding: ${({ theme }) => theme.spacing.xl};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: rgba(12, 25, 42, 0.7);
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 56rem) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
  }
`;

export const AboutItem = styled.article`
  padding-left: ${({ theme }) => theme.spacing.sm};
  border-left: 1px solid ${({ theme }) => theme.colors.border};

  strong {
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    margin-top: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 0.875rem;
  }
`;

export const AboutImage = styled(Image)`
  width: 100%;
  height: 12rem;

  margin-top: ${({ theme }) => theme.spacing.xl};

  border-radius: ${({ theme }) => theme.radius.md};

  object-fit: cover;
`;

export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.section} 0;
`;

export const SectionHeader = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.lg};

  > a {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const SectionTitle = styled.h2`
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  line-height: 1.1;

  span {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 48rem) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.article`
  overflow: hidden;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.surface};

  transition:
    transform 180ms ease,
    border-color 180ms ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ProjectImage = styled.div`
  position: relative;
  min-height: 16rem;

  img {
    object-fit: cover;
    object-position: center 40%;
  }
`;

export const ProjectContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};

  h3 {
    font-size: 1.25rem;
  }

  p {
    margin-top: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.textMuted};
  }

  ${SkillList} {
    margin-top: ${({ theme }) => theme.spacing.lg};
  }
`;

export const Footer = styled.footer`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing.xl};

    @media (max-width: 40rem) {
      align-items: flex-start;
      flex-direction: column;
    }
  }

  p {
    margin-top: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;