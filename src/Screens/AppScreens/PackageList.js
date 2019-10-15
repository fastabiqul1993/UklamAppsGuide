import React, {Fragment} from 'react';
import {View, Text, Image} from 'react-native';
import {Fab, Icon, Button} from 'native-base';
import FooterNav from '../../Components/FooterNav';
import PackageListNav from '../../Routes/PackageListNav';
//Color pallete
// Title Text: '#171719'
// Second Text: '#3C3C3E'
// Third Text: '#8C8D99'
// Primary Color : '#FB724A'
// Line Color : '#E5E5E5'

const PackageList = () => {
  return (
    <Fragment>
      <View style={{flex: 1, paddingHorizontal: 20, paddingTop: 34}}>
        {/* Hero... */}
        <Fab style={{backgroundColor: '#FB724A'}} position="bottomRight">
          <Icon type="Ionicons" name="add" />
        </Fab>
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            color: '#171719',
            height: 37,
          }}>
          Package List
        </Text>
        <PackageListNav />
      </View>
      <FooterNav />
    </Fragment>
  );
};

export default PackageList;
