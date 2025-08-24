import { Plus } from "lucide-react-native";
import { FC, memo, useContext, useMemo } from "react";
import { Pressable, StyleSheet } from "react-native";
import { ThemeContext } from "../../../contexts/theme.provider";

interface BigButtonProps {
  onButtonClick: () => void;
}

const BigButton: FC<BigButtonProps> = memo(({
  onButtonClick,
}) => {
  const { theme } = useContext(ThemeContext);

  const styles = useMemo(() => StyleSheet.create({
    container: {
      height: 50,
      width: 50,
      borderRadius: 25,
      backgroundColor: theme.colors.action,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 15,
      right: 15,
    },
    icon: {
      color: theme.colors.actionText,
      fontSize: 20,
      opacity: 1,
    },
  }), []);

  return (
    <Pressable onPress={onButtonClick} style={styles.container}>
      <Plus height={40} width={40} style={styles.icon} />
    </Pressable>
  );
});

export default BigButton;
