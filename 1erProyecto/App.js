import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import Header from "./src/components/Header";
import Timer from "./src/components/Timer";
import { Audio } from "expo-av";

const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");
  const [option, setOption] = useState("Trabajo");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    setIsWorking(option === "Trabajo" ? true : false);

    if (time === 0) {
      setIsActive(false);
      setTime(isWorking ? 1500 : option === "Descanso Corto" ? 300 : 900);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleStartStop = () => {
    playSound();
    setIsActive(!isActive);
  };

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/button-click-off-click.mp3")
    );
    await sound.playAsync();
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors[currentTime] }]}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
          paddingTop: (Platform.OS = "android" && 30),
        }}
      >
        <Text style={styles.text}>
          {isWorking ? "Trabajando" : "Descansando"}
        </Text>
        <Header
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          setTime={setTime}
          setOption={setOption}
        />
        <Timer time={time} />
        <TouchableOpacity style={styles.button} onPress={handleStartStop}>
          <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>
            {isActive ? "PARAR" : "INICIAR"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 25,
  },
  button: {
    backgroundColor: "#333333",
    padding: 15,
    marginTop: 15,
    borderRadius: 15,
    alignItems: "center",
  },
});
