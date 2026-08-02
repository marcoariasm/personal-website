import styled from 'styled-components';

export const LanguageSwitcherRoot = styled.nav`
  display: inline-flex;
  align-items: center;
`;

export const LanguageOptions = styled.ul`
  display: inline-flex;
  align-items: center;
  gap: 0.125rem;
  margin: 0;
  padding: 0.125rem;
  list-style: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.surface};
`;

export const LanguageOption = styled.li`
  display: flex;
`;

export const LanguageButton = styled.button<{ $active: boolean }>`
  min-width: 2rem;
  min-height: 2rem;
  padding: 0.25rem 0.5rem;
  border: 0;
  border-radius: 999px;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.primary : "transparent"};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.primaryContrast : theme.colors.text};
  font: inherit;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: ${({ disabled }) => (disabled ? "wait" : "pointer")};
  transition:
    background-color 160ms ease,
    color 160ms ease;

  &:hover:not(:disabled) {
    background: ${({ $active, theme }) =>
    $active
      ? theme.colors.primary
      : theme.colors.surfaceSoft};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primaryMain};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.65;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;