import React, { FC, ReactNode, useMemo } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Colors from '../../assets/Colors';

export enum TileMode {
  CLEAR = 'CLEAR',
  LIGHT = 'LIGHT',
  FULL = 'FULL',
  TALL = 'TALL',
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
  tall: {
    height: 180,
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
  [TileMode.TALL]: { ...styles.tile, ...styles.tall },
}

interface TileProps {
  mode: TileMode,
  label: string | ReactNode;
  number: string | ReactNode;
  color: string;
  isLongNumber?: boolean;
  style?: object,
  onPress?: () => void;
}

const Tile: FC<TileProps> = ({
  mode,
  label,
  number,
  color,
  isLongNumber,
  style,
  onPress,
}) => {

  const backgroundColor = useMemo(
    () => {
      switch(mode) {
        case TileMode.CLEAR:
          return Colors.white;
        case TileMode.LIGHT:
          return `${color}22`;
        case TileMode.FULL:
        case TileMode.TALL:
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
        case TileMode.TALL:
          return Colors.white;
      }
    },
    [color, mode],
  );

  return (
    <TouchableOpacity style={{ ...stylesForTileMode[mode], backgroundColor, ...(style || {}) }} onPress={onPress}>
      <Text style={{
        ...(isLongNumber ? styles.tile_long_number : styles.tile_number),
        color: textColor,
      }}>
        {number}
      </Text>
      {(typeof label === 'string') ? (
        <Text style={{ ...styles.tile_label, color: textColor }}>
          {label}
        </Text>
      ) : (
        <View>{label}</View>
      )}
    </TouchableOpacity>
  );
}

export default Tile;
