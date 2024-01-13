import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
      <Text style={styles.title}>Explorar</Text>
      </View>
      <View style={styles.rigthContainer}>
        <Image source={require('../../../assets/NASA_logo.svg.png')} style={styles.image}/>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: "center"
  },
  leftContainer: {
    flex: 1,
    alignItems: "flex-start"
  },
  title: {
    fontSize: 20,
    color: "#ffffff"
  },
  rigthContainer: {
    flex: 1,
    alignItems: "flex-end"
  },
  image: {
    width: 60,
    height: 60
  }
})