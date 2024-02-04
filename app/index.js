import { FlatList, View } from "react-native";
import styles from "../assets/css";
import { StatusBar } from "expo-status-bar";
import SinglePost from "../components/Posts/SinglePost";
import posts from "../assets/data/posts.json";
import { Redirect, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Redirect href="/createPost"/> */}
      <StatusBar style="auto" />
      <View style={styles.createPostButton}>
        <Ionicons
          name="create"
          size={24}
          color="black"
          onPress={() => {
            router.navigate("/createPost");
          }}
        />
      </View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <SinglePost post={item} />}
      />
    </View>
  );
};

export default App;
