import React from 'react';
import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';

export default function IntroScreen2() {
  return (
    <View>
      <Text>Introduction - Page 2</Text>
      <Link href="../../healthAssessment/screens/GoalScreen">
        <Button title="Proceed to Health Assessment" />
      </Link>
    </View>
  );
}
