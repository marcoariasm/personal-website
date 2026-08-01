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
            width={120}
            height={26}
          />
          <p>{t("description")}</p>
        </div>

        <div>
          <strong>{t("contact")}</strong>
          {/* <AngularIcon width={36} height={36} /> */}
          <p>{t("email")}</p>
          {/* <p>Lima, Perú · Remoto</p> */}

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
            {/* <Link
              href="https://www.linkedin.com/in/marcoantonioam/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon width={20} height={20} />
            </Link>
            <Link
              href="https://www.github.com/marcoariasm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon width={20} height={20} />
            </Link>
            <Link
              href="https://www.youtube.com/@marcoariasm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon width={20} height={20} />
            </Link>
            <Link
              href="https://wa.me/51975993773?text=Hola%20Marco,%20me%20gustaría%20contactarte%20para%20hablar%20sobre%20una%20oportunidad."
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon width={20} height={20} />
            </Link> */}
          </SocialWrapper>
        </div>

        <PrimaryButton href="mailto:hola@marcoarias.com">
          {t("sendEmail")}
        </PrimaryButton>
      </Container>
    </FooterComponent>
  );
}
