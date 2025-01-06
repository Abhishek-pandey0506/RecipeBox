// ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Dialog,  IconButton, Portal, TextInput } from 'react-native-paper';
import { moderateScale, moderateScaleVertical } from '../component/Responsive';

const ProfileScreen = ({ route, navigation }) => {
    const { data } = route.params;
    const [visible, setVisible] = React.useState(false);

    const showDialog = () => setVisible(true);

    const hideDialog = () => setVisible(false);

    const handleLogout = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <IconButton
                    icon="keyboard-backspace"
                    size={35}
                    style={styles.bell1}
                    onPress={() => navigation.goBack()}
                />
                <Text style={{ fontSize: 30, fontWeight: 800, color: "#f4612d", left: "20%" }}>User Profile</Text>
            </View>

            <View style={styles.profileImageContainer}>
                <IconButton
                    icon="account-box"
                    iconColor="#F4612D"
                    size={100}
                    onPress={() => console.log()}
                    style={styles.Avatar}
                />
            </View>
            <Text style={styles.text}> Name :
            </Text>
            <TextInput
                label={data.data.auth.name}
                disabled={true}
                onChangeText={text => setText(text)}
            />
            <Text style={styles.text}> Age :
            </Text>
            
            <TextInput
                label={data.data.auth.age}
                disabled={true}
                onChangeText={text => setText(text)}
            />
            <Text style={styles.text}> Gender :
            </Text>
            <TextInput
                label={data.data.auth.gender}
                disabled={true}
                onChangeText={text => setText(text)}
            />
            <Text style={styles.text}> Email :
            </Text>
            <TextInput
                label={data.data.auth.email}
                disabled={true}
                onChangeText={text => setText(text)}
            />
            <Text style={styles.text}> Mobile :
            </Text>
            <TextInput
                label={data.data.auth.mobile}
                disabled={true}
                onChangeText={text => setText(text)}
                selectionColor='#000'
                textColor='blue'
            />
            <Button onPress={showDialog} mode='contained' style={{backgroundColor: '#f4612d', marginVertical: 10}}>Logout</Button>
            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title style={{ fontWeight: 900, textAlign: 'center' }}>Logout Confirmation</Dialog.Title>
                    <Dialog.Content>
                        <Text variant="bodyMedium" style={{ textAlign: 'center', fontSize: 20 }}>Are you sure you want to do logout?</Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={handleLogout}>Confirm</Button>
                        <Button onPress={hideDialog}>Cancel</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: moderateScale(10),
        backgroundColor: '#f0f0f0',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    },
    bell1: {
        top: moderateScaleVertical(-5)
    },
    profileImageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    Avatar: {
        margin: moderateScale(10),
        backgroundColor: "#f6f6f6"
    },
});

export default ProfileScreen;
