import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {IOption} from '../../interface';
import styles from './style';
import Icon from '../../../Icon';
import colors from '../../../../constants/theme/color';

export default function OptionItem({item}: {item: IOption}) {
  return (
    <Pressable style={styles.container} onPress={item.onPress}>
      <Icon name={item.icon} size={55} color={colors.primary} />
      <Text style={styles.text}>{item.title}</Text>
    </Pressable>
  );
}