import {View, StyleSheet, Button} from "react-native";
import React from 'react';
import CarouselCards from "../components/CarouselCards";

export default function ProductDetails ({navigation}) {
    const handleRescan = async () => {
        await navigation.navigate("Scan")
    }
    const handleAccept = async () => {
        await navigation.navigate("Sale")
    }
    return (
        <View >
            <View style={styles.container}>
                <CarouselCards />
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-evenly",marginTop:10}}>
                <Button onPress={handleRescan} title="Rescan"/>
                <Button onPress={handleAccept} title="Accept"/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height:630,
        marginTop:10
    }
});
