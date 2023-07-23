import {View, Text, StyleSheet} from 'react-native'

const SplashScreen = () => {
    const {container, image} = styles

    return(
        <View style={container}>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
})

export default SplashScreen