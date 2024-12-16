import React from 'react';
import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';

export default function IntroScreen1() {
  return (
    <View>
      <Text>Introduction - Page 1</Text>
      <Link href="./IntroScreen2">
        <Button title="Next" />
      </Link>
    </View>
  );
}
