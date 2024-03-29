import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../types";
import Header from "../../components/Header";

const Detail = () => {
  const { params: {title, date, url, explanation}} = useRoute<NativeStackScreenProps<RootStackParams, "Detail">["route"]>()
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
      <Image source={{uri: url}} style={styles.image}/>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <ScrollView>
        <Text style={styles.explanation}>{explanation}</Text>
      </ScrollView>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "rgba(7,26,93,255)",
  },
  content:{
    backgroundColor: "#2c449d",
    borderRadius: 32,
    marginVertical: 24,
    padding: 16,
    flex: 1
  },
  image: {
    width: "100%",
    height: "50%",
    borderColor: "#ffffff",
    borderRadius: 32,
    borderWidth: 2,
    marginBottom: 16
  },
  title: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16
  },
  date: {
    color: "#ffffff",
    fontSize: 16,
    marginBottom: 10
  },
  explanationContainer:{
    marginVertical: 16
  },
  explanation: {
    fontSize: 16
  }
});
