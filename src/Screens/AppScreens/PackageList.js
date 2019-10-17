import React, {Fragment, useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {Fab, Icon} from 'native-base';
import PackageListNav from '../../Routes/PackageListNav';
import {getAllPackage} from '../../Public/Action/Package';
import {connect} from 'react-redux';
// import {withNavigation} from 'react-navigation';

//Color pallete
// Title Text: '#171719'
// Second Text: '#3C3C3E'
// Third Text: '#8C8D99'
// Primary Color : '#FB724A'
// Line Color : '#E5E5E5'

const PackageList = props => {
  const fetchPackage = async () => {
    await props.dispatch(getAllPackage('guide1@mail.com'));
  };

  const goToAdd = () => {
    props.navigation.navigate('AddPackage');
  };

  useEffect(() => {
    fetchPackage();
  }, []);

  const {isLoading} = props;

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
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            color: '#171719',
            height: 37,
          }}>
          Package List
        </Text>
        {isLoading === true ? (
          <Fragment>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                margin: '50%',
              }}>
              <ActivityIndicator size="large" color="#FB724A" />
            </View>
          </Fragment>
        ) : // <PackageListNav />
        null}
      </View>
      <Fab
        onPress={() => {
          goToAdd();
        }}
        style={{backgroundColor: '#FB724A'}}
        position="bottomRight">
        <Icon type="Ionicons" name="add" />
      </Fab>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.packageCmd.isLoading,
  };
};

export default connect(mapStateToProps)(PackageList);
