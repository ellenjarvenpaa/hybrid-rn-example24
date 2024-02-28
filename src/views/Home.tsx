import {FlatList, Text} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {useMedia} from '../hooks/apiHooks';
import MediaListItem from '../components/MediaListItem';

const Home = ({navigation}: {navigation: NavigationProp<ParamListBase>}) => {
  const {mediaArray} = useMedia();
  return (
    <>
      <Text>Files</Text>
      <FlatList
        data={mediaArray}
        renderItem={({item}) => (
          <MediaListItem navigation={navigation} item={item} />
        )}
      />
    </>
  );
};

export default Home;
