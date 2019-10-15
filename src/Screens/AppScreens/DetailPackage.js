import React, {Fragment, useState} from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import {Icon} from 'native-base';

//Color pallete
// Title Text: '#171719'
// Second Text: '#3C3C3E'
// Third Text: '#8C8D99'
// Primary Color : '#FB724A'
// Line Color : '#E5E5E5'

function DetailPackage() {
  const showAlertRedeem = () => {
    Alert.alert(
      'Package',
      'Are you sure delete this package?',
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
      <View style={{width: '100%', height: '30%'}}>
        <Image
          style={{width: '100%', height: '100%', position: 'relative'}}
          source={{
            uri:
              'https://i.pinimg.com/originals/66/a0/ed/66a0ed192932132e38ffdaee2147e2df.jpg',
          }}
        />
        <View
          style={{
            position: 'absolute',
            margin: 20,
          }}>
          <Icon style={{color: '#FFF'}} type="Ionicons" name="arrow-back" />
        </View>
      </View>
      {/* Title */}
      <View
        style={{
          width: '100%',
          height: '10%',
          backgroundColor: '#FB724A',
          paddingVertical: 18,
          paddingHorizontal: 20,
          justifyContent: 'space-between',
          flexDirection: 'row',
          flexWrap: 'nowrap',
        }}>
        <Text
          style={{
            color: '#FFF',
            fontSize: 20,
          }}>
          Gunung Es
        </Text>
        <Text
          style={{
            color: '#FFF',
            fontSize: 20,
          }}>
          Rp. 500,000,-
        </Text>
      </View>
      {/* Option... */}
      <View style={{marginTop: 0, paddingHorizontal: 20, flex: 1}}>
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
          <Text style={{fontSize: 18, color: '#171719'}}>Type</Text>
          <Text style={{fontSize: 18, color: '#8C8D99'}}>Nature</Text>
        </View>
        <View
          style={{
            height: 150,
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            borderBottomColor: '#E5E5E5',
            borderBottomWidth: 1,
          }}>
          <Text style={{fontSize: 18, color: '#171719'}}>Description</Text>
          <Text style={{fontSize: 18, color: '#8C8D99', textAlign: 'justify'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Text>
        </View>
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
            <Text style={{fontSize: 18, color: '#171719'}}>Update package</Text>
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
            <Text style={{fontSize: 18, color: '#171719'}}>Delete package</Text>
            <Icon
              style={{fontSize: 18, color: '#FB724A'}}
              type="Ionicons"
              name="arrow-forward"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: 'center', marginVertical: '10%'}}>
          <Text style={{fontSize: 18, color: '#FB724A'}}>Term of service</Text>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
}

export default DetailPackage;
