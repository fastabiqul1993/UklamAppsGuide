import React, {Fragment} from 'react';
import {View, Image, Text} from 'react-native';

//Color pallete
// Title Text: '#171719'
// Second Text: '#3C3C3E'
// Third Text: '#8C8D99'
// Primary Color : '#FB724A'
// Line Color : '#E5E5E5'

const Card = () => {
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
                'https://images.vailresorts.com/image/upload/ar_4:3,c_fill,dpr_3.0,f_auto,g_auto,q_auto/v1/Crested%20Butte/Heros/Brochure/The%20Mountain/Mountain%20Conditions/Weather%20Report/weather%20report%20hero.jpg',
            }}
          />

          <View>
            <View
              style={{
                marginHorizontal: 10,
                marginVertical: 5,
              }}>
              <Text style={{fontSize: 18, color: '#171719'}}>
                Gunung kembar
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: '#3C3C3E',
                  marginTop: 10,
                }}>
                Rp. 50.000,-
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

export default Card;
