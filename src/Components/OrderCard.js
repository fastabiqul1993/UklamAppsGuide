import React, {Fragment} from 'react';
import {View, Image, Text} from 'react-native';

//Color pallete
// Title Text: '#171719'
// Second Text: '#3C3C3E'
// Third Text: '#8C8D99'
// Primary Color : '#FB724A'
// Line Color : '#E5E5E5'

const OrderCard = () => {
  return (
    <Fragment>
      {/* OrderCard... */}
      <View
        style={{
          borderRadius: 10,
          marginTop: 10,
          borderBottomColor: '#E5E5E5',
          borderBottomWidth: 1,
          height: 117,
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
              uri:
                'https://awsimages.detik.net.id/visual/2019/04/09/52a58257-60c2-4fc5-b5cc-b23246e9d885_169.jpeg?w=650',
            }}
          />

          <View>
            <View
              style={{
                marginHorizontal: 10,
                marginVertical: 5,
              }}>
              <Text style={{fontSize: 18, color: '#171719'}}>
                Andika Kangen Band
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: '#3C3C3E',
                  marginTop: 10,
                }}>
                Gunung Kembar
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: '#8C8D99',
                  marginTop: 10,
                  fontStyle: 'italic',
                }}>
                On going
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

export default OrderCard;
