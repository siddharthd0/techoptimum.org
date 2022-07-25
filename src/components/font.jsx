import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Neue Machina';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./NeueMachina-Ultrabold.otf') format('opentype');
      }

      @font-face {
        font-family: 'Neue Machina';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('./NeueMachina-Regular.otf') format('opentype');
      }
      `}
  />
);

export default Fonts;
