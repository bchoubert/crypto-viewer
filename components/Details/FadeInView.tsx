import { FC, ReactNode, memo, useEffect, useMemo, useRef } from "react";
import { Animated, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

interface FadeInViewProps {
  style: object;
  children?: ReactNode;
}

const FadeInView: FC<FadeInViewProps> = memo(({
  style,
  children,
}) => {
  const translateAnim = useRef(new Animated.Value(-0.4 * windowWidth)).current;

  useEffect(() => {
    Animated.timing(
      translateAnim,
      {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      },
    ).start();
  }, [translateAnim]);

  const viewStyles = useMemo(
    () => {
      const animatedStyle = { transform: [{ translateY: translateAnim }] };
      return ({
        ...style,
        ...animatedStyle,
      });
    },
    [style],
  );

  return (
    <Animated.View style={viewStyles}>
      {children}
    </Animated.View>
  );
});

export default FadeInView;