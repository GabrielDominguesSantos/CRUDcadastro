import { deletePerson } from "../servers/peopleCrud";
import { View, Text, TouchableOpacity } from "react-native";
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

        <Text style={styles.email}>
          {item.phone}
        </Text>

      </View>

      <View>

        <TouchableOpacity
          style={styles.editButton} 
          onPress={() => navigation.navigate("AddEditScreen", {person: item})}
        >
          <Text style={{color: 'blue'}}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={async () => {
            await deletePerson(item.id);
            refresh();
          }}
        >
          <Text style={{color: 'red'}}>Deletar</Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}

export default CardPersonal;