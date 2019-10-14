import React, {Fragment} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Footer, FooterTab, Icon, Button} from 'native-base';

const FooterNav = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default FooterNav;
