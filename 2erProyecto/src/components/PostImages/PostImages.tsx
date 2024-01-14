import React, { FC } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { PostImage as PostImageTypes, RootStackParams } from "../../types";
import { format } from "date-fns";
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

type PostImageNavigationProps = NativeStackNavigationProp<RootStackParams, "Detail">

const PostImages: FC<PostImageTypes> = ({title, date, url, explanation}) => {
  const {navigate} = useNavigation<PostImageNavigationProps>()

  const newDate = date ? format(new Date(date), "dd/MM/yyyy") : date

  const handleViewPress = () => {
    navigate('Detail', {title, date, url, explanation})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{newDate}</Text>
      <TouchableOpacity style={styles.containerButton} onPress={handleViewPress}>
        <Text style={styles.titleButton}>Ver</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostImages;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(18,39,113,255)",
    borderRadius: 20,
    marginBottom: 12, 
    padding: 16
  },
  title: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12
  },
  date: {
    color: "#ffffff"
  },
  containerButton: {
    alignItems: "flex-end"
  },
  titleButton: {
    fontWeight: "bold"
  }
})
