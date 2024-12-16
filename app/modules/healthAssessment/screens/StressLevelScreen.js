// app/modules/healthAssessment/screens/StressLevelScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Animated } from 'react-native';
import { Link } from 'expo-router';
import Svg, { Path, Circle } from 'react-native-svg';

const moods = [
  { id: 1, label: 'Very Stressed', color: '#FF7B54', emoji: '😫' },
  { id: 2, label: 'I Feel Neutral', color: '#FFB26B', emoji: '😐' },
  { id: 3, label: 'Feeling Good', color: '#A4BE7B', emoji: '😊' },
  { id: 4, label: 'Very Relaxed', color: '#937DC2', emoji: '😌' },
];

export default function StressLevelScreen() {
  const [selectedMood, setSelectedMood] = useState(2);
  const rotateValue = new Animated.Value(0);

  const handleMoodSelect = (index) => {
    setSelectedMood(index);
    // 计算旋转角度
    const rotation = ((index - 2) / moods.length) * 360;
    Animated.spring(rotateValue, {
      toValue: rotation,
      useNativeDriver: true,
      tension: 50,
      friction: 10,
    }).start();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.backButton}>
          <Text style={styles.backButtonText}>⟨</Text>
        </View>
        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>
        <Text style={styles.skipText}>Skip</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>How would you{'\n'}describe your mood?</Text>

      {/* Selected Mood Display */}
      <Text style={styles.selectedMoodText}>
        {moods[selectedMood - 1].label}
      </Text>

      {/* Emoji Display */}
      <View style={styles.emojiContainer}>
        <Text style={styles.emoji}>{moods[selectedMood - 1].emoji}</Text>
      </View>

      {/* Mood Wheel */}
      <View style={styles.wheelContainer}>
        <Animated.View
          style={[
            styles.wheel,
            {
              transform: [
                {
                  rotate: rotateValue.interpolate({
                    inputRange: [0, 360],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              ],
            },
          ]}
        >
          {moods.map((mood, index) => (
            <Pressable
              key={mood.id}
              style={[
                styles.moodSegment,
                { backgroundColor: mood.color },
                { transform: [{ rotate: `${(index * 360) / moods.length}deg` }] },
              ]}
              onPress={() => handleMoodSelect(mood.id)}
            />
          ))}
          {/* Pointer */}
          <View style={styles.pointer} />
        </Animated.View>
      </View>

      {/* Continue Button */}
      <Link href="/modules/healthAssessment/screens/ResultScreen" asChild>
        <Pressable style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Continue →</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
    padding: 20,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0EAE7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 24,
    color: '#4A321F',
  },
  progressBar: {
    flex: 1,
    height: 6,
    backgroundColor: '#E5E5E5',
    borderRadius: 3,
    marginHorizontal: 20,
  },
  progressFill: {
    width: '80%',
    height: '100%',
    backgroundColor: '#A4BE7B',
    borderRadius: 3,
  },
  skipText: {
    fontSize: 16,
    color: '#4A321F',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#4A321F',
    textAlign: 'center',
    marginBottom: 40,
  },
  selectedMoodText: {
    fontSize: 24,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  emojiContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  emoji: {
    fontSize: 80,
  },
  wheelContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    marginBottom: 40,
  },
  wheel: {
    width: 300,
    height: 300,
    borderRadius: 150,
    position: 'relative',
  },
  moodSegment: {
    position: 'absolute',
    width: '50%',
    height: '50%',
    borderTopRightRadius: 150,
    borderBottomRightRadius: 150,
    transform: [{ translateX: 75 }],
    transformOrigin: 'left center',
  },
  pointer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#4A321F',
    transform: [{ translateX: -10 }, { translateY: -10 }],
  },
  continueButton: {
    backgroundColor: '#4A321F',
    padding: 16,
    borderRadius: 100,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});