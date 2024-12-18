import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import colors from '../assets/themes/color';
import typography from '../assets/themes/typography';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Mental Health Metrics */}
      <View style={styles.metricsContainer}>
        <Text style={styles.sectionTitle}>Mental Health Metrics</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {/* Freud Score Card */}
          <View style={[styles.metricCard, { backgroundColor: colors.primary }]}>
            <View style={styles.cardHeader}>
              <FontAwesome5 name="heart" size={20} color="white" />
              <Text style={styles.cardTitle}>Freud Score</Text>
            </View>
            <View style={styles.scoreContainer}>
              <Text style={styles.scoreText}>80</Text>
              <Text style={styles.scoreLabel}>Healthy</Text>
            </View>
          </View>

          {/* Mood Card */}
          <View style={[styles.metricCard, { backgroundColor: '#FF9F5A' }]}>
            <View style={styles.cardHeader}>
              <FontAwesome5 name="smile" size={20} color="white" />
              <Text style={styles.cardTitle}>Mood</Text>
            </View>
            <Text style={styles.moodText}>Sad</Text>
            <View style={styles.moodGraph}>
              {/* Add your mood graph components here */}
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Mindfulness Tracker */}
      <View style={styles.trackerContainer}>
        <Text style={styles.sectionTitle}>Mindfulness Tracker</Text>
        <View style={styles.trackerCard}>
          <View style={styles.trackerInfo}>
            <FontAwesome5 name="clock" size={24} color={colors.primary} />
            <View style={styles.trackerTexts}>
              <Text style={styles.trackerTitle}>Mindful Hours</Text>
              <Text style={styles.trackerValue}>2.5h/8h Today</Text>
            </View>
          </View>
          <View style={styles.trackerGraph}>
            {/* Add your tracker graph component here */}
          </View>
        </View>
      </View>

      {/* AI Therapy Chatbot */}
      <View style={styles.chatbotContainer}>
        <Text style={styles.sectionTitle}>AI Therapy Chatbot</Text>
        <Pressable style={styles.chatbotCard}>
          <View style={styles.chatbotStats}>
            <Text style={styles.conversationCount}>2,541</Text>
            <Text style={styles.conversationLabel}>Conversations</Text>
            <Text style={styles.monthStats}>83 left this month</Text>
          </View>
          <View style={styles.chatbotImage}>
            {/* Add your robot image here */}
          </View>
          <Text style={styles.proLabel}>Go Pro, Now!</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
    padding: 16,
  },
  sectionTitle: {
    fontSize: typography.presets.h2.fontSize,
    fontWeight: typography.presets.h2.fontWeight,
    marginBottom: 12,
    color: colors.text.primary,
  },
  metricsContainer: {
    marginBottom: 24,
  },
  metricCard: {
    width: 160,
    height: 180,
    borderRadius: 20,
    padding: 16,
    marginRight: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  cardTitle: {
    color: 'white',
    fontSize: typography.presets.bodySmall.fontSize,
  },
  scoreContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
  },
  scoreLabel: {
    color: 'white',
    fontSize: typography.presets.bodySmall.fontSize,
  },
  trackerContainer: {
    marginBottom: 24,
  },
  trackerCard: {
    backgroundColor: colors.background.secondary,
    borderRadius: 20,
    padding: 16,
  },
  trackerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  trackerTexts: {
    flex: 1,
  },
  trackerTitle: {
    fontSize: typography.presets.body.fontSize,
    color: colors.text.primary,
  },
  trackerValue: {
    fontSize: typography.presets.bodySmall.fontSize,
    color: colors.text.secondary,
  },
  chatbotContainer: {
    marginBottom: 24,
  },
  chatbotCard: {
    backgroundColor: '#4A4A4A',
    borderRadius: 20,
    padding: 16,
    height: 200,
  },
  chatbotStats: {
    flex: 1,
  },
  conversationCount: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
  },
  conversationLabel: {
    fontSize: typography.presets.body.fontSize,
    color: 'white',
  },
  monthStats: {
    fontSize: typography.presets.bodySmall.fontSize,
    color: 'white',
    opacity: 0.7,
  },
  proLabel: {
    fontSize: typography.presets.bodySmall.fontSize,
    color: colors.primary,
    textAlign: 'right',
  },
});
