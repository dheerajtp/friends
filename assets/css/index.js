import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
    alignItems: "center",
    // justifyContent: "center",
  },
  post: {
    width: "100%",
    marginVertical: 10,
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 5,
  },
  footer: {
    paddingHorizontal: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: "500",
  },
  subText: {
    color: "gray",
  },
  icon: {
    marginLeft: "auto",
  },
  description: {
    paddingHorizontal: 10,
    lineHeight: 20,
    letterSpacing: 0.3,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    marginTop: 10,
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgray",
  },
  likedBy: {},
  numberOfShares: {
    marginLeft: "auto",
    color: "gray",
  },
  likeIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  buttonsRow: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButtonText: {
    marginLeft: 5,
    color: "gray",
    fontWeight: "500",
  },
  width: {
    width: "100%",
  },
  buttonContainer: {
    marginTop: "auto",
    marginVertical: 10,
  },
  selectedImage: {
    width: "100%",
    aspectRatio: 1,
    alignSelf: "center",
  },
  createPostButton: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems:"center",
  },
});

export default styles;
