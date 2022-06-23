import { SafeAreaView, StyleSheet, ScrollView } from "react-native";

const Container = ({children}) => {
    return (
        <ScrollView>
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container : {
        paddingTop : 40,
        paddingHorizontal : 20
    }
})

export default Container;