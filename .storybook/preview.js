
//import '../src/css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/scss/styles.scss'
import {
  addDecorator,
  addParameters,
} from "@storybook/react";
import { withRootAttribute } from "storybook-addon-root-attribute";

// global
addDecorator(withRootAttribute);
addParameters({
  rootAttribute: {
    root: 'html',
    attribute: "class",
    defaultState: {
      name: "Shifter",
      value: "shifter"
    },
    states: [
      {
        name: "AMIMOTO",
        value: "amimoto"
      },
      {
        name: "Default",
        value: null
      }
    ]
  }
});

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};
