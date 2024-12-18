import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import { Link } from 'expo-router';

const ages = Array.from({ length: 83 }, (_, i) => i + 16); // 16-98岁

export default function AgeScreen() {
  const [selectedAge, setSelectedAge] = useState(18);
  const flatListRef = useRef(null);

  const renderAge = ({ item: age }) => {
    const isSelected = age === selectedAge;
    const opacity = Math.abs(age - selectedAge) <= 2 ? 1 : 0.3;

    return (
      <Pressable
        onPress={() => {
          setSelectedAge(age);
          flatListRef.current?.scrollToIndex({
            index: ages.indexOf(age),
            viewPosition: 0.5,
          });
        }}
        style={[
          styles.ageItem,
          isSelected && styles.selectedAge,
        ]}
      >
        <Text style={[
          styles.ageText,
          isSelected && styles.selectedAgeText,
          { opacity }
        ]}>
          {age}
        </Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header with Progress */}
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
      <Text style={styles.title}>What's your age?</Text>

      {/* Age Selector */}
      <View style={styles.ageSelectorContainer}>
        <FlatList
          ref={flatListRef}
          data={ages}
          renderItem={renderAge}
          keyExtractor={(item) => item.toString()}
          showsVerticalScrollIndicator={false}
          snapToAlignment="center"
          snapToInterval={70} // 调整以匹配项目高度
          decelerationRate="fast"
          initialScrollIndex={ages.indexOf(18)}
          getItemLayout={(data, index) => ({
            length: 70,
            offset: 70 * index,
            index,
          })}
          contentContainerStyle={styles.ageList}
        />
      </View>

      {/* Continue Button */}
      <Link href="/modules/healthAssessment/screens/HeightScreen" asChild>
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
    width: '60%',
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
    marginBottom: 40,
  },
  ageSelectorContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  ageList: {
    paddingVertical: 200, // 为了让选择器在中间
  },
  ageItem: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedAge: {
    backgroundColor: '#A4BE7B',
    borderRadius: 35,
    marginHorizontal: 20,
  },
  ageText: {
    fontSize: 40,
    color: '#4A321F',
    fontWeight: '500',
  },
  selectedAgeText: {
    color: '#FFFFFF',
    fontSize: 48,
    fontWeight: '600',
  },
  continueButton: {
    backgroundColor: '#4A321F',
    padding: 16,
    borderRadius: 100,
    alignItems: 'center',
    marginTop: 20,
  },
  continueButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
