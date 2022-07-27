import {Image, Text, TextInput, View, StyleSheet,TouchableOpacity} from "react-native";
import React from 'react';
import NativeSafeAreaView from "react-native-safe-area-context/src/specs/NativeSafeAreaView";
import DataContext from "../context/DataContext";
import authStorage from "../utils/authStorage";

export default function SignIn ({navigation}) {
    const {setLogged} = React.useContext(DataContext);
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");
    const handleSignIn = async () => {
        await setLogged(true);
        await authStorage.storeAuthToken("123")
    }
    return (
            <NativeSafeAreaView>
                <Image source={require("../../assets/unnamed.jpg")} style={{alignSelf:"center", width:200, height:200,borderRadius:4,marginTop:30}} />
                <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center"}}>
                    Manage products from Auto Flow
                </Text>
                <View style={{paddingHorizontal:16, paddingVertical:25}}>
                    <TextInput onChangeText={(e)=>setEmail(e)} style={styles.inputText} placeholder="Input Email"/>
                    <TextInput onChangeText={(e)=>setPassword(e)} style={styles.inputText} placeholder="Password" secureTextEntry/>
                    <TouchableOpacity onPress={handleSignIn} style={styles.button}>
                        <Text style={styles.title}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </NativeSafeAreaView>
    );
};

const styles = StyleSheet.create({
    inputText: {
        height: 48,
        borderBottomWidth:1,
        borderBottomColor:"#ccc",
        marginBottom:25
    },
    title: {
        fontSize:16
    },
    button: {
        borderRadius:30,
        width:165,
        height:45,
        alignSelf:"center",
        backgroundColor:"#FFE600",
        justifyContent:"center",
        alignItems:"center",
        marginTop:30
    }
})
