import type { Metadata } from "next";

import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import Head from 'next/head';
import { notFound } from 'next/navigation';

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
  };
}

// export const metadata: Metadata = {
//   title: "Marco Arias | Senior Software Engineer",
//   description: "Software, rstrategia y entrega de resultados.",
// };

// interface RootLayoutProps {
//   children: ReactNode;
// }

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
      <Head>
        <link
          href="favicon.ico"
          rel="icon"
          media="(prefers-color-scheme: light)"
        />
        <link
          href="favicon-2.ico"
          rel="icon"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeRegistry>{children}</ThemeRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
