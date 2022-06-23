import { FlatList, StyleSheet, Text, View } from "react-native"
import ListItem from "./ListItem";

const ExploreList = ({title = "Explore List", data}) => {
    const renderItem = ({item}) => <ListItem title={item.title} subtitle={item.description} image={item.image} />    

    return (
        <View>
            <Text style={styles.mainTitle}>{title}</Text>
            <FlatList 
                data={data}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainTitle : {
        fontSize: 25,
        fontWeight : '500',
        marginVertical : 10,
    }
})

export default ExploreList;