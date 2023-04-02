import {View, Text, Image, FlatList, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {CountItem} from './interface';
import ProfileInfo from './components/ProfileInfo';
import ProfileLikes from './components/ProfileLikes';
import {FileType} from '../../components/CustomPicker/interface';
import ZoomGallery from '../../components/ZoomGallery';

const DUMMY_USER = {
  fullName: 'Erman Aykut',
  age: 45,
  gender: 'Male',
  image:
    'https://scontent.fsaw3-1.fna.fbcdn.net/v/t1.6435-9/173943447_10158616819627851_2041152561917012438_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ScAp3NP7M18AX9pABMR&_nc_ht=scontent.fsaw3-1.fna&oh=00_AfArHKE5XHLmkmR0JNXkfwA0KFVhxUodY1QNrgqUZzUYIA&oe=644E2283',
  liked: 30,
  fans: 2139,
  match: 122,
};

export default function Profile() {
  const [files, setFiles] = useState<FileType[]>([]);
  const [visible, setVisible] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const openViewer = (index: number) => {
    setActiveIndex(index);
    setVisible(true);
  };

  const closeViewer = () => {
    console.log('sda');

    setActiveIndex(0);
    setVisible(false);
  };

  const COUNT_ITEMS: CountItem[] = [
    {
      id: 1,
      title: 'Liked',
      count: DUMMY_USER.liked,
    },
    {
      id: 2,
      title: 'Fans',
      count: DUMMY_USER.fans,
    },
    {
      id: 3,
      title: 'Match',
      count: DUMMY_USER.match,
    },
  ];

  const DUMMY_DATA = [
    {
      id: 1,
      image: DUMMY_USER.image,
      fullName: DUMMY_USER.fullName,
      age: DUMMY_USER.age,
      gender: DUMMY_USER.gender,
      type: 'info',
    },
    {
      id: 2,
      COUNT_ITEMS: COUNT_ITEMS,
      type: 'profile',
    },
  ];

  const renderItem = ({item}: {item: any}) => {
    if (item.type === 'info') {
      return <ProfileInfo item={item} files={files} setFiles={setFiles} />;
    } else if (item.type === 'profile') {
      return <ProfileLikes item={item} />;
    } else return null;
  };
  const deleteImage = (item: FileType) => {
    const filteredFiles = files.filter(x => x.uri != item.uri);
    setFiles(filteredFiles);
  };
  const renderImages = ({item, index}: {item: FileType; index: number}) => {
    return (
      <Pressable
        onPress={() => openViewer(index)}
        onLongPress={() => deleteImage(item)}>
        <Image
          source={{uri: item.uri}}
          style={{width: 160, height: 100, margin: 10, borderRadius: 5}}
          resizeMode="cover"
        />
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.widget}>
        <FlatList
          data={DUMMY_DATA}
          renderItem={renderItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-around',
        }}>
        <Text>My Photos</Text>
        <Text onPress={() => setFiles([])}>Delete All</Text>
      </View>
      <FlatList data={files} renderItem={renderImages} numColumns={2} />
      <ZoomGallery
        visible={visible}
        images={files?.map(x => {
          return {url: x?.uri};
        })}
      />
    </View>
  );
}
