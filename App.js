import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IntroScreen from './app/screens/IntroScreen';
import QuizScreen from './app/screens/QuizScreen';



export default function App() {
  return (
    <IntroScreen />
  );
}

const styles = StyleSheet.create({
  container: {},
});
