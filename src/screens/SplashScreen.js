import {View, Text, StyleSheet, Button} from 'react-native'

const SplashScreen = ({onRestartGame, gameResult}) => {
    const {container, title, buttonContainer} = styles

    return(
        <View style={container}>
            <Text style={title}>Game over! {gameResult}!</Text>
            <View style={buttonContainer}>
                <Button onPress={onRestartGame} title={'Restart Game'}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '77%',
        height: '50%',
        backgroundColor: '#77c3ec',
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 30,
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 125
    },
})

export default SplashScreen