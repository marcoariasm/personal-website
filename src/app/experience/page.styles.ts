"use client";

import styled from 'styled-components';

export const Page = styled.div`
  min-height: 100vh;

  background:
    radial-gradient(
      circle at 80% 15%,
      rgba(51, 102, 255, 0.15),
      transparent 28rem
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

export const Hero = styled.section`
  max-width: 54rem;
  padding: 7rem 0 4rem;
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
  margin: 0;

  font-size: clamp(2.75rem, 7vw, 5.5rem);
  line-height: 0.98;
  letter-spacing: -0.055em;

  span {
    color: ${({ theme }) => theme.colors.beige};
  }
`;

export const Description = styled.p`
  max-width: 46rem;
  margin-top: ${({ theme }) => theme.spacing.lg};

  color: ${({ theme }) => theme.colors.textMuted};

  font-size: 1.0625rem;
  line-height: 1.7;
`;

export const SummaryGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.md};

  margin-bottom: 5rem;

  @media (max-width: 48rem) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 30rem) {
    grid-template-columns: 1fr;
  }
`;

export const SummaryCard = styled.article`
  padding: ${({ theme }) => theme.spacing.lg};

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};

  background: rgba(12, 25, 42, 0.75);
  backdrop-filter: blur(0.75rem);

  span {
    display: block;
    margin-top: ${({ theme }) => theme.spacing.xs};

    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 0.8125rem;
  }
`;

export const SummaryValue = styled.strong`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
`;

export const Content = styled.section`
  padding-bottom: 7rem;
`;

export const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const ExperienceCard = styled.article`
  padding: ${({ theme }) => theme.spacing.xl};

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};

  background: linear-gradient(
    140deg,
    rgba(12, 25, 42, 0.92),
    rgba(7, 18, 32, 0.82)
  );

  transition:
    border-color 180ms ease,
    transform 180ms ease;

  &:hover {
    transform: translateY(-0.25rem);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ExperienceHeader = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 40rem) {
    flex-direction: column;
  }
`;

export const Company = styled.span`
  color: ${({ theme }) => theme.colors.accent};

  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const ExperienceRole = styled.h2`
  margin-top: ${({ theme }) => theme.spacing.xs};

  font-size: clamp(1.5rem, 3vw, 2.25rem);
  line-height: 1.15;
`;

export const ExperienceMeta = styled.div`
  flex-shrink: 0;
  text-align: right;

  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.8125rem;

  span {
    display: block;
    margin-top: ${({ theme }) => theme.spacing.xs};
  }

  @media (max-width: 40rem) {
    text-align: left;
  }
`;

export const ExperiencePeriod = styled.strong`
  color: ${({ theme }) => theme.colors.beige};
`;

export const AchievementList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.md};

  margin-top: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 42rem) {
    grid-template-columns: 1fr;
  }
`;

export const Achievement = styled.li`
  position: relative;

  padding-left: ${({ theme }) => theme.spacing.lg};

  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;

  &::before {
    content: "";

    position: absolute;
    top: 0.6rem;
    left: 0;

    width: 0.5rem;
    height: 0.5rem;

    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};

  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export const Skill = styled.span`
  padding: 0.35rem 0.7rem;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.pill};

  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.75rem;
`;