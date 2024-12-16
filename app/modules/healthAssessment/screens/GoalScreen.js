import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Redirect } from 'expo-router';

export default function GoalScreen() {
  const [username, setUsername] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (submitted) return <Redirect href="../../main/screens/HomeScreen" />;

  return (
    <View>
      <Text>Enter your name to continue:</Text>
      <TextInput
        placeholder="Name"
        value={username}
        onChangeText={setUsername}
        style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
      />
      <Button title="Submit" onPress={() => setSubmitted(true)} disabled={!username} />
    </View>
  );
}
