//import liraries
import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const staticInfo = {
  name: "Martin Lamacchia",
  uri: "https://images.pexels.com/photos/18422728/pexels-photo-18422728/free-photo-of-semihpalaz2023.jpeg?auto=compress&cs=tinysrgb&w=600"
}

// create a component
const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
      <Text>Header</Text>
      </View>
      <View style={styles.rigthContainer}>

      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" && 30,
  },
  leftContainer: {

  },
  rigthContainer: {
    
  }
});

//make this component available to the app
export default Header;
