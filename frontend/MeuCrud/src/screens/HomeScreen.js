import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button, TextInput } from "react-native";
import loadPeople from "../servers/loadPeople";
import CardPersonal from "../components/CardPersonal";
import styles from "../styles/styles";

import { getPeople, deletePerson } from "../servers/peopleCrud";

export default function HomeScreen({ navigation }) {
  // estado da lista
  const [people, setPeople] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState([]);
// executa ao abrir tela
  useEffect(() => {
    loadPeople(setPeople, setList);
  }, []);

  useEffect(() => {
    if (searchText.trim() === '') {
      setList(people);
    } else {
      // 2. Transforma o termo de busca em minúsculo uma única vez
      const textLower = searchText.toLowerCase();

      // 3. Filtra a lista original (people)
      const filtered = people.filter(item => {
        // Pegamos os valores, garantindo que sejam strings (mesmo que venham null)
        const fName = (item.firstName ?? '').toLowerCase();
        const lName = (item.lastName ?? '').toLowerCase();

        // O .includes() retorna true ou false diretamente
        return fName.includes(textLower) || lName.includes(textLower);
      });

      setList(filtered);
    }
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