import {View, Text, StyleSheet} from 'react-native';

export default function Details()
{
    return (
        <View style = {styles.container}>
            <View style = {styles.iconRow}>
                <Text style = {styles.title}>DETALLES DE USUARIO</Text>
                <Text style = {styles.title2}>USANDO STACK NAVIGATION</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
{  
    container:
    {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    iconRow:
    {
        flexDirection: 'column',
        alignItems: 'center',
    },

    title:
    {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 10,
        color: '#ff6a07ff',
    },

    title2:
    {
        fontSize: 15,
        fontWeight: '100',
        marginLeft: 10,
        color: '#ff6a07ff',
    },
});