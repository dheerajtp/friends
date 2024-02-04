import styles from "../../assets/css";
import { View, Image, Text } from "react-native";
import {
  Entypo,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import likeImage from "../../assets/images/like.png";

const SinglePost = ({ post = {} }) => {
  return (
    <View style={styles.post}>
      {/*header */}
      <View style={styles.header}>
        <Image source={{ uri: post.User.image }} style={styles.profileImage} />
        <View>
          <Text style={styles.name}>{post?.User?.name}</Text>
          <Text style={styles.subText}>{post?.createdAt}</Text>
        </View>
        <Entypo
          name="dots-three-horizontal"
          size={18}
          color="gray"
          style={styles.icon}
        />
      </View>
      {/* body*/}
      {post.description && (
        <Text style={styles.description}>{post.description}</Text>
      )}
      {post.image && (
        <Image source={{ uri: post.image }} style={styles.image} />
      )}
      {/* footer */}
      <View style={styles.footer}>
        <View style={styles.statusRow}>
          <Image source={likeImage} style={styles.likeIcon} />
          <Text style={styles.likedBy}>
            Elon Musk and {post.numberOfLikes} others
          </Text>
          <Text style={styles.numberOfShares}>
            {post.numberOfShares} shares
          </Text>
        </View>
        <View style={styles.buttonsRow}>
          <View style={styles.iconButton}>
            <AntDesign name="like2" size={18} color="gray" />
            <Text style={styles.iconButtonText}> Like </Text>
          </View>
          <View style={styles.iconButton}>
            <FontAwesome5 name="comment-alt" size={18} color="gray" />
            <Text style={styles.iconButtonText}> Comment </Text>
          </View>
          <View style={styles.iconButton}>
            <MaterialCommunityIcons
              name="share-outline"
              size={18}
              color="gray"
            />
            <Text style={styles.iconButtonText}> Share </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SinglePost;
