import {Image, Pressable, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './style';
import Icon from '../../../../components/Icon';
import colors from '../../../../constants/theme/color';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';
import CustomPicker from '../../../../components/CustomPicker';
import {FileType} from '../../../../components/CustomPicker/interface';

export default function ProfileInfo({
  item,
  files,
  setFiles,
}: {
  item: any;
  files: FileType[];
  setFiles: any;
}) {
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const openActionSheet = () => {
    actionSheetRef.current?.show();
  };
  useEffect(() => {
    console.log(files);
  }, [files]);

  return (
    <View style={styles.container}>
      <View>
        <Image source={{uri: item.image}} style={styles.image} />
        <Pressable onPress={openActionSheet} style={styles.icon}>
          <Icon name="camera-plus : matcom" size={25} color={colors.white} />
        </Pressable>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.text}>Fullname: {item.fullName}</Text>
        <Text style={styles.text}>Age: {item.age}</Text>
        <Text style={styles.text}>Gender: {item.gender}</Text>
      </View>
      <ActionSheet ref={actionSheetRef} containerStyle={{height: 200}}>
        <CustomPicker files={files} setFiles={setFiles} onlyImage />
      </ActionSheet>
    </View>
  );
}