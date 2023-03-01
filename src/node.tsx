import React from "react";
import path from "path";
import ReactPDF, { Font } from "@react-pdf/renderer";
import { ReviverProvider, ReviverLayout } from "@koeroesi86/react-reviver";
import { CV } from "@app-types";
import fs from "fs";
import { PageSizes } from "@koeroesi86/react-pdf-components";
import transformCv from "./theme/transformCv";
import exampleCV from "./example/cv";
import components from "./theme/components";
import getColourScheme from "./theme/utils/getColourScheme";
import { SchemeNames } from "./theme/types";

(async () => {
  try {
    console.log("started render");

    let cv: CV = exampleCV;

    const jsPath = path.join(process.cwd(), './cv.js').replace(/\\/g, '/');
    const jsonPath = path.join(process.cwd(), './cv.json').replace(/\\/g, '/');
    
    if (fs.existsSync(jsonPath)) {
      console.log('found json cv');
      cv = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
    } else if (fs.existsSync(jsPath)) {
      console.log('found js cv', jsPath);
      // eslint-disable-next-line global-require,import/no-dynamic-require,no-eval
      cv = eval(`require('${jsPath}');`);
    } else {
      console.warn('no custom cv found');
    }

    const pageSize: PageSizes = "A4";
    const colours = getColourScheme(SchemeNames.lightblue);

    Font.register({
      family: "Open-Sans",
      fonts: [
        {
          src: path.resolve(
            process.cwd(),
            "src/fonts/Open Sans/OpenSans-Light.ttf"
          ),
          fontWeight: 100,
        },
        {
          src: path.resolve(
            process.cwd(),
            "src/fonts/Open Sans/OpenSans-Regular.ttf"
          ),
          fontWeight: 400,
        },
        {
          src: path.resolve(
            process.cwd(),
            "src/fonts/Open Sans/OpenSans-SemiBold.ttf"
          ),
          fontWeight: 600,
        },
        {
          src: path.resolve(
            process.cwd(),
            "src/fonts/Open Sans/OpenSans-Bold.ttf"
          ),
          fontWeight: 700,
        },
        {
          src: path.resolve(
            process.cwd(),
            "src/fonts/Open Sans/OpenSans-ExtraBold.ttf"
          ),
          fontWeight: 900,
        },
      ],
    });

    await ReactPDF.render(
      <ReviverProvider components={components}>
        <ReviverLayout data={transformCv(cv, colours, pageSize)}/>
      </ReviverProvider>,
      path.resolve(process.cwd(), `./dist/${cv.name.replace(/[ ]/, ".")}.pdf`),
    );

    console.log("render completed.");
    process.exit(0);
  } catch (e) {
    console.error("render failed", e);
    process.exit(1);
  }
})();
