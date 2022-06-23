import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Entypo } from '@expo/vector-icons';

const AccordionButton = ({children = "Default Text", type = "primary"}) => {
    return (
        <TouchableOpacity>
            <View style={[styles.container, type === "primary" ? styles.primary : styles.secondary]}>
                <Text>{children}</Text>
                <Entypo name="chevron-right" size={24} color="black" />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    primary : {
        backgroundColor : "#dedede",
    },
    secondary : {
        borderTopWidth : 1,
        borderTopColor : "#dcdcdc",
        borderBottomWidth : 1,
        borderBottomColor : "#dcdcdc",
        marginTop : 20,
    }, 
    container : {
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-between",
        paddingHorizontal: 10,
        paddingVertical : 10,
        borderRadius : 5,
        fontSize : 20,
        marginBottom : 10,
    }
})

export default AccordionButton;