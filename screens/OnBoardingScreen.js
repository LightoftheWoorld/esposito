// import {
// 	StyleSheet,
// 	Text,
// 	View,
// 	Dimensions,
// 	FlatList,
// 	Image,
// 	Animated,
// 	TouchableOpacity,
// } from "react-native";
// import React from "react";
// import { StatusBar } from "expo-status-bar";

// const { width, height } = Dimensions.get("screen");
// const bgs = ["#A5BBFF", "#DDBEFE", "#FF63ED", "#B98EFF"];
// const Posts = [
// 	{
// 		key: "3571572",
// 		title: "Connecting the Babcock Space",
// 		image: "https://image.flaticon.com/icons/png/256/3571/3571572.png",
// 	},
// 	{
// 		key: "3571747",
// 		title: "Get Trusted Information",
// 		description:
// 			"Use the optical SAS system, then you can navigate the auxiliary alarm!",
// 		image: "https://image.flaticon.com/icons/png/256/3571/3571747.png",
// 	},
// 	{
// 		key: "3571680",
// 		title: "Meet Trusted Sellers",
// 		description:
// 			"The ADP array is down, compress the online sensor so we can input the HTTP panel!",
// 		image: "https://image.flaticon.com/icons/png/256/3571/3571680.png",
// 	},
// 	{
// 		key: "3571603",
// 		title: "Get your E-tickets",
// 		image: require("../assets/animations/tickets.json"),
// 	},
// ];

// const Indicator = ({ scrollx }) => {
// 	return (
// 		<View style={{ position: "absolute", flexDirection: "row", bottom: 100 }}>
// 			{Posts.map((_, i) => {
// 				const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

// 				const scale = scrollx.interpolate({
// 					inputRange,
// 					outputRange: [0.6, 0.9, 0.6],
// 					extrapolate: "clamp",
// 				});
// 				return (
// 					<Animated.View
// 						key={`indicator-${i}`}
// 						style={{
// 							height: 10,
// 							width: 10,
// 							borderRadius: 5,
// 							backgroundColor: "#fff",
// 							margin: 10,
// 							transform: [
// 								{
// 									scale,
// 								},
// 							],
// 						}}
// 					/>
// 				);
// 			})}
// 		</View>
// 	);
// };

// const Backdrop = ({ scrollx }) => {
// 	const backgroundColor = scrollx.interpolate({
// 		inputRange: bgs.map((_, i) => i * width),
// 		outputRange: bgs.map((bg) => bg),
// 	});
// 	return (
// 		<Animated.View
// 			style={[
// 				StyleSheet.absoluteFillObject,
// 				{
// 					backgroundColor,
// 				},
// 			]}
// 		/>
// 	);
// };
// const Square = ({ scrollx }) => {
// 	const YOLO = Animated.modulo(
// 		Animated.divide(Animated.modulo(scrollx, width), new Animated.Value(width)),
// 		1
// 	);

// 	const rotate = YOLO.interpolate({
// 		inputRange: [0, 0.5, 1],
// 		outputRange: ["35deg", "0deg", "-35deg"],
// 	});
// 	return (
// 		<Animated.View
// 			style={{
// 				width: height,
// 				height: height,
// 				backgroundColor: "#fff",
// 				borderRadius: 86,
// 				position: "absolute",
// 				top: -height * 0.6,
// 				left: -height * 0.3,
// 				transform: [
// 					{
// 						rotate,
// 					},
// 				],
// 			}}
// 		/>
// 	);
// };

// export default function OnBoardingScreen() {
// 	const scrollx = React.useRef(new Animated.Value(0)).current;
// 	return (
// 		<View style={styles.container}>
// 			<Backdrop scrollx={scrollx} />
// 			<Square scrollx={scrollx} />
// 			<Animated.FlatList
// 				horizontal
// 				showsHorizontalScrollIndicator={false}
// 				contentContainerStyle={{ paddingBottom: 100 }}
// 				data={Posts}
// 				scrollEventThrottle={18}
// 				onScroll={Animated.event(
// 					[{ nativeEvent: { contentOffset: { x: scrollx } } }],
// 					{ useNativeDriver: false }
// 				)}
// 				// snapToAlignment="center"
// 				keyExtractor={(item) => item.key}
// 				renderItem={({ item }) => (
// 					<View style={{ width, alignItems: "center", padding: 20 }}>
// 						<View style={{ flex: 0.7, justifyContent: "center" }}>
// 							<Image
// 								source={item.image}
// 								style={{
// 									width: width / 2,
// 									height: height / 2,
// 									resizeMode: "cover",
// 								}}
// 							/>
// 						</View>
// 						<View style={{ flex: 0.3 }}>
// 							<Text
// 								style={{
// 									fontWeight: "800",
// 									fontSize: 24,
// 									marginBottom: 10,
// 									color: "#fff",
// 								}}
// 							>
// 								{item.title}
// 							</Text>
// 							{/* this means that on the last page of the array, show the get started button */}
// 							{Posts[Posts.length - 1] && (
// 								<TouchableOpacity
// 									onPress={() => navigation.navigate("AdScreen")}
// 									activeOpacity={0.5}
// 								>
// 									<Text
// 										style={{ color: "#000", fontweight: "600", fontSize: 24 }}
// 									>
// 										Get Started
// 									</Text>
// 								</TouchableOpacity>
// 							)}
// 						</View>
// 					</View>
// 				)}
// 			/>

