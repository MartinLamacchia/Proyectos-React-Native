import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { View, StyleSheet } from 'react-native'
import { fetchApiNasa } from '../../utils/fetch'

const Home = () => {

  const [todayImage, setTodayImage] = useState()

  useEffect(() => {
    const loadTodayImage = async () => {
      try {
        const todayImageResponse = await fetchApiNasa()
        setTodayImage(todayImageResponse)
      } catch(error) {
        console.log(error);
        setTodayImage(undefined)
      }
    }

    loadTodayImage().catch(null)
  }, [])

  console.log(todayImage);
  

  return (
    <View style={styles.container}>
      <Header/>
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