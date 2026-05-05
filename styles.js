
import {StyleSheet} from 'react-native';



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 28,
        marginBottom: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    form: {
        justifyContent: 'center',
        width: '100%',
        padding: 30,
    }
    ,
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,

    },
    button: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 50,
        borderColor: "orange",
        borderWidth: 2,
        marginBottom: 30,
    },
    name: { 
        
        fontSize: 30,
        fontWeight: 'bold',
  
    },
    info: {
        fontSize: 16,

    },
    card: {

        flexDirection: 'row',
        margin: 8,
        backgroundColor: "#fff",
        borderRadius: 18,
        elevation: 3,
        padding : 10
    },


    image: {

        width: 100,

        height: 100,
    },
imageD: {

       
         marginBottom :20 ,
        height: 200,
        width:100
    },
    infoP: {

        padding: 12,

    },
     desc: {

        padding: 12,
        textAlign:'justify'

    },

    nameP: {

        fontSize: 14,

        color: "#111",

        fontWeight: "700",
        flex: 1, marginRight: 10 

    },

    price: {

        marginTop: 4,

        fontSize: 16,

        color: "#7b6f6fff",
        fontWeight: 'bold'

    },
});

export default styles