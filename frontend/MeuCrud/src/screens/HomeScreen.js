import { useEffect, useState, useCallback } from "react";
import { View, Text, FlatList, Button, TextInput } from "react-native"
import { useFocusEffect } from "@react-navigation/native";
import loadPeople from "../servers/loadPeople";
import inputFilter from "../servers/inputFilter";
import CardPersonal from "../components/CardPersonal";
import styles from "../styles/styles";

export default function HomeScreen({ navigation }) {

  // estado da lista
  const [people, setPeople] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState([]);

  // executa ao abrir tela
  useFocusEffect(
    useCallback(() => {
      loadPeople(setPeople, setList);
    }, [])
  );

  // padroniza os inputs da barra de pesquisa
  useEffect(() => {
    inputFilter(people, searchText, setList);
  }, [searchText, people]);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Pessoas</Text>

      <Button 
        title="Adicionar Pessoa"
        onPress={() => navigation.navigate("AddEditScreen")}
      />

      <TextInput
        style={styles.input}
        placeholder="Pesquisar por nome ou e-mail..."
        value={searchText}
        onChangeText={(t) => setSearchText(t)}
      />

      <FlatList
        data={list || []}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <CardPersonal
            item={item}
            navigation={navigation}
            refresh={() => loadPeople(setPeople, setList)}
          />
        )}
      />

    </View>
  );
}