import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const Header = ({setTime, setCurrentTime, currentTime, setOption}) => {

  const options = ["Trabajo", "Descanso Corto", "Descanso Largo"]

  const handlePress = (index) => {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index)
    setOption(options[index])
    setTime(newTime * 60)
  }

  return (
    <View style={{flexDirection: "row"}}>
      {
        options.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => handlePress(index)} style={[styles.itemStyle, currentTime !== index && {borderColor: "transparent"}]}>
            <Text style={{ fontWeight: "bold", fontSize: 13}}>{item}</Text>
          </TouchableOpacity>
        ))
      }
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  itemStyle: {
    width: "33%",
    borderWidth: 3,
    padding: 5,
    borderRadius: 10,
    borderColor: "white",
    marginVertical: 20,
    alignItems: "center",
  }
})