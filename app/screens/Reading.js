import Container from "../components/Container"
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, View } from "react-native";
import AccordionButton from "../components/AccordionButton";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ExploreList from "../components/ExplorList/ExplorList";
import books from '../data/Books.json';

const Reading = () => {
    return (
        <Container>
            <View style={styles.header}>
                <Text style={styles.headerText} >Reading now</Text>
                <FontAwesome name="user-circle-o" size={30} color="black"/>
            </View>

            <View>
                <Text style={styles.description}>
                    You're not reading anything right now.
                    find your next great read in Apple Books.
                </Text>
            </View>
            <View>
                <AccordionButton>
                    <MaterialCommunityIcons name="shopping" size={24} color="black" />
                    <Text 
                        style={{fontSize : 20, fontWeight : "500"}}
                    >Explore the Book Store</Text>
                </AccordionButton>
                <AccordionButton>
                <MaterialCommunityIcons name="headphones" size={24} color="black" />
                    <Text 
                        style={{fontSize : 20, fontWeight : "500"}}
                    >Explore Audiobooks</Text>
                </AccordionButton>
            </View>
            <ExploreList title="More to Explore" data={books.slice(0, 2)}/>
        </Container>
    )
}

const styles = StyleSheet.create({
    header : {
        display : "flex",
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between",
        borderBottomColor : "#ccc",
        borderBottomWidth : 1,
        paddingBottom: 15,
    },
    headerText : {
        fontSize: 35,
        fontWeight : "600",
    },
    description : {
        fontSize: 20,
        color: "#999",
        fontWeight : "500",
        paddingVertical : 30,
        paddingHorizontal : 20,
        textAlign : "center",
    }
})

export default Reading