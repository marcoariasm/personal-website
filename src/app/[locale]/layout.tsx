import type { Metadata } from "next";

import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { GTM } from '@/components/analytics/GoogleTagManager';
import { ThemeRegistry } from '@/design-system/ThemeRegistry';
import { routing } from '@/i18n/routing';

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}>;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export async function generateMetadata({
  params,
}: Pick<LocaleLayoutProps, "params">): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({
    locale,
    namespace: "Metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
    icons: {
      icon: [
        {
          url: "/favicon.ico",
          media: "(prefers-color-scheme: light)",
        },
        {
          url: "/favicon2.ico",
          media: "(prefers-color-scheme: dark)",
        },
      ],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeRegistry>{children}</ThemeRegistry>
        </NextIntlClientProvider>
        <GTM />
      </body>
    </html>
  );
}
