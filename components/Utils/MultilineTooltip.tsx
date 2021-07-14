import React, {
  FC, memo, useContext, useMemo,
} from 'react';
import { Dimensions } from 'react-native';
import {
  Line, G, Text as TextSVG, TextAnchor, Rect, Circle,
} from 'react-native-svg';
import Colors from '../../assets/Colors';
import { NavigationContext } from '../../contexts/NavigationProvider';

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
  const {
    details,
  } = useContext(NavigationContext);

  const cryptoColor = useMemo(
    () => UtilsService.getColorFromCrypto(details.id),
    [details],
  );

  // Position tooltip calculation
  const showPosition: 'left' | 'right' = useMemo(
    () => ((x > ((Dimensions.get('window').width - 20) / 2)) ? 'left' : 'right'),
    [x],
  );

  const popinPosition: number = useMemo(
    () => x + (showPosition === 'right' ? 49 : -49),
    [showPosition, x],
  );

  const textPosition: number = useMemo(
    () => x + (showPosition === 'right' ? 55 : -55),
    [showPosition, x],
  );

  const textAnchor: TextAnchor = useMemo(
    () => ((showPosition === 'right') ? 'start' : 'end'),
    [showPosition],
  );

  // Render a tooltip for a specific X
  return (
    <G>
      <Rect
        x={(showPosition === 'left') ? x - 125 : x + 49}
        y={y - 49}
        width={76}
        height={36}
        rx={10}
        fill={cryptoColor || Colors.midGray}
      />
      <Circle cx={x} cy={y} r={30} fill="#CCCCCC55" />
      <Line
        x1={x + (showPosition === 'left' ? -26 : 26)}
        x2={popinPosition}
        y1={y - 15}
        y2={y - 30}
        stroke={Colors.black}
      />
      <TextSVG x={textPosition} y={y - 35} textAnchor={textAnchor} fill={Colors.white}>
        {`${UtilsService.printDate(datum.x, dateFormat)} ${UtilsService.printTime(datum.x)}`}
      </TextSVG>
      <TextSVG x={textPosition} y={y - 20} textAnchor={textAnchor} fill={Colors.white}>
        {`${quoteSymbol} ${datum.y}`}
      </TextSVG>
    </G>
  );
};

export default memo(MultilineTooltip);
