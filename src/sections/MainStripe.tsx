import React from "react";
import styled from "styled-components";

import colors from "../styles/colors";

interface StripeSvgProps {
  index: number;
}

interface StripeProps {
  color: string;
  index: number;
}

/**
 * Contains all of the main stripes
 */
const StripesContainer = styled.div`
  position: relative;
  height: calc(15vw + 52px);
  width: 100%;
  margin-top: -5.5vw;
  margin-bottom: 1em;
  z-index: 0;
`;

/**
 * Sets clipping path so stripes can overlap
 */
const ClippingPath = styled.div`
  position: relative;
`;

/**
 * Generates an svg with dynamic alignment
 */
const StripeSvg = styled.svg(
  (props: StripeSvgProps) => `
  position: absolute;
  top: ${props.index * 13}px;
  width: 100%;
  height: 15vw;
  z-index: -${props.index};
`
);

/**
 * Generates stripes for MainStripe.
 * @param: props. First color is used for background above stripes
 */
const makeStripe: React.FC<StripeProps> = ({ color, index }) => (
  <StripeSvg
    index={index}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 75 100 125"
    preserveAspectRatio="none"
    key={index}
  >
    <polygon fill={color} points="0,0 0,200 100,110 100,0" />
  </StripeSvg>
);

const MainStripe: React.FC = () => (
  <StripesContainer>
    <ClippingPath>
      {[colors.blue, colors.white, colors.yellow, colors.red, colors.blue].map(
        (color: string, index: number) => makeStripe({ color, index })
      )}
    </ClippingPath>
  </StripesContainer>
);

export default MainStripe;
