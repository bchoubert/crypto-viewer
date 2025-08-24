import { FC, memo, useContext, useMemo } from "react";
import { StyleProp, Text, TextStyle } from "react-native";
import { getTranslationStringViaId } from "../../types/translation";
import { TranslationContext } from "../../contexts/translation.provider";

interface TranslationTextProps {
  id: string;
  style?: StyleProp<TextStyle>;
}

const TranslationText: FC<TranslationTextProps> = memo(({
  id,
  style,
}) => {
  const { translation } = useContext(TranslationContext);

  const label = useMemo(() => {
    return getTranslationStringViaId(id, translation);
  }, [id, translation]);

  return (
    <Text style={style}>{label}</Text>
  );
});

export default TranslationText;
