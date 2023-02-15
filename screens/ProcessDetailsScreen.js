import { ActivityIndicator, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'
import { FormInput } from '../Components/FormInput'
import * as Yup from "yup";
import { FormSubmitBtn } from '../Components/FormSubmitBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import client from '../api/client';
import axios from 'axios';
import { StackActions, useNavigation } from '@react-navigation/native';


const ProcessDetailsScreen = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState("")
    // const [isLoading, setIsLoading] = useState("false")

    const getEmail = async()=>{
        try{
            const email = await AsyncStorage.getItem("email")
            // console.log(useremail)

            if(email!==null){
                setEmail(email)
            }
        }
        catch(e){
            console.log(`an error occured ${e}`)
        }
    }
    
    useEffect(()=>{
        getEmail()
    },[])
    const userInfo = {
        email:email,
        title:"Game Show",
    };





//   const initializeTransaction = async (values)=>{
//       await axios.post(`https://backendcode-usrb.onrender.com/api/pay/payForTicket`, {
//     ...values,
//     }).then((res) =>{

//     //   if (res.status === 200){
//     //     navigation.dispatch(
//     //     StackActions.replace("CheckOutScreen"
//     //     , {
//     //    authorization_url: res.data.authorization_url
//     //     }
//     //     )
//     //     );
//     // }
//     console.log(res)
//       }
//     ).catch((e)=> {
//         console.log(`The error is ${e}`)
//       }
//     )

//     }

const initializeTransaction = async (values) => {
    const res = await client.post("/pay/payForTickets", {
        ...values,
    });
    if (res.status === 200) {
        console.log(res.data);
        let useremail = values.email
        try{
        await AsyncStorage.setItem("email", useremail)
        console.log(useremail)
        navigation.dispatch(StackActions.replace("Tab"));
        }catch(e){
         console.log(`The error is ${e}`)
        }
    }
    
};





  return (
           <View>
			<Formik
				initialValues={userInfo}
				onSubmit={initializeTransaction}
			>
				{({
					values,
					isSubmitting,
					handleBlur,
					handleChange,
					handleSubmit,
				}) => {
					const {title} = values;
					return (
						<>
							<FormInput
								// onChangeText={handleChange("email")}
                                // placeholder="email@student.babcock.edu.ng"
								value={email}
								autoCapitalize="none"
								label={"Email"}
								style={styles.text}
								TextInputStyle={styles.textInput}
							/>
							<FormInput
								// onChangeText={handleChange("title")}
                                // placeholder="Event Title"
								onBlur={handleBlur("title")}
								value={title}
								autoCapitalize="none"
								label={"Title"}
								style={styles.text}
								TextInputStyle={styles.textInput}
							/>
                                <FormSubmitBtn
									Submitting={isSubmitting}
									onPress={handleSubmit}
									title={"Initialize"}
								/>

						</>
					);
				}}
			</Formik>
{/* 
<View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Just an action from you</Text>
      </View>
      <View style={styles.panel}>
        <Text style={styles.label}>Email </Text>
        <TextInput
          style={styles.inputField}
          value={email}
          placeholder="Email"
        />

           <TextInput
          style={styles.inputField}
        //   value={title}
          placeholder="title"
        />
      </View>
    </View> */}
		</View>
  )
}

export default ProcessDetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      header: {
        width: '100%',
        backgroundColor: '#dcdcdc',
        paddingTop: 48,
        paddingBottom: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignItems: 'center',
      },
      title: {
        fontSize: 22,
        color: '#333',
        fontWeight: 'bold',
      },
      panel: {
        paddingTop: 10,
        paddingHorizontal: 10,
      },
      label: {
        fontSize: 20,
      },
      text: {
        fontSize: 24,
        paddingTop: 10,
      },
      inputField: {
        backgroundColor: '#fff',
        height: 44,
        borderWidth: 1,
        borderColor: '#333',
        width: '100%',
        padding: 10,
        marginTop: 12,
      },
      button: {
        margin: 10,
        padding: 10,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
      },
      buttonText: {
        fontSize: 18,
        color: '#444',
      },
    });
