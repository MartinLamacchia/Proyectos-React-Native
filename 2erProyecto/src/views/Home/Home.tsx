import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { View, StyleSheet } from 'react-native'
import { fetchApiNasa } from '../../utils/fetch'
import TodayImage from '../../components/TodayImage.tsx/TodayImage'
import { PostImage } from '../../types'
import { format, sub } from 'date-fns'
import LastFiveDaysImages from '../../components/LastFiveDaysImages'


const Home = () => {

  const [todayImage, setTodayImage] = useState<PostImage>({})
  const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>([])

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

    const loadLastFiveDaysImages = async () => {
      try {
        const date = new Date()
        const todaysDate = format(sub(date, {days: 1}), "yyyy-MM-dd")
        const fiveDaysAgoDate = format(sub(date, {days: 5}) ,"yyyy-MM-dd" )

        const lastFiveDaysImagesResponse = await fetchApiNasa(`&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`)
        setLastFiveDaysImages(lastFiveDaysImagesResponse)
      } catch(error) {
        console.log(error);
      }
    }

    loadTodayImage().catch(null)
    loadLastFiveDaysImages().catch(null)
  }, [])

  return (
    <View style={styles.container}>
      <Header/>
      <TodayImage {...todayImage}/>
      <LastFiveDaysImages postImages={lastFiveDaysImages}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "rgba(7,26,93,255)",
  }
})