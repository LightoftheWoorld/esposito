//// here contains some commented codes that may be useful


   {/* {PostData.map((_,index)=>{
        return(
      <View 
      key={index}
      style={[styles.dot]}/>
        )
      })}
      <Animated.View
      style={[
        styles.dotIndicator, {
          transform:[
            {
              translateX: Animated.divide(scrollx, ItemWidth).interpolate({
                inputRange:[0,1],
                outputRange:[0,]
              })
            }
          ]
        }
      ]
  }
      />  */}























      
// const PostImage=({post})=>{
//   const [currentSlideIndex, setCurrentSlideIndex]= useState(0)
//   const onViewableItemsChanged = useRef((item)=>{
//     const index = item.viewableItems[0].index
//     setCurrentSlideIndex(index)
//     // const index = item.viewableItems
//     console.log(index)
//   })
//   const viewabilityConfig = useRef({
//     itemVisiblePercentThreshold:50,
//   })

//   const PostIndicator = ({post}) => {

//     return(
//   <View style={styles.pagination}>
  
//   {post.image.map((_, index) => {
  
//      return (
//      <View
//      key={index}
//      style={[
//        styles.dot,
//        currentSlideIndex == index && {
//          backgroundColor: "#000",
//          width: 7,
//          height:7,
//          borderRadius:10,
//        },
//      ]}
//    />
//    ) 
//   })} 
  
//   </View>
//     )
//   }
//   return(
//   <View>
//    <View style={{backgroundColor:"transparent", alignSelf:"center", top:20, height:300, width:width*0.93, borderRadius:20, alignItems:"center"}}>
//         <FlatList
//         data={post.image}
//         horizontal
//         bounces={false}
//         onViewableItemsChanged={onViewableItemsChanged.current}
//         viewabilityConfig={viewabilityConfig.current}
//         showsHorizontalScrollIndicator={false}
//         pagingEnabled
//         // decelerationRate={"fast"}
//         scrollEventThrottle={32}
//         scrollEnabled
//         keyExtractor={item => item.id}
//         renderItem={({item}, id)=>(
//           <View>
//           <TouchableOpacity
//           activeOpacity={1.2}
//           >
//               <Image
//                   style={{
//                     height:300, width:width*0.93,borderRadius:20, resizeMode:'contain', alignSelf:"center",
//                   }}
//                   key={id}
//                   source={{uri:item.image}}

//                   />
//                   </TouchableOpacity>
//                   </View>
  
//   )}
// />
// </View> 
// <PostIndicator post={post}/>
//   </View>
//   )
// }
// "splash": {
//   "image":"./assets/images/busa.jpg",
// "backgroundColor": "#4d4a95",
// "resizeMode":"contain"
// },

