"use client";

import styled, { css } from 'styled-components';

import { Link } from '@/i18n/navigation';

type CollagePosition = "portrait" | "workspace" | "travel" | "luna";

export const Page = styled.div`
  min-height: 100vh;

  background:
    radial-gradient(
      circle at 78% 12%,
      rgba(67, 200, 255, 0.13),
      transparent 28rem
    ),
    radial-gradient(
      circle at 15% 48%,
      rgba(255, 138, 36, 0.08),
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

export const Hero = styled.section`
  min-height: calc(100vh - 5rem);
  padding: 6rem 0;

  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(28rem, 0.9fr);
  align-items: center;
  gap: 5rem;

  @media (max-width: 62rem) {
    min-height: auto;
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

export const AboutContent = styled.div`
  max-width: 42rem;
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
  margin: 0;

  font-size: clamp(3rem, 7vw, 6rem);
  line-height: 0.98;
  letter-spacing: -0.055em;
`;

export const AccentText = styled.span`
  color: ${({ theme }) => theme.colors.beige};
`;

export const HeroDescription = styled.p`
  max-width: 40rem;
  margin-top: ${({ theme }) => theme.spacing.xl};

  color: ${({ theme }) => theme.colors.textMuted};

  font-size: 1.125rem;
  line-height: 1.75;
`;

export const HeroActions = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};

  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
`;

const linkStyles = css`
  min-height: 3rem;
  padding: 0 ${({ theme }) => theme.spacing.lg};

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: ${({ theme }) => theme.radius.sm};

  font-weight: 700;

  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background-color 180ms ease;
`;

export const PrimaryLink = styled(Link)`
  ${linkStyles}

  background: linear-gradient(
    120deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.primaryStrong}
  );

  color: ${({ theme }) => theme.colors.background};

  &:hover {
    transform: translateY(-0.125rem);
  }
`;

export const SecondaryLink = styled(Link)`
  ${linkStyles}

  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Collage = styled.div`
  position: relative;

  width: 100%;
  min-height: 38rem;

  @media (max-width: 40rem) {
    min-height: 31rem;
  }
`;

export const CollageImage = styled.figure<{
  $position: CollagePosition;
}>`
  position: absolute;
  overflow: hidden;

  margin: 0;

  border: 0.25rem solid rgba(247, 244, 235, 0.92);
  border-radius: ${({ theme }) => theme.radius.md};

  background: ${({ theme }) => theme.colors.surface};
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.32);

  transform-origin: center;

  img {
    object-fit: cover;
  }

  ${({ $position }) => {
    switch ($position) {
      case "portrait":
        return css`
          top: 2rem;
          left: 15%;

          width: 19rem;
          height: 25rem;

          z-index: 3;
          transform: rotate(-4deg);
        `;

      case "workspace":
        return css`
          top: 0;
          right: 0;

          width: 14rem;
          height: 11rem;

          z-index: 1;
          transform: rotate(5deg);
        `;

      case "travel":
        return css`
          right: 2%;
          bottom: 3rem;

          width: 15rem;
          height: 12rem;

          z-index: 4;
          transform: rotate(-3deg);
        `;

      case "luna":
        return css`
          left: 0;
          bottom: 1rem;

          width: 13rem;
          height: 15rem;

          z-index: 2;
          transform: rotate(7deg);
        `;
    }
  }}

  @media (max-width: 40rem) {
    ${({ $position }) =>
    $position === "portrait" &&
    css`
        left: 18%;
        width: 15rem;
        height: 20rem;
      `}

    ${({ $position }) =>
    $position === "workspace" &&
    css`
        width: 10rem;
        height: 8rem;
      `}

    ${({ $position }) =>
    $position === "travel" &&
    css`
        width: 11rem;
        height: 9rem;
      `}

    ${({ $position }) =>
    $position === "luna" &&
    css`
        width: 10rem;
        height: 12rem;
      `}
  }
`;

export const ImageCaption = styled.p`
  position: absolute;
  right: 1rem;
  bottom: 0;

  max-width: 17rem;
  margin: 0;

  color: ${({ theme }) => theme.colors.textMuted};

  font-size: 0.75rem;
  font-style: italic;
  text-align: right;
`;

export const StorySection = styled.section`
  padding: 7rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const SectionHeader = styled.header`
  max-width: 50rem;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

export const SectionTitle = styled.h2`
  margin: 0;

  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1.05;
  letter-spacing: -0.04em;
`;

export const SectionDescription = styled.p`
  max-width: 43rem;
  margin-top: ${({ theme }) => theme.spacing.lg};

  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(18rem, 0.8fr);
  gap: 5rem;

  @media (max-width: 50rem) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const StoryText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};

  color: ${({ theme }) => theme.colors.textMuted};

  font-size: 1.0625rem;
  line-height: 1.85;
`;

export const PersonalNote = styled.aside`
  align-self: start;

  padding: ${({ theme }) => theme.spacing.xl};

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};

  background: linear-gradient(
    145deg,
    rgba(67, 200, 255, 0.08),
    rgba(255, 138, 36, 0.06)
  );

  span {
    display: block;
    margin-top: ${({ theme }) => theme.spacing.lg};

    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 0.8125rem;
  }
`;

export const Quote = styled.blockquote`
  margin: 0;

  color: ${({ theme }) => theme.colors.beige};

  font-size: 1.5rem;
  line-height: 1.45;
  letter-spacing: -0.02em;
`;

export const Highlight = styled.section`
  padding: 7rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const HighlightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 48rem) {
    grid-template-columns: 1fr;
  }
`;

export const ValueCard = styled.article`
  padding: ${({ theme }) => theme.spacing.xl};

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};

  background: rgba(12, 25, 42, 0.7);

  span {
    color: ${({ theme }) => theme.colors.accent};
    font-size: 0.75rem;
    font-weight: 700;
  }

  h3 {
    margin-top: ${({ theme }) => theme.spacing.xl};
    font-size: 1.5rem;
  }

  p {
    margin-top: ${({ theme }) => theme.spacing.md};

    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.7;
  }
`;

export const DailySection = styled.section`
  padding: 7rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const DailyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 48rem) {
    grid-template-columns: 1fr;
  }
`;

export const DailyCard = styled.article`
  overflow: hidden;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};

  background: ${({ theme }) => theme.colors.surface};

  > div:first-child {
    position: relative;
    min-height: 17rem;
    overflow: hidden;

    img {
      object-fit: cover;
      transition: transform 400ms ease;
    }
  }

  &:hover img {
    transform: scale(1.035);
  }
`;

export const DailyText = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};

  h3 {
    font-size: 1.25rem;
  }

  p {
    margin-top: ${({ theme }) => theme.spacing.sm};

    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.65;
  }
`;