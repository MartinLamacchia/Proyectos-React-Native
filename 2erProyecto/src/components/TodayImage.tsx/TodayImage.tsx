import React, { FC } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { PostImage, RootStackParams } from '../../types'
import { format } from 'date-fns'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
type PostImageNavigationProps = NativeStackNavigationProp<RootStackParams, "Detail">

const TodayImage: FC<PostImage> = ({date, title, url, explanation}) => {
  const {navigate} = useNavigation<PostImageNavigationProps>()

  const newDate = date ? format(new Date(date), "dd/MM/yyyy") : date

  const handleViewPress = () => {
    navigate('Detail', {title, date, url, explanation})
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: url}} style={styles.image}/>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{newDate}</Text>
      <TouchableOpacity style={styles.containerButton} onPress={handleViewPress}>
        <Text style={styles.titleButton}>Ver</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TodayImage

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c449d",
    marginVertical: 16,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16
  },
  imageContainer:{
  },
  image:{
    width: "100%",
    height: 190,
    borderWidth: 2,
    borderColor: "#ffffff",
    borderRadius: 32,
  },
  title: {
    color: "#ffffff",
    fontSize: 20,
    marginVertical: 12,
    fontWeight: "bold"
  },
  date: {
    color: "#ffffff",
    fontSize: 16,
  },
  containerButton:{
    alignItems: "flex-end"
  },
  titleButton:{
    fontSize:16,
    color: "#000000",
    fontWeight: "bold"
  }
})