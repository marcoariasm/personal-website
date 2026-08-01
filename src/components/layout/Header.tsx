import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

import { Container, Header as HeaderComponent, Nav, OutlineButton } from '@/app/[locale]/page.styles';
import { Link } from '@/i18n/navigation';

import { LanguageSwitcher } from '../language-switcher';
import { HContainer } from './Header.styled';

export async function Header() {
  const t = await getTranslations("Menu");
  const t_menu = await getTranslations("Menu.menuItems");

  const menuItems = [
    { label: t_menu("home.title"), href: t_menu("home.href") },
    { label: t_menu("about.title"), href: t_menu("about.href") },
    { label: t_menu("experience.title"), href: t_menu("experience.href") },
    { label: t_menu("contact.title"), href: t_menu("contact.href") },
  ];

  return (
    <HeaderComponent>
      <Container>
        <Image
          src="/images/logo.png"
          alt={t("altLogo")}
          width={105}
          height={23}
        />
        {/* <Logo href="/">
          <div>&lt;</div>
          ma
          <div>/&gt;</div>
        </Logo> */}

        <Nav aria-label={t("navAriaLabel")}>
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </Nav>

        <HContainer>
          <LanguageSwitcher />

          <OutlineButton href={t("downloadCVLink")} download>
            {t("downloadCV")}
          </OutlineButton>
        </HContainer>
      </Container>
    </HeaderComponent>
  );
}
