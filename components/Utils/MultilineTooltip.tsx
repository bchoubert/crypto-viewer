import React, { Component, FC, memo, useMemo } from 'react';
import { Dimensions } from 'react-native';
import { Line, G, Text as TextSVG, TextAnchor, Rect, Circle } from 'react-native-svg';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import UtilsService from '../../services/Utils.service';

interface MultilineTooltipProps {
  x?: number;
  y?: number;
  quoteSymbol: string;
  dateFormat: string;
  datum?: { x: string, y: string };
}

const MultilineTooltip: FC<MultilineTooltipProps> = ({
  x,
  y,
  quoteSymbol,
  dateFormat,
  datum,
}) => {

  // Position tooltip calculation
  const showPosition: 'left' | 'right' = useMemo(
    () => (x > ((Dimensions.get('window').width - 20) / 2)) ? 'left' : 'right',
    [x],
  );

  const popinPosition: number = useMemo(
    () => x + (showPosition === 'right' ? 50 : -50),
    [showPosition, x],
  );

  const textPosition: number = useMemo(
    () => x + (showPosition === 'right' ? 55 : -55),
    [showPosition, x],
  );

  const textAnchor: TextAnchor = useMemo(
    () => (showPosition === 'right') ? 'start' : 'end',
    [showPosition],
  );

  // Render a tooltip for a specific X
  return (
    <G>
      <Rect
        x={(showPosition === 'left') ? x - 124 : x + 50}
        y={y - 44}
        width={74}
        height={36}
        rx={10}
        fill={Colors.white}
        stroke="#000000"></Rect>
      <Circle cx={x} cy={y} r={10} stroke="#000000" />
      <Line
        x1={x + (showPosition === 'left' ? -8 : 8)}
        x2={popinPosition}
        y1={y - 5}
        y2={y - 30}
        stroke="#000000"
      />
      <TextSVG x={textPosition} y={y - 30} textAnchor={textAnchor} fill="#000000">
        {`${UtilsService.printDate(datum.x, dateFormat)} ${UtilsService.printTime(datum.x)}`}
      </TextSVG>
      <TextSVG x={textPosition} y={y - 15} textAnchor={textAnchor} fill="#000000">
        {`${quoteSymbol} ${datum.y}`}
      </TextSVG>
    </G>
  );
}

export default memo(MultilineTooltip);
