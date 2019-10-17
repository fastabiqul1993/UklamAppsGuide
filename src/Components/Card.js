import React, {Fragment} from 'react';
import {View, Image, Text} from 'react-native';

//Color pallete
// Title Text: '#171719'
// Second Text: '#3C3C3E'
// Third Text: '#8C8D99'
// Primary Color : '#FB724A'
// Line Color : '#E5E5E5'

const Card = props => {
  return (
    <Fragment>
      {/* Card... */}
      <View
        style={{
          borderRadius: 10,
          marginTop: 10,
          borderBottomColor: '#E5E5E5',
          borderBottomWidth: 1,
          height: 117,
          marginHorizontal: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'nowrap',
            borderRadius: 10,
          }}>
          <Image
            style={{
              width: 102,
              height: 102,
              borderRadius: 10,
            }}
            source={{
              uri: props.item.photo,
            }}
          />

          <View>
            <View
              style={{
                marginHorizontal: 10,
                marginVertical: 5,
              }}>
              <Text style={{fontSize: 18, color: '#171719'}}>
                {props.item.name}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: '#3C3C3E',
                  marginTop: 10,
                }}>
                Rp. {props.item.price.toLocaleString('en-GB')}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

export default Card;
