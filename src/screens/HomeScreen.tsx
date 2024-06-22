import React from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  View,
  Dimensions,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../redux/slices/navSlice';
import MapFavourites from '../components/NavFavourites';

const { width, height } = Dimensions.get('window');
const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={[tw`bg-white flex-1`, styles.AndroidSafeArea]}>
      <View style={tw`px-5`}>
        <Image
          style={{
            width: width * 0.25,
            height: width * 0.25,
            resizeMode: 'contain',
          }}
          source={{ uri: 'https://links.papareact.com/gzs' }}
        />

        <GooglePlacesAutocomplete
          placeholder="Where From?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data: any, details = null) => {
            console.log(data, details);

            dispatch(
              setOrigin({
                location: details?.geometry?.location,
                description: data?.description,
              })
            );
            dispatch(setDestination(null!));
          }}
          fetchDetails={true} // details verisi için bu gereklidir.
          enablePoweredByContainer={false} // poweredByGoogle yazısını kaldırmak için kullanılır.
          minLength={2} // Minimum 2 karakter ile arama yapılabilir. Örnek UK.
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400} // 400 ms sonra render eder.
        />

        <NavOptions />
        <MapFavourites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
