import React from 'react'
import {StyleSheet, Text, View} from "react-native";
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import data from '../utils/data'

const CarouselCards = () => {
    const [index, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)

    return (
        <View>
            <Text style={styles.header}>5G Xenon</Text>
            <Carousel
                layout="stack"
                layoutCardOffset={9}
                ref={isCarousel}
                data={data}
                renderItem={CarouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                onSnapToItem={(index) => setIndex(index)}
                useScrollView={true}
            />
            <Pagination
                dotsLength={data.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: 'rgba(6,17,253,0.94)'
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                tappableDots={true}
            />
            <View style={styles.button}>
                <View style={{flexDirection:"row",justifyContent:"space-between",borderBottomWidth:0.8,borderBottomColor:"white",paddingBottom:8,paddingTop:5}}>
                    <Text style={styles.title}>
                        LOCATION :
                    </Text>
                    <Text style={styles.title}>
                        Shop
                    </Text>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",borderBottomWidth:0.8,borderBottomColor:"white",paddingBottom:8,paddingTop:5}}>
                    <Text style={styles.title}>
                        AREA :
                    </Text>
                    <Text style={styles.title}>
                        Area 1
                    </Text>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",borderBottomWidth:0.8,borderBottomColor:"white",paddingBottom:8,paddingTop:5}}>
                    <Text style={styles.title}>
                        PRICE :
                    </Text>
                    <Text style={styles.title}>
                        Kshs. 90.00
                    </Text>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",borderBottomWidth:0.8,borderBottomColor:"white",paddingBottom:8,paddingTop:5}}>
                    <Text style={styles.title}>
                        PART NUMBER :
                    </Text>
                    <Text style={styles.title}>
                        5G-2019525125
                    </Text>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",borderBottomWidth:0.8,borderBottomColor:"white",paddingBottom:8,paddingTop:5}}>
                    <Text style={styles.title}>
                        STOCK :
                    </Text>
                    <Text style={styles.title}>
                        60
                    </Text>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",borderBottomWidth:0.8,borderBottomColor:"white",paddingBottom:8,paddingTop:5}}>
                    <Text style={styles.title}>
                        DEFECT :
                    </Text>
                    <Text style={styles.title}>
                        No
                    </Text>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",borderBottomWidth:0.8,borderBottomColor:"white",paddingBottom:8,paddingTop:5}}>
                    <Text style={styles.title}>
                        For :    Volkhan Gen 54525hdhduy
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color:"#ffffff",
        fontWeight:"bold",
        flex:1,
        paddingLeft:30
    },
    button: {
        borderRadius:30,
        width:310,
        height:280,
        alignSelf:"center",
        backgroundColor:"#895ca0",
        justifyContent:"center",
        alignItems:"center",
        marginTop:5,
    },
    header: {
        color: "#222",
        fontSize: 20,
        fontWeight: "bold",
        marginLeft:70,
        marginBottom:10
    },
});


export default CarouselCards
