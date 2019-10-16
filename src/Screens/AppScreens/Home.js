import React, {Fragment, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  Switch,
} from 'react-native';
import {Thumbnail, Icon, Button} from 'native-base';
import FooterNav from '../../Components/FooterNav';
import HomeNav from '../../Routes/HomeNav';
//Color pallete
// Title Text: '#171719'
// Second Text: '#3C3C3E'
// Primary Color : '#FB724A'
// Line Color : '#E5E5E5'

const Home = () => {
  const [status, setStatus] = useState(false);

  const showAlertRedeem = () => {
    Alert.alert(
      'Redeem',
      'Are you sure to redeem your cash?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  };

  return (
    <Fragment>
      <View style={{flex: 1, paddingHorizontal: 20, paddingTop: 34}}>
        {/* Hero... */}
        <View style={{height: 37}}>
          <Text style={{fontSize: 28, fontWeight: 'bold', color: '#171719'}}>
            Home
          </Text>
        </View>
        {/* Profile mini... */}
        <View style={{height: 80, marginTop: 25, flexDirection: 'row'}}>
          <Thumbnail
            large
            source={{
              uri:
                'https://cdns.klimg.com/newshub.id/real/2015/07/09/67758/maria-ozawa.jpg',
            }}
          />
          <View style={{marginHorizontal: 10}}>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}>
              <Text style={{fontSize: 17, color: '#3C3C3E'}}>Maria Ozawa</Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 5,
                }}>
                <Icon
                  type="Ionicons"
                  name="wallet"
                  style={{
                    fontSize: 18,
                    color: '#FB724A',
                    alignSelf: 'center',
                    marginLeft: 3,
                    width: 30,
                    height: 30,
                  }}
                />
                <Text
                  style={{
                    fontSize: 14,
                    color: '#91929E',
                  }}>
                  Rp. 500,000
                </Text>
              </View>
              <Switch
                style={{marginTop: -10, marginLeft: -10}}
                onValueChange={() => setStatus(!status)}
                value={status}
              />
            </View>
          </View>
        </View>
        <HomeNav />
      </View>
      {/* Footer... */}
      <FooterNav />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Home;
