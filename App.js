import React, {useContext} from "react";
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SignIn from "./src/screens/signin";
import Scan from "./src/screens/scan";
import ProductDetails from "./src/screens/productDetails";
import Sale from "./src/screens/sale";

import authStorage from "./src/utils/authStorage";
import {ActivityIndicator, View, StyleSheet} from "react-native";
import DataProvider, {DataContext} from "./src/context/DataContext";
import Home from "./src/screens/home";

const appTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "#fff",
    },
};

const Stack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

export default function App() {
    const Root = () => {
        const [loading, setLoading] = React.useState(false);
        const [user, setUser] = React.useState(false);
        const {setLogged, logged, userInfo, setUserInfo} = React.useContext(DataContext);
        React.useEffect(() => {
            async function getUser() {
                setLoading(true);
                const token = await authStorage.getAuthToken();
                console.log(token);
                /*                await authStorage.removeAuthToken();*/
                if (token !== null) {
                    setUser(true);
                    setLoading(false);
                } else {
                    setLoading(false);
                    setUser(false)
                }
            }

            getUser();
        }, [logged, userInfo, user]);

        if (loading) {
            return (
                <View style={[styles.container, styles.horizontal]}>
                    <ActivityIndicator size="large" color="#00ff00"/>
                </View>
            );
        }

        const AppNavigator = () => {
            return (
                <AppStack.Navigator>
                    <AppStack.Screen name="Home" component={Home}/>
                    <AppStack.Screen name="Scan" component={Scan}/>
                    <AppStack.Screen name="Product" component={ProductDetails}/>
                    <AppStack.Screen name="Sale" component={Sale}/>
                </AppStack.Navigator>
            );
        };

        return (
            <NavigationContainer theme={appTheme}>
                <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={user?"App":"Login"}>
                    <Stack.Screen name="App" component={AppNavigator}/>
                    <Stack.Screen
                        name="Login"
                        component={SignIn}
                        options={{headerShown: false}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    };

    return (
        <DataProvider>
            <Root/>
        </DataProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
});
