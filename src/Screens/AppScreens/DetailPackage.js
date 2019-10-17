import React, {Fragment} from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import {Icon} from 'native-base';
import {connect} from 'react-redux';
import {deletePackage} from '../../Public/Action/Package';

//Color pallete
// Title Text: '#171719'
// Second Text: '#3C3C3E'
// Third Text: '#8C8D99'
// Primary Color : '#FB724A'
// Line Color : '#E5E5E5'

const DetailPackage = props => {
  const showAlertRedeem = id => {
    Alert.alert(
      'Package',
      'Are you sure delete this package?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () =>
            props
              .dispatch(deletePackage(id))
              .then(() => {
                console.log('Delete package success!');
                props.navigation.navigate('PackageList');
              })
              .catch(() => {
                console.log('Delete package fauked!');
              }),
        },
      ],
      {cancelable: false},
    );
  };

  const item = props.navigation.state.params.item;

  return (
    <Fragment>
      <View style={{width: '100%', height: '30%'}}>
        <Image
          style={{width: '100%', height: '100%', position: 'relative'}}
          source={{
            uri: item.photo,
          }}
        />
        <View
          style={{
            position: 'absolute',
            margin: 20,
          }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('PackageList')}>
            <Icon style={{color: '#FFF'}} type="Ionicons" name="arrow-back" />
          </TouchableOpacity>
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
          {item.name}
        </Text>
        <Text
          style={{
            color: '#FFF',
            fontSize: 20,
          }}>
          Rp. {item.price.toLocaleString('en-GB')}
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
          <Text style={{fontSize: 18, color: '#8C8D99'}}>{item.type}</Text>
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
            {item.description}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('EditPackage', {item})}>
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
        <TouchableOpacity onPress={() => showAlertRedeem(item.id)}>
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
};

export default connect(null)(DetailPackage);
