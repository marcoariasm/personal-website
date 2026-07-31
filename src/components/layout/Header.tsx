import Image from "next/image";
import Link from "next/link";

import {
  Container,
  Header as HeaderComponent,
  Nav,
  OutlineButton,
} from "@/app/page.styles";

export function Header() {
  return (
    <HeaderComponent>
      <Container>
        <Image
          src="/images/logo.png"
          alt="Logo de Marco Arias"
          width={120}
          height={26}
        />
        {/* <Logo href="/">
          <div>&lt;</div>
          ma
          <div>/&gt;</div>
        </Logo> */}

        <Nav aria-label="Navegación principal">
          <Link href="/">Inicio</Link>
          {/* <Link href="/about">Sobre mí</Link> */}
          <Link href="#about">Sobre mí</Link>
          {/* <Link href="/experience">Experiencia</Link> */}
          {/* <Link href="/projects">Proyectos</Link> */}
          <Link href="#experience">Experiencia</Link>
          <Link href="#contact">Contacto</Link>
        </Nav>

        <OutlineButton href="/doc/MarcoArias-CV-en.pdf" download>
          Descargar CV
        </OutlineButton>
      </Container>
    </HeaderComponent>
  );
}
