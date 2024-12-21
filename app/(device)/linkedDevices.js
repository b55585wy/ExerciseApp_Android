import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Alert,
  ScrollView,
  Platform,
  PermissionsAndroid
} from 'react-native';
// 使用react-native-ble-plx库而不是react-native-ble-manager 后者虽然新手友好，但是社区
import { BleManager } from 'react-native-ble-plx';
import colors from '../../assets/themes/color';
import Slider from '@react-native-community/slider';
const manager = new BleManager();

export default function LinkedDevices() {
  const [isScanning, setIsScanning] = useState(false);
  const [connectedDevice, setConnectedDevice] = useState(null);
  const [sliderValues, setSliderValues] = useState({
    motor: 0,
    pump: 0,
    inhale: 0,
    exhale: 0
  });

  useEffect(() => {
    const subscription = manager.onStateChange((state) => {
      if (state === 'PoweredOn') {
        subscription.remove();
      }
    }, true);

    return () => {
      subscription.remove();
      if (connectedDevice) {
        connectedDevice.cancelConnection();
      }
    };
  }, [connectedDevice]);

  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      const bluetoothScanPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
        {
          title: '蓝牙扫描权限',
          message: '应用需要蓝牙扫描权限来查找设备',
          buttonNeutral: '稍后询问',
          buttonNegative: '拒绝',
          buttonPositive: '允许',
        }
      );

      const bluetoothConnectPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
        {
          title: '蓝牙连接权限',
          message: '应用需要蓝牙连接权限来连接设备',
          buttonNeutral: '稍后询问',
          buttonNegative: '拒绝',
          buttonPositive: '允许',
        }
      );

      const locationPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: '位置权限',
          message: '应用需要位置权限来使用蓝牙功能',
          buttonNeutral: '稍后询问',
          buttonNegative: '拒绝',
          buttonPositive: '允许',
        }
      );

      return (
        bluetoothScanPermission === PermissionsAndroid.RESULTS.GRANTED &&
        bluetoothConnectPermission === PermissionsAndroid.RESULTS.GRANTED &&
        locationPermission === PermissionsAndroid.RESULTS.GRANTED
      );
    }
    return true;
  };

  const startScan = async () => {
    try {
      const permissionGranted = await requestPermissions();
      if (!permissionGranted) {
        Alert.alert('错误', '需要蓝牙权限才能继续');
        return;
      }

      setIsScanning(true);
      manager.startDeviceScan(null, null, (error, device) => {
        if (error) {
          console.error(error);
          setIsScanning(false);
          return;
        }

        // 查找名为 "SYNC" 的设备
        if (device.name === 'SYNC') {
          manager.stopDeviceScan();
          connectToDevice(device);
        }
      });

      // 5秒后停止扫描
      setTimeout(() => {
        manager.stopDeviceScan();
        setIsScanning(false);
      }, 5000);
    } catch (error) {
      console.error(error);
      setIsScanning(false);
    }
  };

  const connectToDevice = async (device) => {
    try {
      const connectedDevice = await device.connect();
      const discoveredDevice = await connectedDevice.discoverAllServicesAndCharacteristics();
      setConnectedDevice(discoveredDevice);
      Alert.alert('成功', `已连接到设备 ${device.name}`);
    } catch (error) {
      console.error(error);
      Alert.alert('错误', '连接设备失败');
    }
  };

  const sendCommand = async (command) => {
    if (!connectedDevice) {
      Alert.alert('错误', '请先连接设备');
      return;
    }

    try {
      await connectedDevice.writeCharacteristicWithResponseForService(
        'FF03', // 服务 UUID
        'FF03', // 特征 UUID
        Buffer.from(command).toString('base64')
      );
    } catch (error) {
      console.error(error);
      Alert.alert('错误', '发送命令失败');
    }
  };

  const applySettings = async () => {
    const { motor, pump, inhale, exhale } = sliderValues;

    // 转换滑块值为命令
    const motorCommand = [0x01, 0x03, Math.round(motor)];
    const pumpCommand = [0x01, 0x04, Math.round(pump)];
    const inhaleCommand = [0x01, 0x02, Math.round(inhale)];
    const exhaleCommand = [0x01, 0x01, Math.round(exhale)];

    try {
      await sendCommand(motorCommand);
      await sendCommand(pumpCommand);
      await sendCommand(inhaleCommand);
      await sendCommand(exhaleCommand);
      Alert.alert('成功', '设置已应用');
    } catch (error) {
      Alert.alert('错误', '应用设置失败');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>设备连接</Text>
      </View>

      <View style={styles.controlsContainer}>
        <Pressable
          style={styles.scanButton}
          onPress={startScan}
        >
          <Text style={styles.buttonText}>
            {isScanning ? '扫描中...' : '开始扫描'}
          </Text>
        </Pressable>

        <View style={styles.sliderContainer}>
          <Text>电机控制 ({Math.round(sliderValues.motor)})</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={255}
            value={sliderValues.motor}
            onValueChange={(value) =>
              setSliderValues(prev => ({ ...prev, motor: value }))
            }
          />
        </View>

        <View style={styles.sliderContainer}>
          <Text>泵控制 ({Math.round(sliderValues.pump)})</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={255}
            value={sliderValues.pump}
            onValueChange={(value) =>
              setSliderValues(prev => ({ ...prev, pump: value }))
            }
          />
        </View>

        <View style={styles.sliderContainer}>
          <Text>吸气时间 ({Math.round(sliderValues.inhale / 10)}s)</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            value={sliderValues.inhale}
            onValueChange={(value) =>
              setSliderValues(prev => ({ ...prev, inhale: value }))
            }
          />
        </View>

        <View style={styles.sliderContainer}>
          <Text>呼气时间 ({Math.round(sliderValues.exhale / 10)}s)</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            value={sliderValues.exhale}
            onValueChange={(value) =>
              setSliderValues(prev => ({ ...prev, exhale: value }))
            }
          />
        </View>

        <View style={styles.buttonGroup}>
          <Pressable
            style={styles.controlButton}
            onPress={() => sendCommand([0x01, 0x01, 0x01])}
          >
            <Text style={styles.buttonText}>开始</Text>
          </Pressable>

          <Pressable
            style={styles.controlButton}
            onPress={() => sendCommand([0x01, 0x00, 0x01])}
          >
            <Text style={styles.buttonText}>停止</Text>
          </Pressable>
        </View>

        <Pressable
          style={[styles.controlButton, { marginTop: 20 }]}
          onPress={applySettings}
        >
          <Text style={styles.buttonText}>应用设置</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  header: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text.primary,
  },
  controlsContainer: {
    padding: 16,
    gap: 20,
  },
  scanButton: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sliderContainer: {
    gap: 8,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 12,
  },
  controlButton: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
}); 