import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

export default function Add({ navigation })
{
  const [cameraPermission, setCameraPermission] = useState(null);
  const [galleryPermission, setGalleryPermission] = useState(null);

  const [camera, setCamera] = useState(null);
  const [imageUri, setImageUri] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const permissionFunction = async () =>
  {
    const cameraPermission = await Camera.requestPermissionsAsync();

    setCameraPermission(cameraPermission.status === 'granted');

    const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync();
    console.log(imagePermission.status);

    setGalleryPermission(imagePermission.status === 'granted');

    if (
      imagePermission.status !== 'granted' &&
      cameraPermission.status !== 'granted'
    ) {
      alert('Permission for media access needed.');
    }
  };

  useEffect(() => {
    permissionFunction();
  }, []);

  const takePicture = async () =>
  {
    if (camera)
    {
      const data = await camera.takePictureAsync(null);
      console.log(data.uri);
      setImageUri(data.uri);

      if(!data.cancelled)
      {
        const ext = data.uri.substring(data.uri.lastIndexOf(".")+1);
        const fileName = data.uri.replace(/^.*[\\\/]/, "");
        var formData = new FormData();
/*        formData.append("image",{
          image : data.uri,
          fileName,
        });*/
/*        formData.append('image', data.uri, fileName);*/
    formData.append('image', data.uri);
    formData.append(fileName);
      }
        const config = {
            headers: {
              Authorization: "Client-ID acce204624c722a",
            },
          };
           axios.post("https://api.imgur.com/3/album/xt06e9l/images", formData, config).then((res) => {
                console.log(res);
                console.log(res.data.link);
              }).catch(err => {
                console.log(err);
                console.log(formData);
              });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <Camera
          ref={(ref) => setCamera(ref)}
          style={styles.fixedRatio}
          type={type}
        />
      </View>
      <Button title={'Take Picture'} onPress={takePicture} />
      {imageUri && <Image source={{ uri: imageUri }} style={{ flex: 1 }} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  fixedRatio: {
    flex: 1,
  },
  button: {
    flex: 0.1,
    padding: 10,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
});
