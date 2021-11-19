import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

import colors from '../config/colors';
import defaultStyles from '../config/styles';

function AppText({children, style, ...otherProps}) {
    return (
        <Text style={[defaultStyles.text, style]} {...otherProps} >
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        color: colors.tomato,

        // Could also create AppText.ios.js and AppText.android.js if I wanted different behaviors of the components
        ...Platform.select({
            ios: {
                fontSize: 20,
                fontFamily: "Avenir",
            },
            android: {
                fontSize: 18,
                fontFamily: "Roboto",
            }
        })

        // solved with the Platform.select logic above but leaving this here as it is another solution
        // fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    }

})

export default AppText;