import React, {Fragment} from 'react';
import {Text, View, ScrollView} from 'react-native';
import OrderCard from '../../../Components/OrderCard';

const Nature = () => {
  return (
    <ScrollView
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#FAFAFA',
      }}>
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
    </ScrollView>
  );
};

export default Nature;
