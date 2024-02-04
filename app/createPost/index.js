import {
  Text,
  View,
  Image,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import styles from "../../assets/css";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const user = {
  id: "u1",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim1.JPG",
  name: "Vadim Savin",
};

const createPost = () => {
  const insets = useSafeAreaInsets();
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const handleSubmit = () => {
    console.warn("Onsubmit");
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[styles.container, { marginBottom: insets.bottom }]}
      contentContainerStyle={{ flex: 1 }}
      keyboardVerticalOffset={150}
    >
      {/* <View style={[styles.container, styles.width]}> */}
      <View style={styles.header}>
        <Image
          source={{
            uri: user.image,
          }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{user.name}</Text>
      </View>
      <Entypo name="image" size={24} color="black" onPress={pickImage} />
      <TextInput
        placeholder="What's on your mind?"
        multiline
        value={text}
        onChangeText={setText}
      />

      {image && <Image source={{ uri: image }} style={styles.selectedImage}/>}
      <View style={styles.buttonContainer}>
        <Button title="Post" onPress={() => handleSubmit()} />
      </View>
      {/* </View> */}
    </KeyboardAvoidingView>
  );
};

export default createPost;
