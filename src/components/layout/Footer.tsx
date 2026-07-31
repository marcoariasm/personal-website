import Image from 'next/image';
import Link from 'next/link';

import { Container, Footer as FooterComponent, PrimaryButton } from '@/app/page.styles';

import { GitHubIcon } from '../../../public/icons/github';
import { LinkedInIcon } from '../../../public/icons/linkedin';
import { WhatsAppIcon } from '../../../public/icons/whatsapp';
import { YouTubeIcon } from '../../../public/icons/youtube';
import { SocialWrapper } from './footer.styles';

export function Footer() {
  return (
    <FooterComponent id="contact">
      <Container>
        <div>
          <Image
            src="/images/logo.png"
            alt="Logo de Marco Arias"
            width={120}
            height={26}
          />
          <p>Software, estrategia y entrega de resultados.</p>
        </div>

        <div>
          <strong>Contacto</strong>
          {/* <AngularIcon width={36} height={36} /> */}
          <p>hola@marcoarias.com</p>
          {/* <p>Lima, Perú · Remoto</p> */}

          <SocialWrapper>
            <Link
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
            </Link>
          </SocialWrapper>
        </div>

        <PrimaryButton href="mailto:hola@marcoarias.com">
          Enviar correo
        </PrimaryButton>
      </Container>
    </FooterComponent>
  );
}
