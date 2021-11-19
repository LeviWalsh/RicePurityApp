import React, {useState} from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import { CheckBox } from 'react-native-elements';

import colors from '../config/colors';
import AppText from './AppText';


function QuizQuestion({question, onPress}) {
    const [isSelected, setSelection] = useState(false);

    
    return (
        <TouchableHighlight 
            onPress={onPress}
        >
        <View style={styles.container}>
            <View style={styles.detailsContainer}>
            <CheckBox
            // https://reactnativeelements.com/docs/checkbox/
                title={question}
                // value={isSelected}
                // onValueChange={setSelection}
                style={styles.checkbox}
                onPress={onPress}
            />
            </View>
        </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white,
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: "center",
        flex: 1
    },
    checkbox: {
        alignSelf: "center",
      },
})

export default QuizQuestion;