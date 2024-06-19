import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FB from '../assets/fb.png'
import Burger from '../assets/burger.png'
import Beef from '../assets/beef.png'

const data = [
    {name: 'Jr Executive', company: 'Burger King', location: 'Kasoa, Accra', image: Burger, salary: '200/yr'},
    {name: 'Product Manager', company: 'Beats', location: 'Kasoa, Accra', image: Beef, salary: '500/yr'},
    {name: 'Software Developer', company: 'Fabe', location: 'Kasoa, Accra', image: FB, salary: '200/yr'},
    {name: 'Software Developer', company: 'Fabe', location: 'Kasoa, Accra', image: FB, salary: '200/yr'},
    {name: 'Software Developer', company: 'Fabe', location: 'Kasoa, Accra', image: FB, salary: '200/yr'},
    {name: 'Software Developer', company: 'Fabe', location: 'Kasoa, Accra', image: FB, salary: '200/yr'},
    {name: 'Software Developer', company: 'Fabe', location: 'Kasoa, Accra', image: FB, salary: '200/yr'},
    {name: 'Software Developer', company: 'Fabe', location: 'Kasoa, Accra', image: FB, salary: '200/yr'},
]

const Popular = () => {
  return (
    <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10, marginHorizontal: 20, marginTop: 20}}>
      {
        data.map((item, index) => {
            return(
                <View key={index} style={{backgroundColor: 'white', borderRadius: 10, padding: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10}}>
                        <Image source={item.image} style={{width: 60, height: 60}}/>
                        <View style={{}}>
                            <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
                            <Text style={{color: 'gray'}}>{item.company}</Text>
                        </View>
                        
                    </View>
                    <View>
                        <Text>${item.salary}</Text>
                        <Text>{item.location}</Text>
                    </View>
                </View>
            )
        })
      }
    </View>
  )
}

export default Popular

const styles = StyleSheet.create({})