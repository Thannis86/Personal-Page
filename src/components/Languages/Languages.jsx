import { Box, Card, Heading, Separator } from "@radix-ui/themes";
import Image from "next/image";

import CSSLogo from "@/resources/Logos/css.svg";
import HTMLLogo from "@/resources/Logos/html.svg";
import JavascriptLogo from "@/resources/Logos/javascript.svg";
import PGLogo from "@/resources/Logos/postgresql.svg";
import ReactLogo from "@/resources/Logos/react.svg";

export default function Languages() {
  return (
    <Box id="CodesMainCards">
      <Card className="CodesCard">
        <Image
          className="CodeLogo"
          src={JavascriptLogo}
          alt="Javascript Language Logo"
        ></Image>
        <Separator my=".5" size="4" className="CodeSep" />
        <Heading className="CodeText">Javascript</Heading>
      </Card>
      <Card className="CodesCard">
        <Image
          className="CodeLogo"
          src={HTMLLogo}
          alt="HTML Language Logo"
        ></Image>
        <Separator my=".5" size="4" className="CodeSep" />
        <Heading className="CodeText">HTML</Heading>
      </Card>
      <Card className="CodesCard">
        <Image
          className="CodeLogo"
          src={CSSLogo}
          alt="CSS Language Logo"
        ></Image>
        <Separator my=".5" size="4" className="CodeSep" />
        <Heading className="CodeText">CSS</Heading>
      </Card>
      <Card className="CodesCard">
        <Image
          className="CodeLogo"
          src={PGLogo}
          alt="PG SQL Language Logo"
        ></Image>
        <Separator my=".5" size="4" className="CodeSep" />
        <Heading className="CodeText">PG SQL</Heading>
      </Card>
      <Card className="CodesCard">
        <Image
          className="CodeLogo"
          src={ReactLogo}
          alt="React Framework Logo"
        ></Image>
        <Separator my=".5" size="4" className="CodeSep" />
        <Heading className="CodeText">React</Heading>
      </Card>
      <Card className="CodesCard">
        <Image
          className="CodeLogo"
          src={ReactLogo}
          alt="React Framework Logo"
        ></Image>
        <Separator my=".5" size="4" className="CodeSep" />
        <Heading className="CodeText" size="5">
          React Native
        </Heading>
      </Card>
      <Card className="CodesCard">
        <Image
          className="CodeLogo"
          src={ReactLogo}
          alt="React Framework Logo"
        ></Image>
        <Separator my=".5" size="4" className="CodeSep" />
        <Heading className="CodeText">NextJS</Heading>
      </Card>
    </Box>
  );
}
