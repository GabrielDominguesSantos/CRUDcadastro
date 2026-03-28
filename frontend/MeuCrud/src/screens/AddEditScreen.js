import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { styles } from "../styles/addEditScreen.styles";


import { createPerson, updatePerson } from "../servers/peopleCrud";

export default function AddEditScreen({ route, navigation }) {

  const person = route.params?.person;

  const [firstName, setFirstName] = useState(person?.firstName || "");
  const [lastName, setLastName] = useState(person?.lastName || "");
  const [email, setEmail] = useState(person?.email || "");
  const [phone, setPhone] = useState(person?.phone || "");

  async function save(){

    const data = { firstName, lastName, email, phone };

    if(person){

      await updatePerson(person.id, data);

    }else{

      await createPerson(data);

    }

    navigation.goBack();
  }

  return(
    <View style={styles.container}>

      <View style={styles.namesContainer}>
        <TextInput
          style={styles.inputName}
          placeholder="Nome"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.inputName}
          placeholder="Sobrenome"
          value={lastName}
          onChangeText={setLastName}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput 
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
      />

      <Button 
        title="Salvar"
        onPress={save}
      />

      <Button 
        title="Cancelar"
        onPress={() => navigation.goBack()}
      />

    </View>
  );
}