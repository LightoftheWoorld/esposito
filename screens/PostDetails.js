import { StyleSheet, Text, View, SafeAreaView, Dimensions, FlatList, TouchableOpacity, Image, ScrollView} from 'react-native'
import React, {useState, useRef, useCallback} from 'react'

const {width, height}= Dimensions.get("window")



const PostDetails = ({route}) => {


  return (
      <View style={styles.container}>
        <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        >
  <About route ={route}/>
  </ScrollView>
      </View>
  )
}




const About=(props)=>{
const {image, title, date, content}= props.route.params
  return(
    <View>
<PostImage image={image}/>
<PostAbout title={title} date={date} content={content}/>
    </View>
  )


}

const PostImage=(props)=>{
  const [currentSlideIndex, setCurrentSlideIndex]= useState(0)
  const onViewableItemsChanged = useRef((item)=>{
    const index = item.viewableItems[0].index
    setCurrentSlideIndex(index)
    console.log(index)
  })
  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold:50,
  })

  return(
  <View>
   <View style={{top:20, height:341, width:width, backgroundColor:"transparent",}}>
        <FlatList
        data={props.image}
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
          >
              <Image
                  style={{
                    height:341, width:width, 
                    resizeMode:'cover',
                  }}
                  key={id}
                  source={{uri:item}}

                  />
                  </TouchableOpacity>
                  </View>
  
  )}
/>
</View> 

<View style={styles.pagination}>
   {props.image.map((_, index) => {
      return (
         <View
         key={index}
         style={[
           styles.dot,
           currentSlideIndex == index && {
             backgroundColor: "#000",
             width: 7,
             height:7,
             borderRadius:10,
           }
         ]}
       />
       ) 
      })} 
      </View>
  </View>
  )


}



const PostAbout=(props)=>{
 
return(
<>
<View 
style={{padding:25}}
>
    <View 
    >
    <Text style={{fontWeight:"600", fontSize:19, color:"#000000", width:322, height:25, lineHeight:24.7, fontFamily:"Poppins3"}}>{props.title}</Text>
    <Text style={{fontWeight:"300", color:"#303030", fontSize:10, lineHeight:13, fontFamily:"Poppins2"}}>{props.date}</Text>
    </View>

{/* <ScrollView
showsVerticalScrollIndicator
bounces={false}
> */}
<View
// adjustsFontSizeToFit
// accessibilityRole='adjustable'

>

<Text style={{
  fontWeight:"400", fontSize:10, lineHeight:15, color:"#999999",fontFamily:"Poppins2",
top:10
}}

>{props.content}</Text>

</View>

{/* </ScrollView> */}
</View>
</>

)



}


export default PostDetails

const styles = StyleSheet.create({
  container:{
    flex:1,
    top:50,
  },
  dot:{
    borderRadius:10, height:7, width:7, backgroundColor:"gray", marginBottom:3, marginHorizontal:3, justifyContent:"center" 
  },
  pagination:{
    bottom:-6,
    left:(width)/2,
    position:"absolute",
    flexDirection:"row",
    // justifyContent:"center",
    // width:40,
    
  },
})