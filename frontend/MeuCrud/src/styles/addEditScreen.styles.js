import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 20,
    backgroundColor: '#f9f9f9'
  },
  namesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  inputName: {
    width: '49%',
    borderWidth: 1, 
    borderColor: '#ccc', 
    padding: 15, 
    marginBottom: 10, 
    borderRadius: 8,
    backgroundColor: '#fff'
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    padding: 15, 
    marginBottom: 10, 
    borderRadius: 8,
    backgroundColor: '#fff' 
  },
  title:{
    fontSize:22,
    textAlign:"center",
    marginBottom:20
  },

  button:{
    padding:10,
    backgroundColor:"#4CAF50",
    borderRadius:5
  }
});