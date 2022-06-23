import { StyleSheet, Text, View } from "react-native"
import AccordionButton from "../components/AccordionButton"
import Container from "../components/Container"
import Header from "../components/Header"

const Libraray = () => {
    return (
        <Container>
            <View style={styles.top}>
                <Text style={styles.topButton}>Edit</Text>
            </View>
            <Header>Libraray</Header>
            <AccordionButton type="secondary">Colections</AccordionButton>
        </Container>
    )
}

const styles = StyleSheet.create({
    top : {
        display: "flex",
        flexDirection : "row-reverse",
        paddingVertical : 20,
    }, 
    topButton : {
        color: "#777",
        fontSize: 20,
    }
})

export default Libraray