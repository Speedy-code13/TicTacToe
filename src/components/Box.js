import React, {useState} from 'react'
import {Pressable, Text, StyleSheet, Image} from 'react-native'


const Box = (props) => {
    const {borderStyles, onBoxUpdate, index} = props

    const [state, setState] = useState("")

    const {box, textStyle} = styles

    return(
        <Pressable style={[box, borderStyles]} onPress={() => { setState(onBoxUpdate(index)) } }>
            <Text style={textStyle}>{state}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: 'white',
        fontSize: 70,
        fontWeight: 'bold',
    }
})

export default Box