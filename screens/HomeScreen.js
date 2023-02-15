import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import Posts from './Posts'
import { SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import client from '../api/client'
import { COLORS } from '../constants/theme'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LottieView from 'lottie-react-native'


const HomeScreen = () => {

  const navigation = useNavigation()
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [userToken, setUserToken] = useState(null)
  const [userInfo, setUserInfo] = useState(null)


  const getData = async()=>{
    try {
      const value = await AsyncStorage.getItem('userInfo')
      const userToken = await AsyncStorage.getItem('userToken')

      if(value !== null && userToken !== null) {
      setUserInfo(JSON.parse(value))
      setUserToken(userToken)
         
          const token = userToken

      const config = {
        headers: {
          Authorization :`Bearer ${token}`
        },
      };

      setIsLoading(true);

      await client
        .get(
          `/news/getIperuCampusNews/${currentPage}/2`,
          config
        )
        .then((res) => {
          console.log(res.data.data);
          setIsLoading(false);
          setPosts([...posts, ...res.data.data]);
        })
        .catch((e) => {
          console.log(`${e}`);
        });
      }

    } catch(e) {
      console.log(`${e}`)
    }
  }

  useEffect(()=>{
    getData()
  },[])

  
  const renderLoader=()=>{
    return(
      isLoading?
      // <View
      // // style={{marginVertical:16, alignItems:"center",}} 
      // >
        // <ActivityIndicator size="large" color="blue"/> 

        (
        <LottieView
					source={require("../assets/animations/loader.json")}
					style={{
						// position: "absolute",
						width: 400,
						height: 400,
						top: 30,
						alignSelf: "center",
					}}
					loop={true}
        speed={0.7}
					autoPlay
				/>
        )

      : null
    )
  }
  
  const loadMorePosts=()=>{
    console.log("load more posts")
    setCurrentPage(currentPage +1)
  }
  

  
  return ( 
    <>
      <StatusBar backgroundColor={COLORS.white}/>
    <SafeAreaView style={{flex:1, top:100}}>
<FlatList
 onEndReachedThreshold={0.5}
//  ref={ref}
//  onMomentumScrollEnd={updateCurrentSlideIndex}
onEndReached={loadMorePosts}
showsVerticalScrollIndicator={false}
vertical
 data={posts}
bounces={false}
decelerationRate={"fast"}
//  keyExtractor={item=>item.id}
renderItem={({item, id}) => <Posts  post={item} key={id} navigation={navigation} />}
ListFooterComponent={renderLoader}


/>
    </SafeAreaView>
    </>
  )
}



export default HomeScreen

const styles = StyleSheet.create({})





{/* <ScrollView showsVerticalScrollIndicator={false} bounces={false}
>
{POSTS.map((post, id)=>(
<TouchableOpacity
   key={id}
   activeOpacity={1}
  //  onPress={()=>navigation.navigate("PostDetails"
  // //   {
    // //   image:post.image,
  // //   title:post.title,
  // //   date: post.date,
  // //   fullDescription: post.fullDescription,
  // //  }
  //  )}
   >

     <Posts post={post} key={id} navigation={navigation}/>
   </TouchableOpacity>
))}
</ScrollView> */}