import React, {useState} from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { CheckBox } from 'react-native-elements';

import Screen from '../components/Screen';
import AppText from '../components/AppText';


function QuizScreen(props) {
  const [isChecked, setIsChecked] = useState([]);

  const renderItem = ({ item }) => {
	const boxy = isChecked.includes(item.id);
    return (
        <CheckBox
            // https://reactnativeelements.com/docs/checkbox/
                title={item.question}
                checked={boxy}
                style={styles.checkbox}
                onPress={() => setIsChecked(isChecked => [...isChecked, item.id])}
        />
    );
  };

    return (
    <Screen style={styles.container}>
        <AppText>
            {"Click on every item you have done.\nMPS stands for Member of the Preferred Sex."}
            {"\n\n"}
			{100 - isChecked.length}
        </AppText>
        <FlatList
            data={questions}
            keyExtractor={q => q.id.toString()}
            renderItem={renderItem}
        />
    </Screen>
  );
}

const styles = StyleSheet.create({
    checkbox: {
        alignSelf: "center",
      },
});

const questions = [
	{
		id: 1, 
		question: "1. Held hands romantically?",
	},
	{
		id: 2,
		question: "2. Been on a date?",
	},
	{
		id: 3,
		question: "3. Been in a relationship?",
	},
	{
		id: 4,
		question: "4. Danced without leaving room for Jesus?",
	},
	{
		id: 5,
		question: "5. Kissed a non-family member", 
	},
	{
		id: 6,
		question: "6. Kissed a non-family member on the lips?", 
	},
	{
		id: 7,
		question: "7. French kissed?", 
	},
	{
		id: 8,
		question: "8. French kissed in public?", 
	},
	{
		id: 9,
		question: "9. Kissed on the neck?", 
	},
	{
		id: 10,
		question: "10. Kissed horizontally?",
	},
	{
		id: 11,
		question: "11. Given or received a hickey?", 
	},
	{
		id: 12,
		question: "12. Kissed or been kissed on the breast?", 
	},
	{
		id: 13,
		question: "13. Kissed someone below the belt?", 
	},
	{
		id: 14,
		question: "14. Kissed for more than two hours consecutively?", 
	},
	{
		id: 15,
		question: "15. Played a game involving stripping?",
	},
	{
		id: 16,
		question: "16. Seen or been seen by another person in a sensual context?",
	},
	{
		id: 17,
		question: "17. Masturbated?", 
	},
	{
		id: 18,
		question: "18. Masturbated to a picture or video?", 
	},
	{
		id: 19,
		question: "19. Masturbated while someone else was in the room?", 
	},
	{
		id: 20,
		question: "20. Been caught masturbating?",
	},
	{
		id: 21,
		question: "21. Masturbated with an inanimate object?", 
	},
	{
		id: 22,
		question: "22. Seen or read pornographic material?",
	}, 
	{
		id: 23,
		question: "23. Massaged or been massaged sensually?"
	},
	{
		id: 24,
		question: "24. Gone through the motions ofintercourse while fully dressed?",
	},
	{
		id: 25,
		question: "25. Undressed or been undressed by a MPS (member of the preferred sex)?",
	},
	{
		id: 26,
		question: "26. Showered with a MPS?",
	},
	{
		id: 27,
		question: "27. Fondled or had your butt cheeks fondled?",
	},
	{
		id: 28,
		question: "28. Fondled or had your breasts fondled?",
	},
	{
		id: 29,
		question: "29. Fondled or had your genitals fondled?",
	},
	{
		id: 30,
		question: "30. Had or given 'blue balls'?", 
	},
	{
		id: 31,
		question: "31. Had an orgasm due to someone else’s manipulation?",
	},
	{
		id: 32,
		question: "32. Sent a sexually explicit text or instant message?",
	},
	{
		id: 33,
		question: "33. Sent or received sexually explicit photographs?",
	},
	{
		id: 34,
		question: "34. Engaged in sexually explicit activity over video chat?",
	},
	{
		id: 35,
		question: "35. Cheated on a significant other during a relationship?",
	},
	{
		id: 36,
		question: "36. Purchased contraceptives?",
	},
	{
		id: 37,
		question: "37. Engaged in fellatio?",
	},
	{
		id: 38,
		question: "38. Engaged in cunnilingus?",
	},
	{
		id: 39,
		question: "39. Ingested someone else’s genital secretion?",
	},
	{
		id: 40,
		question: "40. Used a sex toy with a partner?",
	},
	{
		id: 41,
		question: "41. Spent the night with a MPS?",
	},
	{
		id: 42,
		question: "42. Been walked in on while engaging in a sexual act?",
	},
	{
		id: 43,
		question: "43. Kicked a roommate out to commit a sexual act?",
	},
	{
		id: 44,
		question: "44. Ingested alcohol in a non-religious context?",
	},
	{
		id: 45,
		question: "45. Played a drinking game?",
	},
	{
		id: 46,
		question: "46. Been drunk?",
	},
	{
		id: 47,
		question: "47. Faked sobriety to parents or teachers?",
	},
	{
		id: 48,
		question: "48. Had severe memory loss due to alcohol?",
	},
	{
		id: 49,
		question: "49. Used tobacco?",  
	},
	{
		id: 50,
		question: "50. Used marijuana?",
	},
	{
		id: 51,
		question: "51. Used a drug stronger than marijuana?",
	},
	{
		id: 52,
		question: "52. Used methamphetamine, crack cocaine, PCP, horse tranquilizers or heroin?",
	},
	{
		id: 53,
		question: "53. Been sent to the office of a principal, dean or judicial affairs representative for a disciplinary infraction?",
	},
	{
		id: 54,
		question: "54. Been put on disciplinary probation or suspended?",
	},
	{
		id: 55,
		question: "55. Urinated in public?",
	},
	{
		id: 56,
		question: "56. Gone skinny-dipping?",
	},
	{
		id: 57,
		question: "57. Gone streaking?",
	},
	{
		id: 58,
		question: "58. Seen a stripper?",
	},
	{
		id: 59,
		question: "59. Had the police called on you?",
	},
	{
		id: 60,
		question: "60. Run from the police?",
	},
	{
		id: 61,
		question: "61. Had the police question you?",
	},
	{
		id: 62,
		question: "62. Had the police handcuff you?",
	},
	{
		id: 63,
		question: "63. Been arrested?",
	},
	{
		id: 64,
		question: "64. Been convicted of a crime?",
	},
	{
		id: 65,
		question: "65. Been convicted of a felony?",
	},
	{
		id: 66,
		question: "66. Committed an act of vandalism?",
	},
	{
		id: 67,
		question: "67. Had sexual intercourse?",
	},
	{
		id: 68,
		question: "68. Had sexual intercourse three or more times in one night?", 
	},
	{
		id: 69,
		question: "69. ?",
	},
	{
		id: 70,
		question: "70. Had sexual intercourse 10 or more times?", 
	},
	{
		id: 71,
		question: "71. Had sexual intercourse in four or more positions?",
	},
	{
		id: 72,
		question: "72. Had sexual intercourse with a stranger or person you met within 24 hours?",
	},
	{
		id: 73,
		question: "73. Had sexual intercourse in a motor vehicle?",
	},
	{
		id: 74,
		question: "74. Had sexual intercourse outdoors?",
	},
	{
		id: 75,
		question: "75. Had sexual intercourse in public?",
	},
	{
		id: 76,
		question: "76. Had sexual intercourse in a swimming pool or hot tub?",
	},
	{
		id: 77,
		question: "77. Had sexual intercourse in a bed not belonging to you or your partner?",
	},
	{
		id: 78,
		question: "78. Had sexual intercourse while you or your partner’s parents were in the same home?",
	},
	{
		id: 79,
		question: "79. Had sexual intercourse with non-participating third party in the same room?",
	},
	{
		id: 80,
		question: "80. Joined the mile high club?",
	},
	{
		id: 81,
		question: "81. Participated in a 'booty call' with a partner whom you were not in a relationship with?",
	},
	{
		id: 82,
		question: "82 Traveled 100 or more miles for the primary purpose of sexual intercourse?",
	},
	{
		id: 83,
		question: "83. Had sexual intercourse with a partner with a 3 or more year age difference?",
	},
	{
		id: 84,
		question: "84. Had sexual intercourse with a virgin?",
    },
    {
		id: 85,
		question: "85. Had sexual intercourse without a condom?",
	},
	{
		id: 86,
		question: "86. Had a STI test due to reasonable suspicion?",
	},
	{
		id: 87,
		question: "87. Had a STI?",
	},
	{
		id: 88,
		question: "88. Had a threesome?",
	},
	{
		id: 89,
		question: "89. Attended an orgy?",
	},
	{
		id: 90,
		question: "90. Had two or more distinct acts of sexual intercourse with two or more people within 24 hours?",
	},
	{
		id: 91,
		question: "91. Had sexual intercourse with five or more partners?",
	},
	{
		id: 92,
		question: "92. Been photographed or filmed during sexual intercourse by yourself or others?",
	},
	{
		id: 93,
		question: "93. Had period sex?",
	},
	{
		id: 94,
		question: "94. Had anal sex?",
	},
	{
		id: 95,
		question: "95. Had a pregnancy scare?",
	},
	{
		id: 96,
		question: "96. Impregnated someone or been impregnated?",
	},
	{
		id: 97,
		question: "97. Paid or been paid for a sexual act?",
	},
	{
		id: 98,
		question: "98. Committed an act of voyeurism?",
	},
	{
		id: 99,
		question: "99. Committed an act of incest?",
	},
	{
		id: 100,
		question: "100. Engaged in bestiality?"
	},
]

export default QuizScreen;