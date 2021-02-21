import React, { FC, ReactNode, useMemo } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Colors from '../../assets/Colors';

export enum TileMode {
  CLEAR = 'CLEAR',
  LIGHT = 'LIGHT',
  FULL = 'FULL',
};

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    margin: 10,
    height: 90,
    backgroundColor: Colors.lightGray,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    padding: 10
  },
  tile_number: {
    flex: 1,
    fontSize: 28
  },
  tile_long_number: {
    flex: 1,
    fontSize: 25
  },
  tile_label: {
    fontSize: 14
  }
});

const stylesForTileMode = {
  [TileMode.CLEAR]: styles.tile,
  [TileMode.LIGHT]: styles.tile,
  [TileMode.FULL]: styles.tile,
}

interface TileProps {
  mode: TileMode,
  label: string | ReactNode;
  number: string | ReactNode;
  color: string;
  isLongNumber?: boolean;
}

const Tile: FC<TileProps> = ({
  mode,
  label,
  number,
  color,
  isLongNumber,
}) => {

  const backgroundColor = useMemo(
    () => {
      switch(mode) {
        case TileMode.CLEAR:
          return Colors.white;
        case TileMode.LIGHT:
          return `${color}22`;
        case TileMode.FULL:
          return color;
      }
    },
    [color, mode],
  );

  const textColor = useMemo(
    () => {
      switch(mode) {
        case TileMode.CLEAR:
          return Colors.darkGray;
        case TileMode.LIGHT:
          return Colors.darkGray;
        case TileMode.FULL:
          return Colors.white;
      }
    },
    [color, mode],
  );

  return (
    <View style={{ ...stylesForTileMode[mode], backgroundColor }}>
      <Text style={{
        ...(isLongNumber ? styles.tile_long_number : styles.tile_number),
        color: textColor,
      }}>{number}</Text>
      <Text style={{ ...styles.tile_label, color: textColor }}>{label}</Text>
    </View>
  );
}

export default Tile;
