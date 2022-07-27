import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Scan ({navigation}) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('Not yet scanned')

    const askForCameraPermission = () => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })()
    }

    // Request Camera Permission
    useEffect(() => {
        askForCameraPermission();
    }, []);

    // What happens when we scan the bar code
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setText(data)
        console.log('Type: ' + type + '\nData: ' + data)
    };

    // Check permissions and return the screens
    if (hasPermission === null) {
        return (
            <View style={styles.container}>
                <Text>Requesting for camera permission</Text>
            </View>)
    }
    if (hasPermission === false) {
        return (
            <View style={styles.container}>
                <Text style={{ margin: 10 }}>No access to camera</Text>
                <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
            </View>)
    }
    const handleDetails = async () => {
            await navigation.navigate("Product")
    }

    return (
        <View style={styles.container}>
            {scanned ? <Text style={styles.maintext}>{text}</Text> : <View style={styles.barcodebox}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={{ height: 530, width: 530 }} />
            </View>}

            {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />}
            {scanned && <TouchableOpacity onPress={handleDetails} style={styles.button}>
                <Text style={styles.title}>
                    Get Details
                </Text>
            </TouchableOpacity>}

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    maintext: {
        fontSize: 16,
        margin: 20,
    },
    barcodebox: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 300,
        overflow: 'hidden',
        borderRadius: 30,
        backgroundColor: 'tomato'
    },
    button: {
        borderRadius:30,
        width:165,
        height:45,
        alignSelf:"center",
        backgroundColor:"#FFE600",
        justifyContent:"center",
        alignItems:"center",
        marginTop:60
    },
    title: {
        fontSize:16,
    }
});
