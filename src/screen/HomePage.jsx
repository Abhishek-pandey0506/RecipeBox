import React, { useState } from 'react';
import AllRecipe from './Recipe/AllRecipe/AllRecipe';
import RecipeTag from './Recipe/RecipeTag/RecipeTag';
import { RefreshControl, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button, Dialog, IconButton, Portal, Searchbar } from 'react-native-paper';
import RecipeMeal from './Recipe/RecipeMeals/RecipeMeal';
import { ScrollView } from 'react-native-gesture-handler';
import { moderateScale, moderateScaleVertical, textScale } from '../component/Responsive';
import RecipeMealCard from './Recipe/RecipeMeals/RecipeMealCard';

function HomePage({ route, navigation }) {
    const {data} = route.params;
    console.log(data, 'aaaaaaaaaaaaa')
    const [refreshing, setRefreshing] = useState(false);
    const [visible, setVisible] = React.useState(false);

    const showDialog = () => setVisible(true);

    const hideDialog = () => setVisible(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    const handleLogout = () => {
        navigation.navigate('Login');
    };

    return (
        <SafeAreaView>
            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', }}>
                        <IconButton
                            icon="account-box"
                            iconColor="#F4612D"
                            size={40}
                            onPress={() => navigation.navigate('ProfileScreen', { data: data })}
                            style={styles.Avatar}
                        />
                        <View style={styles.headerContent}>
                            <Text style={styles.h1}>Welcome,
                                {data.data.auth.name}
                                !</Text>
                            <Text style={styles.h2}>Check Amazing Recipe</Text>
                        </View>

                        <IconButton
                            icon="logout"
                            iconColor="#f6f6f6"
                            size={30}
                            onPress={showDialog}
                            style={styles.bell}
                        />
                        <Portal>
                            <Dialog visible={visible} onDismiss={hideDialog}>
                                <Dialog.Title style={{fontWeight: 900, textAlign:'center'}}>Logout Confirmation</Dialog.Title>
                                <Dialog.Content>
                                    <Text variant="bodyMedium" style={{textAlign:'center', fontSize: 20}}>Are you sure you want to do logout?</Text>
                                </Dialog.Content>
                                <Dialog.Actions>
                                    <Button onPress={handleLogout}>Confirm</Button>
                                    <Button onPress={hideDialog}>Cancel</Button>
                                </Dialog.Actions>
                            </Dialog>
                        </Portal>
                    </View>

                    <View style={styles.searchView}>

                        <Searchbar
                            placeholder="Search Any Recipe"
                            // onChangeText={handleSearch}
                            onPress={() => navigation.navigate('SearchRecipe')}
                            style={styles.search}
                            selectionColor='#f6f6f6'
                        />
                        <IconButton
                            icon="menu"
                            iconColor="#f6f6f6"
                            size={40}
                            onPress={() => navigation.navigate('RecipeMealCard')}
                            style={styles.menuIcon}
                        />
                    </View>
                </View>

                <RecipeTag navigation={navigation} />
                <RecipeMeal navigation={navigation} />
                <AllRecipe navigation={navigation} />

            </ScrollView>
        </SafeAreaView>
    );
}

export default HomePage;

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#F4612D",
        width: "100%",
        Height: "100%",
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },
    Avatar: {
        margin: moderateScale(10),
        backgroundColor: "#f6f6f6"
    },
    headerContent: {
        margin: moderateScale(10)
    },
    h1: {
        textAlign: 'center',
        color: '#242424',
        fontSize: textScale(18),
        fontWeight: 800,
    },
    h2: {
        color: '#242424',
        fontSize: textScale(15),
        textAlign: 'center',
        fontWeight: 650,
    },
    bell: {
        position: 'absolute',
        top: moderateScaleVertical(2),
        right: moderateScale(0)
    },
    searchView: {
        padding: moderateScale(10),
        paddingVertical: moderateScaleVertical(15),
    },
    search: {
        marginHorizontal: moderateScale(5),
        width: "85%",
        backgroundColor: '#f4edf9',
    },
    menuIcon: {
        position: 'absolute',
        right: moderateScale(5),
        top: moderateScaleVertical(10)
    },

})