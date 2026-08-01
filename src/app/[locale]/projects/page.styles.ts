"use client";

import styled from 'styled-components';

import { Link } from '@/i18n/navigation';

export const Page = styled.div`
  min-height: 100vh;

  background:
    radial-gradient(
      circle at 20% 10%,
      rgba(67, 200, 255, 0.12),
      transparent 26rem
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

export const PageHeader = styled.header`
  max-width: 57rem;
  padding: 7rem 0 3rem;
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

export const PageTitle = styled.h1`
  font-size: clamp(2.75rem, 7vw, 5.5rem);
  line-height: 0.98;
  letter-spacing: -0.055em;

  span {
    color: ${({ theme }) => theme.colors.beige};
  }
`;

export const Description = styled.p`
  max-width: 45rem;
  margin-top: ${({ theme }) => theme.spacing.lg};

  color: ${({ theme }) => theme.colors.textMuted};

  font-size: 1.0625rem;
  line-height: 1.7;
`;

export const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};

  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

export const CategoryButton = styled.button<{ $active?: boolean }>`
  min-height: 2.5rem;
  padding: 0 ${({ theme }) => theme.spacing.md};

  border: 1px solid
    ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.border};

  border-radius: ${({ theme }) => theme.radius.pill};

  background: ${({ $active, theme }) =>
    $active ? "rgba(67, 200, 255, 0.12)" : "transparent"};

  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.textMuted};

  cursor: pointer;

  transition:
    border-color 180ms ease,
    background-color 180ms ease,
    color 180ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ProjectGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};

  padding-bottom: 7rem;

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
    border-color 180ms ease,
    transform 180ms ease,
    box-shadow 180ms ease;

  &:hover {
    transform: translateY(-0.375rem);

    border-color: ${({ theme }) => theme.colors.primary};

    box-shadow: 0 1.5rem 3.5rem rgba(0, 0, 0, 0.2);
  }
`;

export const ProjectImage = styled.div`
  position: relative;
  min-height: 20rem;

  overflow: hidden;
  background: ${({ theme }) => theme.colors.backgroundSoft};

  img {
    object-fit: cover;

    transition: transform 400ms ease;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.025);
  }

  @media (max-width: 35rem) {
    min-height: 15rem;
  }
`;

export const ProjectContent = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
`;

export const ProjectMeta = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};

  margin-bottom: ${({ theme }) => theme.spacing.md};

  color: ${({ theme }) => theme.colors.primary};

  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  span:last-child {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const ProjectTitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2rem);
  line-height: 1.2;
`;

export const ProjectDescription = styled.p`
  margin-top: ${({ theme }) => theme.spacing.md};

  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.65;
`;

export const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};

  margin-top: ${({ theme }) => theme.spacing.lg};
`;

export const Skill = styled.span`
  padding: 0.35rem 0.7rem;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.pill};

  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.75rem;
`;

export const ProjectLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  margin-top: ${({ theme }) => theme.spacing.xl};

  color: ${({ theme }) => theme.colors.accent};
  font-weight: 700;

  span {
    transition: transform 180ms ease;
  }

  &:hover span {
    transform: translateX(0.25rem);
  }
`;