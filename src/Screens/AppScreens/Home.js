import React, {Fragment, useState, useEffect} from 'react';
import {View, Text, StyleSheet, Alert, Switch} from 'react-native';
import {Thumbnail, Icon} from 'native-base';
import {connect} from 'react-redux';
import HomeNav from '../../Routes/HomeNav';
import {getAllPackage} from '../../Public/Action/Package';

//Color pallete
// Title Text: '#171719'
// Second Text: '#3C3C3E'
// Primary Color : '#FB724A'
// Line Color : '#E5E5E5'

const Home = props => {
  const [status, setStatus] = useState(false);

  const fetchPackage = async () => {
    await props.dispatch(getAllPackage('guide1@mail.com'));
  };

  useEffect(() => {
    fetchPackage();
  }, []);

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
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingTop: 34,
          backgroundColor: '#FAFAFA',
        }}>
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
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

const mapStateToProps = state => {
  return {
    isLoading: state.packageCmd.isLoading,
  };
};

export default connect(mapStateToProps)(Home);
