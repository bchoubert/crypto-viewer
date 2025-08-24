import { FC, memo, useMemo } from "react";
import { Dimensions, StyleSheet, Text, TextStyle } from "react-native";

export interface TextScaleInterval {
  chars: number;
  size: number;
}

interface TextScaleProps {
  content: string;
  intervals: TextScaleInterval[];
  style?: TextStyle;
}

const TextScale: FC<TextScaleProps> = memo(({
  content,
  intervals,
  style,
}) => {
  const definitiveFontSize = useMemo(() => {
    const contentLength = content.length;

    const sortedIntervals = intervals.sort((i1, i2) => i1.size - i2.size);
    let size = sortedIntervals[0].size;

    sortedIntervals.forEach(interval => {
      if (contentLength <= interval.chars) {
        size = interval.size;
      }
    });

    return size;
  }, [content, intervals]);  

  const styles = useMemo(() => StyleSheet.create({
    content: {
      flex: 1,
      display: 'flex',
      maxWidth: 0.35 * Dimensions.get('window').width,
      flexWrap: 'wrap',
      fontSize: definitiveFontSize,
      
    }
  }), [definitiveFontSize]);

  return (
    <Text style={[style, styles.content]}>{content}</Text>
  );
});

export default TextScale;
