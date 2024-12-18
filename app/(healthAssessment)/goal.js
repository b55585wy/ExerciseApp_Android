import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';

const goals = [
  { id: 1, icon: '😌', text: 'I want to reduce anxiety and stress' },
  { id: 2, icon: '🧘', text: 'I want to improve my breathing habits' },
  { id: 3, icon: '💪', text: 'I want to strengthen my core muscles' },
  { id: 4, icon: '🎯', text: 'I want to improve my posture' },
  { id: 5, icon: '🔍', text: 'I want to understand my body better' },
];

export default function GoalScreen() {
  const [selectedGoal, setSelectedGoal] = useState(1); // Default to anxiety reduction

  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <View style={styles.header}>
        <Text style={styles.backButton}>⟨</Text>
        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>
        <Text style={styles.skipButton}>Skip</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>What's your health goal{'\n'}for today?</Text>

      {/* Goals List */}
      <View style={styles.goalsList}>
        {goals.map((goal) => (
          <Pressable
            key={goal.id}
            style={[
              styles.goalItem,
              selectedGoal === goal.id && styles.selectedGoal
            ]}
            onPress={() => setSelectedGoal(goal.id)}
          >
            <Text style={styles.goalIcon}>{goal.icon}</Text>
            <Text style={styles.goalText}>{goal.text}</Text>
            <View style={[
              styles.radioButton,
              selectedGoal === goal.id && styles.radioButtonSelected
            ]} />
          </Pressable>
        ))}
      </View>

      {/* Continue Button */}
      <Link href="/modules/healthAssessment/screens/AgeScreen" asChild>
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
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  backButton: {
    fontSize: 24,
    color: '#4A321F',
  },
  skipButton: {
    fontSize: 16,
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
    width: '40%',
    height: '100%',
    backgroundColor: '#A4BE7B',
    borderRadius: 3,
  },
  title: {
    fontSize: 32,
    color: '#4A321F',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 40,
  },
  goalsList: {
    gap: 16,
  },
  goalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  selectedGoal: {
    backgroundColor: '#A4BE7B',
  },
  goalIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  goalText: {
    flex: 1,
    fontSize: 16,
    color: '#4A321F',
    fontWeight: '600',
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#4A321F',
  },
  radioButtonSelected: {
    backgroundColor: '#4A321F',
  },
  continueButton: {
    backgroundColor: '#4A321F',
    padding: 16,
    borderRadius: 100,
    alignItems: 'center',
    marginTop: 'auto',
  },
  continueButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
