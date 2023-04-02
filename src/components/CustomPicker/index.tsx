import {View, Text, FlatList} from 'react-native';
import React from 'react';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import DocumentPicker, {types} from 'react-native-document-picker';

import OptionItem from './components/OptionItem';

import styles from './style';
import type {FileType, IOption, Props} from './interface';

//TO:DO Maksimum file sayısını kontrol edip hata mesajı verdirelim
export default function CustomPicker({
  single = false,
  files,
  setFiles,
  options,
  multiSelectionLimit = 5,
  onlyImage = true,
}: Props) {
  const onPressedCamera = async () => {
    try {
      const res = await launchCamera({mediaType: 'photo'});
      if (res.assets) {
        const images: FileType[] = [];
        images.push(res?.assets?.[0]);
        setFiles([...files, ...images]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onPressedGallery = async () => {
    try {
      let obj: any;
      if (single) {
        obj = {selectionLimit: 1};
      } else {
        obj = {selectionLimit: multiSelectionLimit};
      }
      const res = await launchImageLibrary({mediaType: 'photo', ...obj});
      if (res.assets) {
        if (single) {
          const images: FileType[] = [];
          images.push(res?.assets?.[0]);
          setFiles([...files, ...images]);
        } else {
          setFiles([...files, ...res?.assets]);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onPressedLibrary = () => {
    single ? openSingleLibrary() : openMultiLibrary();
  };

  const openSingleLibrary = async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: onlyImage ? types.images : types.allFiles,
      });
      const images: FileType[] = [];
      images.push({
        fileName: res.name,
        fileSize: res.size,
        type: res.type,
        uri: res.uri,
      });
      setFiles([...files, ...images]);
    } catch (err) {
      console.log(err);
    }
  };

  const openMultiLibrary = async () => {
    try {
      const res = await DocumentPicker.pickMultiple({
        type: onlyImage ? types.images : types.allFiles,
        allowMultiSelection: true,
      });
      const images: FileType[] = res.map(x => {
        return {
          fileName: x.name,
          fileSize: x.size,
          type: x.type,
          uri: x.uri,
        };
      });
      setFiles([...files, ...images]);
    } catch (err) {
      console.log(err);
    }
  };

  //OptionItem Props
  const _options: IOption[] = [
    {
      id: 1,
      title: 'from camera',
      icon: 'camera : matcom',
      show: true,
      onPress: onPressedCamera,
    },
    {
      id: 2,
      title: 'from gallery',
      icon: 'image-multiple : matcom',
      show: true,
      onPress: onPressedGallery,
    },
    {
      id: 3,
      title: 'from library',
      icon: 'folder-multiple-image : matcom',
      show: true,
      onPress: onPressedLibrary,
    },
  ];

  const renderOptions = ({item}: {item: IOption}) => <OptionItem item={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={
          options != undefined
            ? options.filter(x => x.show != false)
            : _options.filter(x => x.show != false)
        }
        renderItem={renderOptions}
        horizontal
        contentContainerStyle={styles.flatlist}
      />
    </View>
  );
}