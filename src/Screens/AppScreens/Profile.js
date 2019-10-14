import React, {Fragment, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  TouchableHighlight,
  Alert,
} from 'react-native';
import {Thumbnail, Icon, Button, Footer, FooterTab} from 'native-base';

const Profile = () => {
  const [modal, setModal] = useState(false);

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
          <Text style={{fontSize: 28}}>Profile</Text>
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
            <Text style={{fontSize: 17}}>Maria Ozawa</Text>
            <View style={{marginTop: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 3,
                }}>
                <Icon
                  type="Ionicons"
                  name="pin"
                  style={{fontSize: 18, color: '#FB724A', textAlign: 'center'}}
                />
                <Text
                  style={{
                    fontSize: 14,
                    marginHorizontal: 10,
                    color: '#91929E',
                  }}>
                  Tokyo, Japan
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Icon
                  type="Ionicons"
                  name="mail"
                  style={{fontSize: 18, color: '#FB724A'}}
                />
                <Text
                  style={{
                    fontSize: 14,
                    marginHorizontal: 10,
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
              <Text style={{fontSize: 18}}>Setting account</Text>
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
              <Text style={{fontSize: 18}}>Redeem cash</Text>
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
            marginVertical: 45,
          }}>
          <Image
            style={{width: 200, height: 100}}
            source={require('../../Assets/icon2-01.png')}
          />
          <Text style={{marginTop: 15}}>V1.0.0.0</Text>
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
      {/* Footer... */}
      <Footer>
        <FooterTab style={{backgroundColor: '#E5E5E5'}}>
          <Button vertical>
            <Icon name="briefcase" style={{color: '#FB724A'}} />
            <Text style={{color: '#FB724A', fontSize: 14}}>Order</Text>
          </Button>
          <Button vertical>
            <Icon name="albums" style={{color: '#FB724A'}} />
            <Text style={{color: '#FB724A', fontSize: 14}}>Package</Text>
          </Button>
          <Button vertical>
            <Icon name="chatboxes" style={{color: '#FB724A'}} />
            <Text style={{color: '#FB724A', fontSize: 14}}>Chat</Text>
          </Button>
          <Button vertical>
            <Icon name="person" style={{color: '#FB724A'}} />
            <Text style={{color: '#FB724A', fontSize: 14}}>Profile</Text>
          </Button>
        </FooterTab>
      </Footer>
      {/* Modal... */}
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
