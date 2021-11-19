import React, {useState} from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import { CheckBox } from 'react-native-elements';

import colors from '../config/colors';
import AppText from './AppText';


function QuizQuestion({question, onPress}) {
    const [isSelected, setSelection] = useState(false);


    return (
            <CheckBox
            // https://reactnativeelements.com/docs/checkbox/
                title={question}
                // value={isSelected}
                // onValueChange={setSelection(true)}
                // checked={true}
                style={styles.checkbox}
                onPress={() => console.log("deez")}
            />
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        // padding: 15,
        // backgroundColor: colors.white,
    },
    detailsContainer: {
        marginLeft: 4,
        justifyContent: "center",
        flex: 1
    },
    checkbox: {
        alignSelf: "center",
      },
})

export default QuizQuestion;