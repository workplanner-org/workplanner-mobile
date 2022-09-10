import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const HelloWorld = () => {
    function reset() {
        const els = document.querySelectorAll(`.${styles.input}`);
        els.forEach((el) => {
            el.value = '';
        });
    }

    function submit() {
        // send request to API
        fetch('http://localhost:8080/employees/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: 'First',
                lastName: 'Last',
                email: 'test@example.com',
            }),
        }).then((res) => {
            return res;
        });
    }

    return (
        <View>
            <Text style={styles.header}>Workplanner Skeleton Demo</Text>
            <View style={{ alignItems: 'center' }}>
                <TextInput placeholder="First Name" style={styles.input} />
                <TextInput placeholder="Last Name" style={styles.input} />
                <TextInput placeholder="Email" style={styles.input} />
            </View>
            <View style={styles.container}>
                <Button title="Reset" onPress={reset} style={styles.button} />
                <Button title="Submit" onPress={submit} style={styles.button} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 4,
        marginVertical: 8,
        padding: 8,
    },
    header: {
        textAlign: 'center',
        fontSize: 24,
        paddingBottom: 10,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 70,
    },
});

export default HelloWorld;
