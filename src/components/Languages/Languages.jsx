import { Box, Card, Heading, Separator } from "@radix-ui/themes";
import Image from "next/image";

import "./Languages.css";

import LanguageJSON from "./Languages.json";

export default function Languages() {
  console.log(LanguageJSON);

  return (
    <Box id="CodesMainCards">
      {LanguageJSON.map((languages, index) => (
        <Card className="CodesCard" key={index}>
          <Image
            width={64}
            height={64}
            className="CodeLogo"
            src={languages.image}
            alt={languages.alt}
          ></Image>
          <Separator my=".5" size="4" className="CodeSep" />
          <Heading className="CodeText">{languages.name}</Heading>
        </Card>
      ))}
    </Box>
  );
}
