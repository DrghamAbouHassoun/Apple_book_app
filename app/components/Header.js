import { StyleSheet, View, Text } from "react-native"

const Header = ({children}) => {
    return (
        <View>
            <Text style={styles.title}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title : {
        fontSize : 35,
        fontWeight : "600",
        display : "flex",
        justifyContent : "space-between",
        alignItems : 'center',
        width : "100%",
    }
})

export default Header