// 			<Indicator scrollx={scrollx} />
// 		</View>
// 	);
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: "#fff",
// 		alignItems: "center",
// 		justifyContent: "center",
// 	},
// });










import React, { useEffect, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Animated
} from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const COLORS = {primary: '#A5BBFF', white: '#fff'};
const bgs = ['#A5BBFF', "#A5BBFF", "#000000", "#A5BBFF"];

const Posts = [
    {
      id: "1",
      title: "Connecting the Babcock Space",
      animation: require("../assets/animations/people.json")
    },
    {
      id: "2",
      title: "Get Trusted Information",
      animation: require("../assets/animations/animation2.json")
    },
    {
      id: "3",
      title: "Meet Trusted Sellers",
      animation: require("../assets/animations/marketing.json")
    },
    {
      id: "4",
      title: "Get your E-tickets",
      animation: require("../assets/animations/tickets.json"),
  
    }
  ]
  


const Slide = ({item}) => {
  return (
    <View style={{width,alignItems: 'center', padding:20}}>
        <View style={{flex:.7, justifyContent:"center"}}>
      <LottieView
        source={item?.animation}
        style={{width: width/1.3,
        height: width/1.3,
        resizeMode:"cover",}}
        loop={true}
        autoPlay
        speed={0.5}
      />
      </View>
      <View>
        <Text style={styles.title}>{item?.title}</Text>
      </View>
    </View>
  );
};





const OnBoardingScreen = () => {
const navigation = useNavigation();
const scrollx = React.useRef(new Animated.Value(0)).current
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };


  const Backdrop=({scrollx})=>{

    const backgroundColor= scrollx.interpolate({
      inputRange: bgs.map((_,i)=> i*width),
      outputRange: bgs.map((bg)=>bg)
    })
  return <Animated.View
  style={[
    StyleSheet.absoluteFillObject,
    {
    backgroundColor,
  }]}
  />
  }

  const Square=({scrollx})=>{ 
    const YOLO = Animated.modulo(
      Animated.divide(Animated.modulo(scrollx, width), 
    new Animated.Value(width)), 1)
  
    const rotate = YOLO.interpolate({
      inputRange:[0,.5,1],
      outputRange:["45deg", "0deg", "-35deg"]
    })
    return <Animated.View
   style={{
    width:height,
    height:height,
    backgroundColor:"#fff",
    borderRadius:86,
    position:"absolute",
    top:-height*0.65,
    left:-height*0.25,
    transform:[
      {
        rotate,
      }
    ]
   }} 
    />
  }
  



  const Footer = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 10000,
        useNativeDriver: true,
      }).start()
      // }).start(()=>fadeOut());
    }, [fadeAnim]);


    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 70,
          }}>
          {/* Render indicator */}
          
          {Posts.map((_, index) => {
    return(

            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.white,
                  width: 10,
                  borderRadius:30,
                },
              ]}
            />
    )
    })}
        </View>

        {/* Render buttons */}
        <View style={{marginBottom: 20}}>
          {currentSlideIndex == Posts.length - 1 ? (
            <Animated.View style={{height: 50, opacity:fadeAnim}}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.replace('Sign-up')}>
                <Text style={{fontWeight: '600', fontSize: 15, fontFamily:"Poppins3", alignSelf:"center"}}>
                  GET STARTED
                </Text>
              </TouchableOpacity>
            </Animated.View>
          ) : (
        <></>
          )
          
          }
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <StatusBar backgroundColor={COLORS.white}/>
      <Backdrop scrollx={scrollx}/> 
      <Square scrollx={scrollx}/> 
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        showsHorizontalScrollIndicator={false}
        horizontal
        // scrollEventThrottle={32}
        onScroll={Animated.event(
            [{nativeEvent: {contentOffset:{x:scrollx}}}],
            {useNativeDriver:false }
            )}
        data={Posts}
        pagingEnabled
        // decelerationRate={"fast"}
        renderItem={({item}) => <Slide item={item} />}
      />
      <Footer/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: COLORS.white,
    fontSize: 13,
    marginTop: 10,
    maxWidth: '70%',
    textAlign: 'center',
    lineHeight: 23,
  },
  title: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: '500',
    marginTop: 100,
    top:70,
    textAlign: 'center',
    fontFamily:"Poppins3"
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  indicator: {
    height: 10,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 25,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    width:150,
    alignSelf: 'center',
  },
});
export default OnBoardingScreen;

