import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";

const ImageInput = ({ imageUri, onChangeImage }) => {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library");
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
  };

  const selectImage = async () => {
    try {
      const res = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!res.cancelled) {
        onChangeImage(res.uri);
      }
    } catch (error) {
      console.log("Error reading an image");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.medium}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ImageInput;

// import React from "react";
// import {
//   View,
//   StyleSheet,
//   TouchableWithoutFeedback,
//   Image,
// } from "react-native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

// import colors from "../config/colors";

// const ImageInput = ({ imageUri, onAddImage, onRemoveImage }) => {
//   return (
//     <>
//       {imageUri === null ? (
//         <TouchableWithoutFeedback onPress={onAddImage}>
//           <View style={styles.container}>
//             <MaterialCommunityIcons
//               name="camera"
//               size={40}
//               color={colors.medium}
//             />
//           </View>
//         </TouchableWithoutFeedback>
//       ) : (
//         <TouchableWithoutFeedback onPress={() => onRemoveImage(imageUri)}>
//           <View style={styles.container}>
//             <Image style={styles.image} source={{ uri: imageUri }} />
//           </View>
//         </TouchableWithoutFeedback>
//       )}
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     height: 100,
//     width: 100,
//     backgroundColor: colors.light,
//     justifyContent: "center",
//     alignItems: "center",
//     margin: 5,
//     borderRadius: 15,
//     overflow: "hidden",
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//   },
// });

// export default ImageInput;
