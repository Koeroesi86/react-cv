import React from "react";
import path from "path";
import ReactPDF, { Font } from "@react-pdf/renderer";
import { ReviverProvider, ReviverLayout } from "@koeroesi86/react-reviver";
import {
  // CV,
  PageSizes,
} from "@app-types";
// import fs from "fs";
import transformCv from "./theme/transformCv";
// import exampleCV from "./example/cv";
import components from "./theme/components";
import getColourScheme from "./theme/utils/getColourScheme";
import { SchemeNames } from "./theme/types";
import cv from "../cv";

(async () => {
  try {
    console.log("started render");

    // TODO: fix
    // const relativeCwd = path.resolve(__dirname, process.cwd()).replace(/\\/g, "/");
    // let cv: CV = exampleCV;
    //
    // if (fs.existsSync(`${process.cwd()}/cv.json`)) {
    //   cv = JSON.parse(fs.readFileSync(`${relativeCwd}/cv.json`, "utf8"));
    // } else if (fs.existsSync(`${process.cwd()}/cv.js`)) {
    //   // eslint-disable-next-line global-require,import/no-dynamic-require
    //   cv = require(path.join(process.cwd(), './cv.js'));
    // }

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
