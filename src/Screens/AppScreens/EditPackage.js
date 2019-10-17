import React, {Fragment, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Picker,
  TouchableOpacity,
} from 'react-native';
import {Icon, Button} from 'native-base';
import {connect} from 'react-redux';
import {patchPackage} from '../../Public/Action/Package';

//Color pallete
// Title Text: '#171719'
// Second Text: '#3C3C3E'
// Primary Color : '#FB724A'
// Line Color : '#E5E5E5'

const EditPackage = props => {
  const item = props.navigation.state.params.item;

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  const [photoLoading, setPhotoLoading] = useState(false);
  const [loadingPost, setLoadingPost] = useState(false);

  // setPhoto()

  const options = {
    title: 'Select Photo',
    tintColor: '#1abc9c',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const getPhoto = async () => {
    setPhotoLoading(true);
    await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ])
      .then(result => {
        if (result['android.permission.CAMERA'] === 'granted') {
          ImagePicker.showImagePicker(options, response => {
            if (response.didCancel) {
              console.log('User cancelled image picker!');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else {
              const source = {uri: 'data:image/jpeg;base64,' + response.data};

              setPhoto(source.uri);
              setPhotoLoading(false);
            }
          });
        }
      })
      .catch(error => {
        console.log('error occurs, cannot get image!');
      });
  };

  // name, type, description, guide, price, photo

  const onEditPackage = async () => {
    setLoadingPost(true);

    if (photo !== null) {
      const data = new FormData();
      data.append('file', photo);
      data.append('upload_preset', 'flrmjsat');

      const res = await fetch(
        'https://api.cloudinary.com/v1_1/dtylbqd7w/image/upload',
        {
          method: 'POST',
          body: data,
        },
      );

      var file = await res.json();
    }

    await props
      .dispatch(
        patchPackage(
          name,
          type,
          description,
          'guide1@mail.com',
          price,
          photo === null ? item.photo : file.secure_url,
          item._id,
        ),
      )
      .then(() => {
        console.log('Patch package success!');
        setLoadingPost(false);
        props.navigation.navigate('PackageList');
      })
      .catch(() => {
        console.log('Patch package failed!');
        setLoadingPost(false);
      });
  };

  return (
    <Fragment>
      <ScrollView
        style={{
          height: '100%',
          width: '100%',
          flex: 1,
          flexDirection: 'column',
          paddingHorizontal: 20,
          paddingTop: 32,
        }}>
        {/* Arrow back... */}
        <TouchableOpacity
          onPress={() => props.navigation.navigate('DetailPackage')}>
          <Icon type="Ionicons" name="arrow-back" style={{color: '#FB724A'}} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            color: '#171719',
            marginTop: 18,
          }}>
          Update Package
        </Text>
        {/* Text input... */}
        <View style={{marginTop: 23}}>
          <TextInput
            onChangeText={name => setName(name)}
            style={{
              height: 56,
              fontSize: 18,
              color: '#3C3C3E',
              borderBottomColor: '#E5E5E5',
              borderBottomWidth: 1,
              marginTop: 10,
            }}
            value={item.name}
          />
          <TextInput
            onChangeText={price => setPrice(price)}
            style={{
              height: 56,
              fontSize: 18,
              color: '#3C3C3E',
              borderBottomColor: '#E5E5E5',
              borderBottomWidth: 1,
              marginTop: 10,
            }}
            value={item.price}
          />
          <View style={{height: 56, marginBottom: 0, paddingBottom: 0}}>
            <Picker
              style={{height: 56}}
              selectedValue={type}
              itemStyle={{color: '#FAFAFA', fontSize: 18}}
              onValueChange={(itemValue, itemIndex) => setType(itemValue)}>
              <Picker.Item label="Insert package type..." value={item.type} />
              <Picker.Item label="Nature" value="Nature" />
              <Picker.Item label="Artificial" value="Artificial" />
              <Picker.Item label="Horror" value="Horror" />
            </Picker>
          </View>
          <TextInput
            onValueChange={description => setDescription(description)}
            style={{
              height: 56,
              fontSize: 18,
              color: '#3C3C3E',
              borderBottomColor: '#E5E5E5',
              borderBottomWidth: 1,
              // marginTop: 10,
            }}
            multiline={true}
            numberOfLines={4}
            value={item.description}
          />
          <View style={{flexDirection: 'row', marginTop: 10, height: 85}}>
            <Text
              style={{
                fontSize: 18,
                marginTop: 8,
                color: '#8C8D99',
                paddingLeft: 5,
              }}>
              Select image
            </Text>
            <Button
              onPress={() => getPhoto()}
              dark
              style={{borderRadius: 5, marginHorizontal: 20}}>
              <Text style={{fontSize: 18, color: '#FFF', margin: 10}}>
                Upload
              </Text>
            </Button>
          </View>
        </View>
        {/* Button update... */}
      </ScrollView>
      <View style={{paddingHorizontal: 20}}>
        <Button
          onPress={() => onEditPackage()}
          style={{
            backgroundColor: '#FB724A',
            marginBottom: 20,
            marginTop: 'auto',
          }}
          block>
          <Text style={{color: '#FFF', fontSize: 18}}>Edit package</Text>
        </Button>
      </View>
    </Fragment>
  );
};

export default connect(null)(EditPackage);
