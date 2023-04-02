import {FlatList, View} from 'react-native';
import React from 'react';
import {CountItem} from '../../interface';
import {ProfileCountItem} from './components/ProfileCountItem';
import styles from './style';

export default function ProfileLikes({item}: {item: any}) {
  return (
    <View style={styles.container}>
      {item?.COUNT_ITEMS.map((x: any) => {
        return <ProfileCountItem item={x} />;
      })}
    </View>
  );
}