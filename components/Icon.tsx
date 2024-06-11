import { FC } from 'react';
import { SvgProps } from 'react-native-svg';

import IconArrowDown from '../assets/icons/arrow-alt-down-solid.svg';
import IconArrowUp from '../assets/icons/arrow-alt-up-solid.svg';
import IconBellOn from '../assets/icons/bell-on-solid.svg';
import IconBell from '../assets/icons/bell-solid.svg';
import IconChevronLeft from '../assets/icons/chevron-left-solid.svg';
import IconChevronRight from '../assets/icons/chevron-right-solid.svg';
import IconCog from '../assets/icons/cog-solid.svg';
import IconCoin from '../assets/icons/coin-solid.svg';
import IconCoins from '../assets/icons/coins-solid.svg';
import IconDonate from '../assets/icons/donate-solid.svg';
import IconExternalLink from '../assets/icons/external-link-alt-solid.svg';
import IconExternalLinkSquare from '../assets/icons/external-link-square-alt-solid.svg';
import IconHome from '../assets/icons/home-solid.svg';
import IconLayerGroup from '../assets/icons/layer-group-solid.svg';
import IconMinus from '../assets/icons/minus-solid.svg';
import IconPlus from '../assets/icons/plus-solid.svg';
import IconStar from '../assets/icons/star-regular.svg';
import IconStarFull from '../assets/icons/star-solid.svg';
import IconList from '../assets/icons/th-list-solid.svg';
import IconUser from '../assets/icons/user-solid.svg';
import IconWallet from '../assets/icons/wallet-solid.svg';
import { Text, View } from 'react-native';
import Colors, { EColor } from '@/assets/Colors';

export enum EIcon {
  arrowDown = 'arrowDown',
  arrowUp = 'arrowUp',
  bellOn = 'bellOn',
  bell = 'bell',
  chevronLeft = 'chevronLeft',
  chevronRight = 'chevronRight',
  cog = 'cog',
  coin = 'coin',
  coins = 'coins',
  donate = 'donate',
  externalLink = 'externalLink',
  externalLinkSquare = 'externalLinkSquare',
  home = 'home',
  layerGroup = 'layerGroup',
  minus = 'minus',
  plus = 'plus',
  star = 'star',
  starFull = 'starFull',
  list = 'list',
  user = 'user',
  wallet = 'wallet',
}

const icons: Record<EIcon, FC<SvgProps>> = {
  [EIcon.arrowDown]: IconArrowDown,
  [EIcon.arrowUp]: IconArrowUp,
  [EIcon.bellOn]: IconBellOn,
  [EIcon.bell]: IconBell,
  [EIcon.chevronLeft]: IconChevronLeft,
  [EIcon.chevronRight]: IconChevronRight,
  [EIcon.cog]: IconCog,
  [EIcon.coin]: IconCoin,
  [EIcon.coins]: IconCoins,
  [EIcon.donate]: IconDonate,
  [EIcon.externalLink]: IconExternalLink,
  [EIcon.externalLinkSquare]: IconExternalLinkSquare,
  [EIcon.home]: IconHome,
  [EIcon.layerGroup]: IconLayerGroup,
  [EIcon.minus]: IconMinus,
  [EIcon.plus]: IconPlus,
  [EIcon.star]: IconStar,
  [EIcon.starFull]: IconStarFull,
  [EIcon.list]: IconList,
  [EIcon.user]: IconUser,
  [EIcon.wallet]: IconWallet,
};

interface IconProps {
  name: EIcon,
  color: EColor,
  width?: number,
}

const Icon: FC<IconProps> = ({
  name,
  color,
  width,
}) => {
  const SvgIcon = icons[name];

  if (!SvgIcon) {
    return <View><Text>ICON NOT FOUND: {name}</Text></View>
  }

  return (
    <SvgIcon width={width || 25} height={width || 25} color={color} />
  )
};


export default Icon;
