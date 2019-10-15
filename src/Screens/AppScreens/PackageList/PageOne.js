import React, {Fragment} from 'react';
import {Text, View, ScrollView} from 'react-native';
import Card from '../../../Components/Card';

const Nature = () => {
  return (
    <ScrollView
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#FAFAFA',
      }}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </ScrollView>
  );
};

export default Nature;
