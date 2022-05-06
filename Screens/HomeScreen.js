import React, {useEffect, useState} from "react";
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, ScrollView, Dimensions} from 'react-native';
import { Input, Button,Card } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {db} from "../firebase";
import {useNavigation} from "@react-navigation/native";
export default function HomeScreen() {
    const [datos, setDatos] = useState([])
    const navigation = useNavigation()
     //obtener datos de la base de datos

    const obtenerDatos = async () =>{
        const lista = []
        db.collection('Inventario').get().then((querySnapshot)=>{
            querySnapshot.forEach(doc=>{
                //Hay que deconstruir el objeto
                const {name, description, tags, nickname} = doc.data()
                lista.push({
                        id: doc.id, name, description, tags, nickname
                    }
                )
            })
            setDatos(lista)
        })
    }
    console.log(datos)
    useEffect(()=>{
        obtenerDatos()
    },[])
    return (
       //aaa

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
