import { Dimensions, StyleSheet, Text, View,TouchableOpacity, Image, Platform, FlatList } from 'react-native'
import React from 'react'
import { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
const {width, height} = Dimensions.get("window")
import { useFonts } from 'expo-font'
import { Icon } from '../constants/icons'

const Events = ({event}) => {
    const navigation = useNavigation()
  return (
    <View>
    <EventImage event={event} navigation={navigation}/>
    <EventItems event={event}/>
  </View>
  )
}


const EventImage=({event, navigation})=>{
    // console.log(event)
    return(
    <>
     <View style={{backgroundColor:"transparent", alignSelf:"center", marginBottom:22,  height:height*0.417, width:width*0.85, borderRadius:20, alignItems:"center",}}>
          <FlatList
          data={event.images}
          horizontal
          bounces={false}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          scrollEnabled
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}, id)=>(
            <View>
            <TouchableOpacity
            activeOpacity={1}
            onPress={()=>navigation.navigate("EventDetails", {
              image:event.images,
              title:event.title,
              date: event.date,
              time:event.time,
           venue : event.venue,
            ticketPrice :event.ticketPrice,
            description:event.description,
            })}
            >
                
                <Image
                    style={{
                      height:height*0.417, width:width*0.85, borderRadius:20, resizeMode: Platform.OS === "android" ?  'contain' : null, 
                      alignSelf:"center",
                      backgroundColor: "linear-gradient(180deg, rgba(0, 0, 0, 0) 43.23%, rgba(0, 0, 0, 0.4) 56.25%, rgba(0, 0, 0, 0.722222) 81.83%, #000000 100%)",
                    }}
                
                    blurRadius={1.8}
                    key={id}
                    source={{uri:item}}
                    />
                    </TouchableOpacity>
                    </View>
    
    )}
  />
  </View> 
  </>
    )
  }

  const EventItems=({event})=>{
  

    return(
    <>
<View style={{width:56, height:62, borderRadius:20, backgroundColor:"#ffff", position:"absolute", right:40, top:20}}>
 {/* <Text style={{alignSelf:"center", fontWeight:"800", padding:5, fontSize:27, fontFamily:"Poppins2", color:"#000"}}>{event.miniDate.slice(0,2)+"\t"}</Text> */}
{/* <Text style={{fontWeight:"700", fontSize:16, color:"#8c8c8c", lineHeight:23, alignSelf:"center", bottom:16, right:2, fontFamily:"Poppins2"}}>{ event.miniDate.charAt(3).toUpperCase()+event.miniDate.slice(4,`${event.miniDate.length}`)}</Text> */}
 </View>

 <View>
  <Text style={{color:"#ffff", fontWeight:"400", fontSize:23, lineHeight:29.9,  fontFamily:"Poppins2", left:40, bottom:90,}}>{event.title}</Text>
  </View>


   <View style={{flexDirection:"row", top:-43, left:50,}}>

<View>
   <Icon
   name="time-outline"
   size={16}
   style={{
      position: "absolute",
           color: "#fff",
           top:-42,
           left:-8
           }}
       />
   <Text style={{color:"#fff", fontFamily:"Poppins2", fontSize:14, position:"absolute", bottom:20, left:9}}>{event.time} {"|"}</Text>
</View>



   <View style={{flexDirection:"row", left:8}}>
   <Icon
   name="location-outline"
   size={16}
   style={{
      position: "absolute",
           color: "#fff",
           left:70,
          bottom:25
           }}
       />
   <Text style={{color:"#fff", fontFamily:"Poppins2", fontSize:14, textTransform:"uppercase",position:"absolute", bottom:20, left:85}}>{event.venue}</Text>
   </View>
 </View>
 </>
    )
  }

 





export default Events

const styles = StyleSheet.create({})