import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../redux/slices/navSlice';

const data = [
  {
    id: 1,
    title: 'Get a Ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: 2,
    title: 'Order Food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatsScreen',
  },
];

const { width, height } = Dimensions.get('window');
const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <FlatList
      data={data}
      renderItem={({ item }: any) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item?.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
          disabled={!origin}
        >
          <View style={tw`${!origin && 'opacity-20'}`}>
            <Image
              style={{
                width: width * 0.25,
                height: width * 0.25,
                resizeMode: 'contain',
              }}
              source={{ uri: item?.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item?.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item: any) => item?.id}
      horizontal
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
