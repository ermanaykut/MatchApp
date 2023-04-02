import {View, Text} from 'react-native';
import React from 'react';
import {CountItem} from '../../../../interface';
import styles from './style';

export const ProfileCountItem = ({item}: {item: CountItem}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.count}>{item.count}</Text>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};