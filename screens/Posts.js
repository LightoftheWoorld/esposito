import { StyleSheet, Text, View, Image, FlatList, Dimensions, Animated, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRef, useState, useEffect, useCallback} from 'react';
import {useFonts} from 'expo-font'
import { StatusBar } from 'expo-status-bar';
import { FlatListInput } from '../Components/FlatListInput';
const COLORS = {
  primary: "#004FC7", // blue
  secondary: "#F6F6F6",   // gray

  black: "#1E1F20",
  white: "#FFFFFF",
  events:"#2b3b67",
  home: "#4d4a95"
}

const {width, height}= Dimensions.get("screen")




const PostImage=({post, navigation})=>{

  // var timestamp = "2023-01-19T13:48:14.044+00:00";
  // var date = moment(timestamp);
  // console.log(date.format('MMMM Do YYYY, h:mm:ss a'));
  
  
  // const presentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
  // console.log(presentDate)
  // // if timestamp = presentDate, show the recent tag
  // if(date === presentDate){
  //   return(
  //     <View>
  //       <Text>sdshsfhgs</Text>
  //     </View>
  //   )
  // }


  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start()
    // }).start(()=>fadeOut());
  }, [fadeAnim]);

  // function fadeIn (){
  //   Animated.timing(fadeAnim, {
  //     toValue: 1,
  //     duration: 90000,
  //     useNativeDriver: true,
  //   }).start;
  // }

  function fadeOut (){
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 10000,
        useNativeDriver: true,
      }).start
      
      // .start(()=>fadeIn());
  
  }

 const [currentSlideIndex, setCurrentSlideIndex]= useState(0)
  const onViewableItemsChanged = useRef((item)=>{
  const index = item.viewableItems[0].index
        setCurrentSlideIndex(index)
        // const index = item.viewableItems
      //   console.log(index)
      })
      
      const viewabilityConfig = useRef({
        itemVisiblePercentThreshold:50,
      })

  // const PostIndicator = ({post}) => {
  
  //   return(
  // <View style={styles.pagination}>
  
  // {post.data.map((_, index) => {
  
  //    return (
  //     <>
  //    <View
  //    key={index}
  //    style={[
  //      styles.dot,
  //      currentSlideIndex == index &&{
  //        backgroundColor: "#000",
  //        width: 7,
  //        height:7,
  //        borderRadius:10,
  //      }
  //    ]}
  //  />
  // {
  //   currentSlideIndex==index &&(
  //     <Animated.View style={{backgroundColor:"red", width:30, height:15, borderRadius:20, bottom:250, position:"absolute", right:-130, 
  //     opacity:fadeAnim,
  //   }}
  //     >
  //       <Text style={{color:"#ffff", fontFamily:"Poppins2", left:3, alignItems:"center", top:-2, position:"absolute",}} key={index}>{index+1}/{post.data.length}</Text>
  //     </Animated.View>
  //   )
  // }
  //   </>
  //  ) 
  // })
  // } 
  
  // </View>
  //   )
  // }



  return(
    <View>
   <View style={{backgroundColor:"transparent", alignSelf:"center", top:20, height:height*0.375, width:width*0.93, borderRadius:20, alignItems:"center",}}>
        <Animated.FlatList
           onMomentumScrollEnd={()=>fadeOut()}
        data={post.images}
        horizontal
        bounces={false}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig.current}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        scrollEventThrottle={32}
        scrollEnabled
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}, id)=>(
          <View>
          <TouchableOpacity
          activeOpacity={1}
          onPress={()=>navigation.navigate("PostDetails", {
            image:post.images,
            title:post.title,
        date: post.date,
        fullDescription: post.fullDescription,
          })}
          >
              <Image
                  style={{
                    height:height*0.375, width:width*0.93,borderRadius:20, resizeMode:'contain', alignSelf:"center",
                  }}
                  key={id}
                  source={{uri:item}}
                  />
                  </TouchableOpacity>
                  </View>
  
  )}
/>
</View> 
{/* <PostIndicator post={post}/> */}
</View> 

  )
}





const PostFooter=({post})=>{ 
 
  return(
  <>
   <View style={{left:15,
    //  marginVertical:330,
      position:"absolute",
    //  marginVertical:28
    bottom:-100
     }}>
      <Text style={{textTransform:"capitalize", color:"#000000",fontSize:16, fontWeight:"600",
      // maxWidth:'70%', 
      fontFamily:"Poppins3"
    }}>{post.title}</Text> 
    <Text style={{fontWeight:"300", fontSize:10, color:"#303030",fontFamily:"Poppins2", lineHeight:13 }}>{post.date}</Text>
    {/* <Text style={{fontWeight:"500", fontSize:10, color:"#999999", maxWidth:"95%", top:5, fontFamily:"Poppins2"}}>
      {post.description.length > 125 ? post.description.charAt(0).toUpperCase()+ post.description.slice(1,124).toLowerCase()+'...' : post.description.charAt(0).toUpperCase()+ post.description.slice(1,`${post.description.length}`).toLowerCase()+'...'}
      </Text> */}
        </View>
  </>
  )
}

export const Header=()=>{
  return(
  <View>
  <Text style={{color:"#6669c8", fontWeight:"700", fontSize:30, left:20,}}>Today</Text>
  </View>
  )
}






const Posts = ({post, navigation}) => {
  return (
    <View
    style={{flex:1,
     marginBottom:110
      }}
    >
      <StatusBar backgroundColor={COLORS.white}/>
         <PostImage post={post} navigation ={navigation}/>
        {/* <PostFooter post={post}/> */}
    </View>
  )
}





export default Posts

const styles = StyleSheet.create({
  container:{
    top:80,
  },
  pagination:{
    bottom:-6,
    left:(width*0.93)/2,
    position:"absolute",
    flexDirection:"row",
    justifyContent:"center",
    width:40,
    
  },
  // dotIndicator:{
  //   width:10, borderRadius:10, position:"absolute", borderColor:"#000", borderWidth:1, height:10, marginBottom:3,
  // },
  dot:{borderRadius:10, height:7, width:7, backgroundColor:"gray", marginBottom:3, marginHorizontal:3, justifyContent:"center" }
})




///for tips of the day;
         {/* <View>
          <View style={{height:210, width:375, backgroundColor:"#f6f6f6"}}>
            <Text style={{fontWeight:"300", color:"#717171", fontSize:12, textAlign:"center", textTransform:"uppercase", top:10}}>Tip of the Day</Text>
            <View >

            <View style={{top:30, alignItems:"flex-start", right:-165}}>
            <Text style={{fontWeight:"600", fontSize:14, lineHeight:18.2, color:"#000",
             maxWidth:"45%"
             }}>Start your day with a glass of water</Text>
            <Text style={{fontWeight:"300", fontSize:10, lineHeight:18,color:"#717171", maxWidth:"53%", maxHeight:"80%", top:10}}>Your body goes quite a few hours without hydration as you sleep. 
              Drinking a full glass of water in the morning can aid digestion, flush out toxins, enhance skin health and give you an energy boost.
            </Text>
                <Image
                style={{width:130, height:140, shadowColor:"#717171", opacity:1.2, bottom:125, right:143}}
                source={require("../assets/images/shirt.jpg")}
                />
            </View>

            </View>
          </View>
        </View>  */}



