"use client";

import { useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { useTransition } from 'react';

import { usePathname, useRouter } from '@/i18n/navigation';

import { LanguageButton, LanguageOption, LanguageOptions, LanguageSwitcherRoot } from './LanguageSwitcher.styled';

import type { AppLocale } from "@/i18n/routing";

const LANGUAGE_OPTIONS: Array<{
  locale: AppLocale;
  label: string;
  shortLabel: string;
}> = [
  {
    locale: "en",
    label: "English",
    shortLabel: "EN",
  },
  {
    locale: "es",
    label: "Español",
    shortLabel: "ES",
  },
];

export function LanguageSwitcher() {
  const locale = useLocale() as AppLocale;
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isPending, startTransition] = useTransition();

  const changeLanguage = (nextLocale: AppLocale) => {
    if (nextLocale === locale || isPending) return;

    const queryString = searchParams.toString();

    const destination = queryString ? `${pathname}?${queryString}` : pathname;

    startTransition(() => {
      router.replace(destination, {
        locale: nextLocale,
        scroll: false,
      });
    });
  };

  return (
    <LanguageSwitcherRoot aria-label="Seleccionar idioma" aria-busy={isPending}>
      <LanguageOptions>
        {LANGUAGE_OPTIONS.map((option) => {
          const isActive = option.locale === locale;

          return (
            <LanguageOption key={option.locale}>
              <LanguageButton
                type="button"
                $active={isActive}
                disabled={isPending}
                aria-current={isActive ? "true" : undefined}
                aria-label={`Cambiar idioma a ${option.label}`}
                onClick={() => changeLanguage(option.locale)}
              >
                {option.shortLabel}
              </LanguageButton>
            </LanguageOption>
          );
        })}
      </LanguageOptions>
    </LanguageSwitcherRoot>
  );
}
