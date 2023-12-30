import { StyleSheet, View, Text } from "react-native";
import React from "react";

const Calls = () => {
  return (
    <View style={styles.container}>
      <Text>Calls</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Calls;
