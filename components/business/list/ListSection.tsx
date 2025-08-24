import { FC, memo, useContext, useMemo } from "react";
import { ThemeContext } from "../../../contexts/theme.provider";
import { StyleSheet, Text } from "react-native";

interface ListSectionProps {
  title: string;
}

const ListSection: FC<ListSectionProps> = memo(({
  title,
}) => {
  const { theme } = useContext(ThemeContext);

  const styles = useMemo(() => StyleSheet.create({
    section: {
      backgroundColor: theme.colors.background,
      paddingLeft: 15,
      paddingTop: 2,
      paddingBottom: 2,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      color: theme.colors.text,
    }
  }), [theme]);
  
  return (
    <Text style={styles.section}>{title}</Text>
  );
});

export default ListSection;
