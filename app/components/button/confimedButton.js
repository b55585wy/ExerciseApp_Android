import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import MonotoneArrowRightSm from "../../assets/icons/Monotone arrow right sm.svg";

const StartedButton = React.forwardRef(({ label, ...props }, ref) => {
  return (
    <Pressable ref={ref} {...props} style={[styles.buttonPrimaryIcon, styles.contentFlexBox]}>
      <View style={[styles.content, styles.contentFlexBox]}>
        <Text style={styles.text}>
          {label || 'Confirm'}
        </Text>
        <MonotoneArrowRightSm width={24} height={24} viewBox="0 0 24 24" fill="none" />
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  contentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  text: {
    fontSize: 18,
    letterSpacing: -0.1,
    fontWeight: "800",
    fontFamily: "Urbanist-ExtraBold",
    textAlign: "left",
    color: "#ffffff"
  },

  content: {
    gap: 12
  },
  buttonPrimaryIcon: {
    borderRadius: 1000,
    backgroundColor: "#4f3422",
    flex: 1,
    height: 56,
    paddingHorizontal: 24,
    paddingVertical: 16
  }
});

export default StartedButton;
