import React, {useContext} from "react";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from "./src/screens/signin";
import Scan from "./src/screens/scan";
import ProductDetails from "./src/screens/productDetails";
import Sale from "./src/screens/sale";
import DataContext, {DataProvider} from "./src/context/DataContext";
import authStorage from "./src/utils/authStorage";
import {ActivityIndicator, View} from "react-native";

const appTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background:"#fff"
    }
}

const Stack = createNativeStackNavigator();

export default function App() {
    const { logged } = useContext(DataContext);
    const [loading,setLoading] = React.useState(true)
    const [user,setUser] = React.useState(false);
    console.log(logged);
    React.useEffect(()=>{
        async function getUser() {
           const token = await authStorage.getAuthToken();
/*           await authStorage.removeAuthToken();*/
            console.log(token);
            if (token) {
                setUser(true);
                setLoading(false)
            }
        }
        getUser();
    },[])

  return (
      <DataProvider>
      <NavigationContainer theme={appTheme}>
        <Stack.Navigator>
            {user ? (
                <>
                    <Stack.Screen name="Scan" component={Scan} />
                    <Stack.Screen name="Product" component={ProductDetails} />
                    <Stack.Screen name="Sale" component={Sale} />
                </>
            ):(
                <>
                    <Stack.Screen name="Login" component={SignIn} options={{headerShown:false}} />
                </>
            )}
        </Stack.Navigator>
      </NavigationContainer>
      </DataProvider>
  );
}
