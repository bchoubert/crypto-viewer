import CryptoDetails from "@/components/Details/CryptoDetails";
import ECrypto from "@/constants/cryptos.enum";
import { useLocalSearchParams } from "expo-router";
import { FC, memo, useMemo } from "react";

const CryptoPage: FC = memo(() => {
  const { id } = useLocalSearchParams();

  const cryptoId = useMemo(() => (id as string)?.toLowerCase() as ECrypto, [id]);

  return (
    <CryptoDetails id={cryptoId} />
  )
});

export default CryptoPage;
