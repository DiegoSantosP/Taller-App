import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, ActivityIndicator, StyleSheet, TouchableOpacity, } from 'react-native';

export const Punto1 = () => {
    // Punto a
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    //Punto b
    const [errors, setErrors] = useState({ name: "", email: "", message: "" });
 
    //Punto c
    const [loading, setLoading] = useState(false);

    // Validaciones
    const validate = () => {
        let valid = true;
        const newErrors = { name: "", email: "", password: "" };

        if (!name) {
            newErrors.name = 'Papi, el nombre hermano';
            valid = false;
        }

        if (!email) {
            newErrors.email = 'Necesitamos un correo, al menos el @';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Hey... Te tomaste muy literal lo del solo arroba';
            valid = false;
        }

        if (!message) {
            newErrors.message = 'Necesitamos un mensaje aqui, eh?';
            valid = false;
        } else if (message.length < 10) {
            newErrors.message = 'Una palabra de al menos diez letras, no un Ok. de tu crush';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    // Simular envío
    const handleSubmit = () => {
        if (validate()) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                Alert.alert('Éxitazo Hermano!!', `Gracias, ${name}, por tomarte el tiempo. Vuelve cuando quieras... Deja de mandarle mensajes a tu ex`);
                setName('');
                setEmail('');
                setMessage('');
                setErrors({});
            }, 2000);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.entrada}
                placeholder="Nombre:"
                value={name}
                onChangeText={setName}
            />
            {errors.name && <Text style={styles.error}>{errors.name}</Text>}

            <TextInput
                style={styles.entrada}
                placeholder="Correo electrónico: "
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}

            <TextInput
                style={styles.texto}
                placeholder="Mensaje:"
                value={message}
                onChangeText={setMessage}
                multiline
                numberOfLines={4}
            />
            {errors.message && <Text style={styles.error}>{errors.message}</Text>}

            {loading ? (
                <ActivityIndicator size="large" color="#FF0000" />
            ) : (
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttondef}>|| Enviar ||</Text>
            </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#025E73',
    },
     entrada: {
        fontFamily: 'Arial', 
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    texto: {
        fontFamily: 'Arial', 
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        height: 100,
        textAlignVertical: 'top',
    },
    error: {
        fontFamily: 'Italic', 
        color: '#DBF227',
        marginBottom: 15,
        fontSize: 16,
    }, 
    button: {
        width: '100%',
        backgroundColor: '008f39',  
        paddingVertical: 20,         
        paddingHorizontal: 20,      
        borderRadius: 25,            
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,                
      },
      buttondef: {
        color: '#0a0a0a',               
        fontSize: 24,                
        fontWeight: 'bold',          
        letterSpacing: 1,          
      },

});
