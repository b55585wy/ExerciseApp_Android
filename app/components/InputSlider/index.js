// app/components/InputSlider/index.js
import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const InputSlider = ({ value = 65, onValueChange }) => {
  return (
    <View style={styles.inputSlider}>
      <Text style={styles.text}>Weight</Text>
      <View style={styles.slider}>
        <View style={styles.frame}>
          <View style={styles.frame1} />
          <LinearGradient 
            style={styles.vector} 
            locations={[0,1]} 
            colors={['#9bb168','rgba(155, 177, 104, 0)']} 
            useAngle={true} 
            angle={-90} 
          />
          <View style={styles.freudPsyche} />
        </View>
      </View>
      <View style={styles.frame2}>
        <Text style={[styles.kg, styles.kgTypo]}>50kg</Text>
        <Text style={[styles.kg1, styles.kgTypo]}>{value}kg</Text>
        <Text style={[styles.kg2, styles.kgTypo]}>100kg</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  kgTypo: {
    textAlign: "center",
    color: "#736b66",
    fontSize: 16,
    top: 0,
    position: "absolute"
  },
  text: {
    fontSize: 14,
    color: "#4f3422",
    textAlign: "left",
    fontFamily: "Urbanist-ExtraBold",
    fontWeight: "800"
  },
  frame1: {
    left: 0,
    width: 170,
    backgroundColor: "#9bb167",
    top: 0,
    position: "absolute",
    height: 8,
    borderRadius: 1234
  },
  vector: {
    top: -8,
    left: 55,
    width: 128,
    height: 24,
    opacity: 0.64,
    backgroundColor: "transparent",
    position: "absolute",
    borderRadius: 1234
  },
  freudPsyche: {
    marginTop: -16,
    marginLeft: -16.5,
    top: "50%",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 4,
    width: 32,
    height: 32,
    overflow: "hidden",
    left: "50%",
    backgroundColor: "#9bb167",
    position: "absolute",
    borderRadius: 1234
  },
  frame: {
    backgroundColor: "#fff",
    width: 343,
    height: 8,
    borderRadius: 1234
  },
  slider: {
    alignItems: "center"
  },
  kg: {
    left: -7,
    fontFamily: "Urbanist-SemiBold",
    fontWeight: "600",
    textAlign: "center",
    color: "#736b66",
    fontSize: 16
  },
  kg1: {
    marginLeft: -19.5,
    textAlign: "center",
    color: "#736b66",
    fontSize: 16,
    left: "50%",
    fontFamily: "Urbanist-ExtraBold",
    fontWeight: "800"
  },
  kg2: {
    right: -9,
    fontFamily: "Urbanist-SemiBold",
    fontWeight: "600",
    textAlign: "center",
    color: "#736b66",
    fontSize: 16
  },
  frame2: {
    alignSelf: "stretch",
    height: 17
  },
  inputSlider: {
    flex: 1,
    width: "100%",
    gap: 12
  }
});

export default InputSlider;