import React, { useState } from "react";
import { SvgStyled } from "./ColumnBar.styled";
import { useSpring, animated } from "react-spring";

const getPath = (x, y, width, height, round) =>
  `M ${x},${y + height} v ${
    round - height
  } q 0,-${round},${round},-${round} h ${
    width - round * 2
  } q ${round},0,${round},${round} v ${height - round} z`;

export default function ColumnBarStyled(props) {
  const { x, y, width, height, fill, outlineColor } = props;
  const fillColor = fill;

  const [active, setActive] = useState(false);
  const { x_time } = useSpring({
    config: { duration: 300 },
    x_time: active ? 1 : 0,
  });

  const multiplier = 1.1;
  const multiplierWidth = 1.2;

  let round = 6;

  if (round > height) {
    round = height;
  }

  return (
    <SvgStyled
      onMouseMove={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <animated.path
        d={x_time.to({
          range: [0, 1],
          output: [
            getPath(x, y, width, height, round),
            getPath(
              x - (width * (multiplierWidth - 1)) / 2,
              y - height * (multiplier - 1),
              width * multiplierWidth,
              height * multiplier,
              round
            ),
          ],
        })}
        stroke={outlineColor}
        strokeDasharray="30,20,15,10"
        strokeWidth="2"
        fill={fillColor}
      />
    </SvgStyled>
  );
}
