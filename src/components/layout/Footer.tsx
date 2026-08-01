import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

import { Container, Footer as FooterComponent, PrimaryButton } from '@/app/[locale]/page.styles';
import { Link } from '@/i18n/navigation';

import { FOOTER_CONFIG } from './Footer.config';
import { SocialWrapper } from './Footer.styled';

export async function Footer() {
  const t = await getTranslations("HomePage.footer");
  const t_social = await getTranslations("HomePage.footer.socialLinks");

  const socialItems = FOOTER_CONFIG.map((socialItem) => ({
    href: t_social(`${socialItem.id}.href`),
    icon: socialItem.icon as unknown as React.ComponentType<
      React.SVGProps<SVGSVGElement>
    >,
  }));

  return (
    <FooterComponent id="contact">
      <Container>
        <div>
          <Image
            src="/images/logo.png"
            alt={t("altLogo")}
            width={105}
            height={23}
          />
          <p>Marco Arias</p>
          <p>{t("description")}</p>
        </div>

        <div>
          <strong>{t("contact")}</strong>
          <p>{t("location")}</p>
          {/* <p>{t("email")}</p> */}

          <SocialWrapper>
            {socialItems.map((socialItem, index) => (
              <Link
                key={index}
                href={socialItem.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <socialItem.icon width={20} height={20} />
              </Link>
            ))}
          </SocialWrapper>
        </div>

        <PrimaryButton href="mailto:hola@marcoarias.com">
          {t("sendEmail")}
        </PrimaryButton>
      </Container>
    </FooterComponent>
  );
}
