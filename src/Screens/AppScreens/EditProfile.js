import React, {Fragment} from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import {Icon, Button, Thumbnail} from 'native-base';

//Color pallete
// Title Text: '#171719'
// Second Text: '#3C3C3E'
// Primary Color : '#FB724A'
// Line Color : '#E5E5E5'

const EditProfile = () => {
  return (
    <Fragment>
      <ScrollView
        style={{
          height: '100%',
          width: '100%',
          flex: 1,
          flexDirection: 'column',
          paddingHorizontal: 20,
          paddingTop: 32,
        }}>
        {/* Arrow back... */}
        <Icon type="Ionicons" name="arrow-back" style={{color: '#FB724A'}} />
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            color: '#171719',
            marginTop: 18,
          }}>
          Edit Profile
        </Text>
        {/* Text input... */}
        <View style={{marginTop: 23}}>
          <Thumbnail
            source={{
              uri:
                'https://cdns.klimg.com/newshub.id/real/2015/07/09/67758/maria-ozawa.jpg',
            }}
            style={{
              alignSelf: 'center',
              width: 100,
              height: 100,
              borderRadius: 50,
            }}
          />
          <TextInput
            style={{
              height: 56,
              fontSize: 18,
              color: '#3C3C3E',
              borderBottomColor: '#E5E5E5',
              borderBottomWidth: 1,
              marginTop: 10,
            }}
            value="Maria Ozawa"
          />
          <TextInput
            style={{
              height: 56,
              fontSize: 18,
              color: '#3C3C3E',
              borderBottomColor: '#E5E5E5',
              borderBottomWidth: 1,
              marginTop: 10,
            }}
            value="miyabi@mail.jav"
          />
          <TextInput
            style={{
              height: 56,
              fontSize: 18,
              borderBottomColor: '#E5E5E5',
              borderBottomWidth: 1,
              marginTop: 10,
            }}
            value="******"
          />
          <TextInput
            style={{
              height: 56,
              fontSize: 18,
              color: '#3C3C3E',
              borderBottomColor: '#E5E5E5',
              borderBottomWidth: 1,
              marginTop: 10,
            }}
            value="Tokyo, Japan"
          />
        </View>
        {/* Button update... */}
        <Button style={{backgroundColor: '#FB724A', marginVertical: 30}} block>
          <Text style={{color: '#FFF', fontSize: 18}}>Update profile</Text>
        </Button>
      </ScrollView>
    </Fragment>
  );
};

export default EditProfile;
