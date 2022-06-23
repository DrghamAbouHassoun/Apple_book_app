import { Image, StyleSheet, Text, View } from "react-native";

const ListItem = ({title, subtitle, image = "../assets/images/books/book1.png"}) => {
    return (
        <View style={styles.listItem}>
            <View style={styles.info}>
                <Text style={styles.title}>Brows Free Books</Text>
                <Text style={styles.subtitle}>Read for all ages</Text>
            </View>
            <View>
                <Image source={require("../../assets/images/books/book1.png" )}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem : {
        backgroundColor : "#fff",
        display : "flex",
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between",
        borderRadius: 20,
        overflow : "hidden",
        marginBottom : 20,
        elevation : 1
    },
    info : {
        display: "flex",
    },
    title : {
        fontSize : 20,
        fontWeight : "500",
        paddingLeft : 20
    },
    subtitle : {
        paddingLeft : 20
    }
})

export default ListItem;