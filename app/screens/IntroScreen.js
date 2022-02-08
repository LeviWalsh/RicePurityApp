import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';

function IntroScreen(props) {
  return (
    <ImageBackground
        style={styles.background}
        source={require("../../assets/background.jpg")}
    >

        {/* Put the logo up top */}
        
        <AppText style={styles.backgroundText}>
            {"\n\n\nThe Rice Purity test was created in 1924 at Rice University as a way for entering students to bond. Now it's used by many groups to learn more about each other."}
        </AppText>
        
        <AppText style={styles.cautionWord}>
            {"\nCaution:"}
        </AppText>  

        <AppText style={styles.cautionText}>
            {"This is not a bucket list. Completion of all items on this test will likely result in death."}
        </AppText>

        <View style={styles.bottom}>
            <AppButton title={"Start Quiz"} />
        </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        // justifyContent: "flex-end",
        alignItems: "center",
    },
    backgroundText: {
        margin: 10,
        textAlign: "center",
    },
    cautionText: {
        fontWeight: 'bold',
        textAlign: "center",
        margin: 10,

    },
    cautionWord: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
    },
    container: {},
    bottom: {
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 20,
        width: "100%"
    },
});

export default IntroScreen;