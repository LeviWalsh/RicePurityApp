import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Screen from '../components/Screen';

function QuizScreen(props) {
  return (
    <Screen style={styles.container}>
        <Text>
            {"Hello World"}
        </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default QuizScreen;