// app/modules/healthAssessment/screens/HeightScreen.js
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import { Link } from 'expo-router';

// 生成身高范围 140cm - 200cm
const heights = Array.from({ length: 61 }, (_, i) => i + 140);

export default function HeightScreen() {
  const [selectedHeight, setSelectedHeight] = useState(170);
  const flatListRef = useRef(null);

  const renderHeight = ({ item: height }) => {
    const isSelected = height === selectedHeight;
    const opacity = Math.abs(height - selectedHeight) <= 2 ? 1 : 0.3;

    return (
      <Pressable
        onPress={() => {
          setSelectedHeight(height);
          flatListRef.current?.scrollToIndex({
            index: heights.indexOf(height),
            viewPosition: 0.5,
          });
        }}
        style={[
          styles.heightItem,
          isSelected && styles.selectedHeight,
        ]}
      >
        <Text style={[
          styles.heightText,
          isSelected && styles.selectedHeightText,
          { opacity }
        ]}>
          {height}
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
      <Text style={styles.title}>What's your height?</Text>

      {/* Height Display */}
      <View style={styles.displayContainer}>
        <Text style={styles.displayValue}>{selectedHeight}</Text>
        <Text style={styles.displayUnit}>cm</Text>
      </View>

      {/* Height Selector */}
      <View style={styles.heightSelectorContainer}>
        <View style={styles.tickMarks}>
          {/* 刻度线 */}
          {heights.map((height) => (
            <View 
              key={height} 
              style={[
                styles.tick,
                height === selectedHeight && styles.selectedTick
              ]} 
            />
          ))}
        </View>
        <FlatList
          ref={flatListRef}
          data={heights}
          renderItem={renderHeight}
          keyExtractor={(item) => item.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          snapToInterval={50}
          decelerationRate="fast"
          initialScrollIndex={heights.indexOf(170)}
          getItemLayout={(data, index) => ({
            length: 50,
            offset: 50 * index,
            index,
          })}
          contentContainerStyle={styles.heightList}
        />
      </View>

      {/* Continue Button */}
      <Link href="/modules/healthAssessment/screens/StressLevelScreen" asChild>
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
  displayContainer: {
    alignItems: 'center',
    marginBottom: 40,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  displayValue: {
    fontSize: 64,
    fontWeight: '600',
    color: '#4A321F',
  },
  displayUnit: {
    fontSize: 32,
    color: '#4A321F',
    marginLeft: 8,
    alignSelf: 'flex-end',
    marginBottom: 12,
  },
  heightSelectorContainer: {
    height: 100,
    marginVertical: 20,
  },
  tickMarks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    position: 'absolute',
    width: '100%',
    height: 40,
  },
  tick: {
    width: 2,
    height: 20,
    backgroundColor: '#E5E5E5',
  },
  selectedTick: {
    backgroundColor: '#A4BE7B',
    height: 30,
  },
  heightList: {
    paddingHorizontal: 150, // 为了让选择器在中间
  },
  heightItem: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heightText: {
    fontSize: 16,
    color: '#4A321F',
  },
  selectedHeightText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#A4BE7B',
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