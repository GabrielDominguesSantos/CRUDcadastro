import { deletePerson } from "../servers/peopleCrud";
import { View, Text, Button } from "react-native";
import styles from "../styles/CardPersonal.styles";

function CardPersonal({item, navigation, refresh}){

  return(

    <View style={styles.card}>

      <View>

        <Text style={styles.name}>
          {item.firstName} {item.lastName}
        </Text>

        <Text style={styles.email}>
          {item.email}
        </Text>

      </View>

      <View>

        <Button 
          title="Editar"
          onPress={() => navigation.navigate("AddEditScreen", {person: item})}
        />

        <Button 
          title="Deletar"
          onPress={async () => {
            await deletePerson(item.id);
            refresh();
          }}
        />

      </View>

    </View>
  )
}

export default CardPersonal;