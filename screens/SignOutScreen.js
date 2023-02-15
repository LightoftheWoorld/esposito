import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const SignOutScreen = () => {
    const {logout} = useContext(AuthContext)
  return (
    <View style={{top:80}}>
      <Button title='sign out' onPress={()=>logout()}/>
    </View>
  )
}

export default SignOutScreen

const styles = StyleSheet.create({})