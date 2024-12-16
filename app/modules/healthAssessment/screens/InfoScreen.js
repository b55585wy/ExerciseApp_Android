// app/modules/healthAssessment/screens/InfoScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
import Slider from '@react-native-community/slider'; // 导入 Slider（没有导入滑条的时候会静止吗？）
import InputSlider from '../../../components/InputSlider';
export default function InfoScreen() {
  const [fullName, setFullName] = useState('');
  const [weight, setWeight] = useState(65);
  const [gender, setGender] = useState('');
  const [location, setLocation] = useState('');

  return (
    <View style={styles.container}>
      {/* Green Background */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile Setup</Text>
      </View>

      {/* Profile Image */}
      <View style={styles.profileContainer}>
        <View style={styles.profileImageWrapper}>
          <View style={styles.profileImage}>
            {/* Add image picker later */}
          </View>
          <Pressable style={styles.editButton}>
            <Text style={styles.editButtonText}>✏️</Text>
          </Pressable>
        </View>
      </View>

      {/* Form */}
      <View style={styles.form}>
        <Text style={styles.label}>Full Name</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputIcon}>👤</Text>
          <TextInput
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
            placeholder="Enter your full name"
          />
        </View>

        <Text style={styles.label}>Weight</Text>
        <View style={styles.weightContainer}>
          <Text style={styles.weightValue}>50kg</Text>

          <Slider
            style={styles.slider}
            minimumValue={50}           // 滑块最小值
            maximumValue={100}          // 滑块最大值
            step={1}                    // 每次滑动的步长
            value={weight}              // 当前体重
            onValueChange={(value) => setWeight(value)} // 更新体重
            minimumTrackTintColor="#A4BE7B" // 滑块左侧颜色
            maximumTrackTintColor="#E5E5E5" // 滑块右侧颜色
            thumbTintColor="#A4BE7B"        // 滑块按钮颜色
          />
          <Text style={styles.weightValue}>100kg</Text>
        </View>

        <Text style={styles.label}>Gender</Text>
        <Pressable style={styles.selector}>
          <Text style={styles.selectorIcon}>♀  </Text>
          <Text style={styles.selectorText}>Female</Text>
          <Text style={styles.selectorArrow}>▼</Text>
        </Pressable>

        <Text style={styles.label}>Location</Text>
        <Pressable style={styles.selector}>
          <Text style={styles.selectorIcon}>📍</Text>
          <Text style={styles.selectorText}>Tokyo, Japan</Text>
          <Text style={styles.selectorArrow}>▼</Text>
        </Pressable>
      </View>

      {/* Continue Button */}
      <Link href="/modules/healthAssessment/screens/GoalScreen" asChild>
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
    backgroundColor: '#fff',
  },
  header: {
    height: 200,
    backgroundColor: '#A4BE7B',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    padding: 20,
    paddingTop: 60,
  },
  headerText: {
    fontSize: 32,
    color: '#fff',
    fontWeight: '600',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: -50,
  },
  profileImageWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    backgroundColor: '#f0f0f0',
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#4A321F',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editButtonText: {
    fontSize: 16,
  },
  form: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A321F',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    padding: 12,
    marginBottom: 20,
  },
  inputIcon: {
    marginRight: 10,
    fontSize: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  weightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  weightValue: {
    width: 50,
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
  },
  slider: {
    flex: 1,
    height: 40,
  },
  currentWeightText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#4A321F',
    marginTop: 10,
  },
  selector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    padding: 12,
    marginBottom: 20,
  },
  selectorIcon: {
    marginRight: 10,
    fontSize: 20,
  },
  selectorText: {
    flex: 1,
    fontSize: 16,
    color: '#4A321F',
  },
  selectorArrow: {
    fontSize: 12,
    color: '#666',
  },
  continueButton: {
    backgroundColor: '#4A321F',
    margin: 20,
    padding: 16,
    borderRadius: 25,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});