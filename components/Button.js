import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.function}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#53B175",
    width: "100%",
    paddingVertical: 20,
    borderRadius: 19,
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Gilroy-SemiBold",
  },
});
