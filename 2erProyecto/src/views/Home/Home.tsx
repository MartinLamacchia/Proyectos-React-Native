import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { View, StyleSheet } from 'react-native'
import { fetchApiNasa } from '../../utils/fetch'
import TodayImage from '../../components/TodayImage.tsx/TodayImage'
import { PostImage } from '../../types'

const Home = () => {

  const [todayImage, setTodayImage] = useState<PostImage>({})

  useEffect(() => {
    const loadTodayImage = async () => {
      try {
        const todayImageResponse = await fetchApiNasa()
        setTodayImage(todayImageResponse)
      } catch(error) {
        console.log(error);
        setTodayImage({})
      }
    }

    loadTodayImage().catch(null)
  }, [])
  

  return (
    <View style={styles.container}>
      <Header/>
      <TodayImage {...todayImage}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16
  }
})