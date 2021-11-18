import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors';
import AppText from './AppText';
import Swipable from 'react-native-gesture-handler/Swipeable';


function QuizQuestion({question, number, onPress}) {
    return (
        <TouchableHighlight 
            onPress={onPress}
            underlayColor= {}
        >
        <View style={styles.container}>
            {IconComponent}
            {image && <Image source={image} style={styles.image} />}
            <View style={styles.detailsContainer}>
                <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                {subTitle && <AppText style={styles.subTitle} numberOfLines={3}>{subTitle}</AppText>}
            </View>
            { showChevrons && <MaterialCommunityIcons style={styles.carrot} name="chevron-right" size={20} color={colors.medium} /> }
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
    carrot: {
        alignSelf: "center"
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: "center",
        flex: 1
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    title: {
        color: colors.black,
        fontWeight: "500",
    },
    subTitle: {
        color: colors.medium,
    }
})

export default QuizQuestion;