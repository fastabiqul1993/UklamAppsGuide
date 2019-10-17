import React, {Fragment, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {Thumbnail, Icon, Button} from 'native-base';
import FooterNav from '../../Components/FooterNav';

//Color pallete
// Title Text: '#171719'
// Second Text: '#3C3C3E'
// Primary Color : '#FB724A'
// Line Color : '#E5E5E5'

const Profile = () => {
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
            Profile
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
          <View style={{flexDirection: 'column', marginHorizontal: 10}}>
            <Text style={{fontSize: 17, color: '#3C3C3E'}}>Maria Ozawa</Text>
            <View style={{marginTop: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Icon
                  type="Ionicons"
                  name="pin"
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
                    marginLeft: -3,
                    color: '#91929E',
                  }}>
                  Tokyo, Japan
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Icon
                  type="Ionicons"
                  name="mail"
                  style={{
                    fontSize: 18,
                    color: '#FB724A',
                    alignSelf: 'center',
                    width: 30,
                    height: 30,
                  }}
                />
                <Text
                  style={{
                    fontSize: 14,
                    color: '#91929E',
                  }}>
                  miyabi@mail.jav
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* Option... */}
        <View style={{marginTop: 48}}>
          <TouchableOpacity>
            <View
              style={{
                height: 52,
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottomColor: '#E5E5E5',
                borderBottomWidth: 1,
              }}>
              <Text style={{fontSize: 18, color: '#3C3C3E'}}>
                Setting account
              </Text>
              <Icon
                style={{fontSize: 18, color: '#FB724A'}}
                type="Ionicons"
                name="arrow-forward"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => showAlertRedeem()}>
            <View
              style={{
                height: 52,
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottomColor: '#E5E5E5',
                borderBottomWidth: 1,
              }}>
              <Text style={{fontSize: 18, color: '#3C3C3E'}}>Redeem cash</Text>
              <Icon
                style={{fontSize: 18, color: '#FB724A'}}
                type="Ionicons"
                name="arrow-forward"
              />
            </View>
          </TouchableOpacity>
        </View>
        {/* Logo... */}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 35,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{width: 125, height: 75}}
              source={require('../../Assets/icon2-01.png')}
            />
            <Text
              style={{
                alignSelf: 'center',
                fontWeight: 'bold',
                fontSize: 32,
                paddingTop: 20,
                color: '#FF7C00',
                marginLeft: 10,
              }}>
              Guide
            </Text>
          </View>
          <Text style={{marginTop: 15, color: '#3C3C3E'}}>V 0.0.0.1</Text>
        </View>
        {/* Bottom Button */}
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Button style={{backgroundColor: '#FB724A'}} block>
            <Text style={{fontSize: 18, color: '#FFF'}}>Sign out</Text>
          </Button>
          <TouchableOpacity>
            <Text style={{fontSize: 18, marginVertical: 10, color: '#FB724A'}}>
              Term of service
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Profile;
