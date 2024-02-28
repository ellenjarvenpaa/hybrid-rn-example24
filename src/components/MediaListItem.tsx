import {Image, Text, TouchableOpacity} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {MediaItemWithOwner} from '../types/DBTypes';

const MediaListItem = ({
  item,
  navigation,
}: {
  item: MediaItemWithOwner;
  navigation: NavigationProp<ParamListBase>;
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('touched', item.title);
        navigation.navigate('Single Media');
      }}
    >
      <Image style={{height: 300}} source={{uri: 'http:' + item.thumbnail}} />
      <Text>{item.title}</Text>
      <Text>{new Date(item.created_at).toLocaleString('fi-FI')}</Text>
    </TouchableOpacity>
  );
};
export default MediaListItem;
