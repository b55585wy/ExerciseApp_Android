import React from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '../../utils/auth';
import { useRouter } from 'expo-router';
const SettingItem = ({ icon, title, value, onPress, isSwitch }) => (
  <TouchableOpacity
    style={styles.settingItem}
    onPress={onPress}
    disabled={isSwitch}
  >
    <View style={styles.leftContent}>
      {icon}
      <Text style={styles.itemTitle}>{title}</Text>
    </View>
    <View style={styles.rightContent}>
      {isSwitch ? (
        <Switch value={value} onValueChange={onPress} />
      ) : (
        <>
          {value && <Text style={styles.valueText}>{value}</Text>}
          <Text style={styles.chevron}>›</Text>
        </>
      )}
    </View>
  </TouchableOpacity>
);

const AccountSettings = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await auth.logout();
      router.replace('/(introduction)/welcome');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Account Settings</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>General Settings</Text>
          <SettingItem title="Notifications" onPress={() => { }} />
          <SettingItem title="Personal Information" onPress={() => { }} />
          <SettingItem title="Emergency Contact" value="15+" onPress={() => { }} />
          <SettingItem title="Language" value="English (EN)" onPress={() => { }} />
          <SettingItem
            title="Dark Mode"
            isSwitch={true}
            value={darkMode}
            onPress={(value) => setDarkMode(value)}
          />
          <SettingItem title="Invite Friends" onPress={() => { }} />
          <SettingItem title="Submit Feedback" onPress={() => { }} />
          <SettingItem title="Badges & Achievements" value="25+" onPress={() => { }} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Security & Privacy</Text>
          <SettingItem title="Security" onPress={() => { }} />
          <SettingItem title="Help Center" onPress={() => { }} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Danger Zone</Text>
          <SettingItem
            title="Close Account"
            onPress={() => { }}
            style={styles.dangerItem}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Log Out</Text>
          <SettingItem
            title="Log Out"
            onPress={handleLogout}
            style={styles.logoutItem}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    padding: 16,
    color: '#333',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginLeft: 16,
    marginBottom: 8,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
    marginBottom: 1,
    borderRadius: 12,
    marginHorizontal: 16,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 16,
    marginLeft: 12,
    color: '#333',
  },
  valueText: {
    color: '#666',
    marginRight: 8,
  },
  chevron: {
    fontSize: 18,
    color: '#666',
  },
  dangerItem: {
    backgroundColor: '#FEE2E2',
  },
  logoutItem: {
    backgroundColor: '#FFF',
  },
});

export default AccountSettings;
