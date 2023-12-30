import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Home = () => {
  const data = [
    {
      id: 1,
      image: require("../assets/images/person.jpeg"),
      name: "Jenny Wilson",
    },
    {
      id: 2,
      image: require("../assets/images/person2.jpg"),
      name: "Theresa Webb",
    },
    {
      id: 3,
      image: require("../assets/images/person2.jpg"),
      name: "John Doe",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Messages</Text>
        <Image
          source={require("../assets/images/search.png")}
          height={24}
          width={24}
        />
      </View>
      {data.map((item) => (
        <View key={item.id} style={styles.mainContainer}>
          <View>
            <Image
              source={item.image}
              width={60}
              height={60}
              style={styles.personImg}
            />
          </View>
          <View style={styles.personNameBox}>
            <Text style={styles.headerMSGText}>{item.name}</Text>
            <Text style={styles.descriptionText}>
              Lorem ipsum dolor sit amet consiiad
            </Text>
          </View>
          <View style={styles.timeBox}>
            <Text style={styles.timeText}>1 Hour</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 18,
  },
  headerText: {
    fontSize: 32,
    fontWeight: "700",
    letterSpacing: 0.96,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainContainer: {
    flexDirection: "row",
    marginTop: 31,
    gap: 13,
  },
  personImg: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  headerMSGText: {
    fontSize: 14,
    fontWeight: "600",
  },
  descriptionText: {
    fontSize: 14,
    fontWeight: "400",
  },
  personNameBox: {
    width: 200,
  },
  timeText: {
    textAlign: "right",
    fontSize: 14,
    fontWeight: "600",
  },
  timeBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default Home;
