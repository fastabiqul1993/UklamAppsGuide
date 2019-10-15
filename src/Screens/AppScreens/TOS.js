import React, {Fragment} from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import {Icon, Button, Thumbnail} from 'native-base';

//Color pallete
// Title Text: '#171719'
// Second Text: '#3C3C3E'
// Primary Color : '#FB724A'
// Line Color : '#E5E5E5'

const TOS = () => {
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
            marginTop: 18,
            color: '#171719',
            borderBottomColor: '#E5E5E5',
            borderBottomWidth: 1,
          }}>
          Term of service
        </Text>
        {/* Text input... */}
        <View style={{marginVertical: 15}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#171719'}}>
            App in use
          </Text>
        </View>
        <Text style={{fontSize: 16, textAlign: 'justify', color: '#3C3C3E'}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </ScrollView>
    </Fragment>
  );
};

export default TOS;
