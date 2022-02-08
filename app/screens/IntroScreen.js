import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';

function IntroScreen({navigation}) {
  return (
    <Screen style={styles.container}>

        <View style={styles.top}>
            <Image 
                style={styles.logo}
                source={require('../../assets/LogoWide.png')}
            />
            
            <AppText style={styles.backgroundText}>
                {"\nThe Rice Purity test was created in 1924 at Rice University as a way for entering students to bond. Now it's used by friends to learn more about each other."}
            </AppText>
        </View>
        
        

        <View style={styles.bottom}>
            <AppText style={styles.cautionWord}>
                {"Caution:"}
            </AppText>  

            <AppText style={styles.cautionText}>
                {"This is not a bucket list. Completion of all items on this test will likely result in death."}
            </AppText>
            <AppButton 
                title={"Start Quiz"}
                onPress={() => navigation.navigate('Quiz')}
            />
        </View>

    </Screen>

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
    container: {
        backgroundColor: "white",
    },
    bottom: {
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 20,
        width: "100%"
    },
    top: {
        flex: 1,
        justifyContent: "flex-start",
        marginTop: 20,
        width: "100%"
    },
    logo: {
        width: '100%',
        height: undefined,
        aspectRatio: 10,
    }
});

export default IntroScreen;