import NetworkService from "@/services/network.service";
import { FC, memo, useCallback, useEffect, useState } from "react";
import { SectionList, StyleSheet, Text, ToastAndroid } from "react-native";
import CryptoListItem from "./CryptoListItem";
import { ICrypto } from "@/types/crypto.types";
import CryptoListSection from "./CryptoListSection";

const styles = StyleSheet.create({
  container: {},
  sectionHeader: {},
})

const CryptoList: FC = memo(() => {
  const [isLoading, setLoading] = useState(true);

  const [sections, setSections] = useState<any>([]);

  const fetchCryptos = useCallback(async () => {
    setLoading(true);

    const fetchedCurrencies = await NetworkService.fetchCryptos()
      .catch((error) => ToastAndroid.show(error, ToastAndroid.BOTTOM));

    if (!fetchedCurrencies) {
      return;
    }

    const fetchedCryptos = fetchedCurrencies.filter(c => c?.details?.type === 'crypto');

    setSections([
      {
        title: 'TEST',
        data: fetchedCryptos,
      },
      {
        title: '2',
        data: [],
      }
    ]);
    setLoading(false);
  }, [setLoading]);

  const handleRenderItem = useCallback((props: { item: ICrypto }) => <CryptoListItem {...props} />, []);
  const handleRenderSectionHeader = useCallback((props: { section: { title: string } }) => <CryptoListSection title={props.section.title} />, []);

  useEffect(() => {
    fetchCryptos();
  }, []);
  
  return (
    <SectionList
      onRefresh={fetchCryptos}
      refreshing={isLoading}

      sections={sections}
      renderItem={handleRenderItem}
      renderSectionHeader={handleRenderSectionHeader}
      stickySectionHeadersEnabled
    />
  );
});

export default CryptoList;