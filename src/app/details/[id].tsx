import { useState, useEffect } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { useLocalSearchParams, router } from "expo-router"

import { useProductDatabase } from "@/database/useProductDatabase"

export default function Details() {
  const [data, setData] = useState({
    name: "",
    quantity: 0,
  })

  const productDatabase = useProductDatabase()
  const params = useLocalSearchParams<{ id: string }>()

  useEffect(() => {
    if (params.id) {
      productDatabase.show(Number(params.id)).then((response) => {
        if (response) {
          setData({
            name: response.name,
            quantity: response.quantity,
          })
        }
      })
    }
  }, [params.id])

  return (
    <View style={{  flex: 1, padding: 32, gap: 16, marginVertical: 40 }}>
      <TouchableOpacity style={{ marginBottom: 16 }} onPress={() => router.navigate('/')}>
        <Text style={{ fontSize: 16 }}>Voltar</Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Lista de Produtos</Text>
      
      
        
      <Text style={{ fontSize: 32 }}>ID: {params.id} </Text>

      <Text style={{ fontSize: 32 }}>Quantidade: {data.quantity}</Text>

      <Text style={{ fontSize: 32 }}>Nome: {data.name}</Text>
    </View>
  )
}
