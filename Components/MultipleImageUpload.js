
import React, { useState } from "react";
import {
	ActivityIndicator,
	Button,
	FlatList,
	Image,
	StyleSheet,
	Text,
	useWindowDimensions,
	View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { Formik } from "formik";

export const MIP = () => {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const { width, height } = useWindowDimensions();

	const pickImage = async (setFieldValue) => {
		try{
		const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
	
		if (permissionResult.granted === false) {
		  alert("Permission to access camera roll is required!");
		  return;
		}
		setIsLoading(true)
	
		const pickerResult = await ImagePicker.launchImageLibraryAsync({
			        allowsMultipleSelection: true,
			        mediaTypes: ImagePicker.MediaTypeOptions.Images,
			        quality: 1,
					selectionLimit:5 //for IOS 14+
			      });
			
			      if (!pickerResult.canceled) {
			        const uris = pickerResult.assets.map((asset, index) => ({
			          uri: asset.uri,
			          id: index,
			        }));
					setFieldValue('images', uris);
			        setImages(prevImages => [...prevImages, ...uris]);
			      }
				  setIsLoading(false)
				  console.log(pickerResult.assets)
				}catch(e){
                 console.log(`${e}`)
				}
	  }
	return (


		<Formik
		initialValues={{ images: [] }}
  onSubmit={(values, { resetForm }) => {
    console.log('Selected Images:', values.images);
    resetForm({ values: {} });
  }}
  >

{({ handleSubmit, setFieldValue, values }) => (
		<View
			style={{
				width: width - 40,
				height: height / 3.8,
				borderColor:"#d9d9d9",
				borderStyle:"dashed",
				borderWidth:2.5,
				marginTop: 15,
				borderRadius: 3.5,
				borderRadius:20
			}}
		>
			<View style={{ padding: 10, flexDirection: "row" }}>
				<Text style={{ fontSize: 16, padding: 5, fontFamily:"Poppins", color:"#000" }}>Upload Here</Text>
				{isLoading ? (
					<View>
						<ActivityIndicator size="large" color="#0000ff" />
					</View>
				) : (
					<Pressable onPress={()=> pickImage(setFieldValue)}>
						<View
							style={{
								height: 30,
								width: 30,
								// backgroundColor: "rgba(217, 217, 217, 1)",
								backgroundColor:"#004fc7",
								borderRadius: 25,
								alignSelf: "center",
								marginLeft: width - 200,
							}}
						>
							<Text
								style={{
									fontSize: 30,
									fontWeight: "300",
									color: "black",
									justifyContent: "center",
									alignItems: "center",
									fontFamily:"Poppins",
									position:"absolute",
									left:4,
									top:-6,
									color:"#fff",

								}}
							>
								+
							</Text>
						</View>
					</Pressable>
				)}
			</View>
			<FlatList
				data={images.slice(0,5)}
				horizontal
				renderItem={({ item }) => (
					<View style={{width:120,}}>
						<Image
							source={{ uri: item.uri }}
							style={{ width: 103, height: 120, left:7, marginHorizontal:4, borderRadius: 6, resizeMode:"contain",}}
						/>
					</View>
				)}
				keyExtractor={(item) => item.uri}
				contentContainerStyle={{}}
			/>
	<Button title="Submit" onPress={handleSubmit} />
		</View>
)}
</Formik>
	)}

//   const styles = StyleSheet.create({
// 	container: {
// 	  flex: 1,
// 	  alignItems: 'center',
// 	  justifyContent: 'center',
// 	},
// 	selectButton: {
// 	  borderRadius: 5,
// 	  backgroundColor: '#0084ff',
// 	  padding: 10,
// 	  margin: 20,
// 	  alignItems: 'center',
// 	},
// 	selectButtonText: {
// 	  color: 'white',
// 	  fontWeight: 'bold',
// 	  fontSize: 16,
// 	},
// 	preview: {
// 	  width: '100%',
// 	  height: '100%',
// 	  position: 'absolute',
// 	  top: 0,
// 	  left: 0,
// 	},
//   });


  










  

















