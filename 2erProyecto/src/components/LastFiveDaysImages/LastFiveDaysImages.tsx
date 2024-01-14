import React, { FC } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { PostImage as PostImageTypes } from '../../types'
import PostImages from '../PostImages'

const LastFiveDaysImages: FC<{postImages?: PostImageTypes[]}> = ({postImages}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ultimos 5 dias</Text>
      <ScrollView style={styles.content}>
        {
          postImages?.map(postImage => (
            <PostImages key={postImage.title} {...postImage}/>
          ))
        }
      </ScrollView>
    </View>
  )
}

export default LastFiveDaysImages

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginVertical: 8
  },
  title: {
    color: "#ffffff",
    fontSize: 16,
    marginBottom: 18
  },
  content: {
    paddingHorizontal: 24
  }
})