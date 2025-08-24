import { FC, memo, useContext, useMemo } from "react";
import { MarketContext } from "../../../contexts/market.provider";
import { Image, StyleSheet } from "react-native";
import Dropdown from "../../utils/Dropdown";
import { SwitchItem } from "../../utils/Switch";
import { TranslationContext } from "../../../contexts/translation.provider";
import { getTranslationStringViaId } from "../../../types/translation";

interface CryptoDropdownProps {
  selectedId: string;
  selectNewId: (id: string) => void;
}

const CryptoDropdown: FC<CryptoDropdownProps> = memo(({
  selectedId,
  selectNewId,
}) => {
  const { translation } = useContext(TranslationContext);
  const { market } = useContext(MarketContext);
  
  const styles = useMemo(() => StyleSheet.create({
    image: {
      height: 35,
      width: 35,
      borderRadius: 5,
      marginLeft: 10,
      marginRight: 10,
    },
  }), []);

  const items: SwitchItem<string>[] = useMemo(() => {
    return market.map(m => ({
      value: m.id,
      label: m.name,
      icon: () => (
        <Image
          style={styles.image}
          src={m.image}
        />
      )
    }));
  }, [market]);

  return (
    <Dropdown
      selectedItem={selectedId}
      changeSelectedItem={selectNewId}
      items={items}
      placeholder={getTranslationStringViaId('wallet.modal.inputs.crypto.placeholder', translation)}
    />
  )
});

export default CryptoDropdown;
