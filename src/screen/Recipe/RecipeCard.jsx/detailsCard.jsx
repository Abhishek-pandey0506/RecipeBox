import React from 'react';
import { Alert, FlatList, ImageBackground, ScrollView, Share, StyleSheet, Text, View } from 'react-native';
import { Card, Chip, IconButton, List } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useDispatch, useSelector } from 'react-redux';
import { addLike, selectFavorite, toggleFavorite } from '../../../Redux/Slice';
import { moderateScale, moderateScaleVertical, textScale } from '../../../component/Responsive';

function DetailsCard({ route, navigation }) {
    const data = route.params;
    // const [like, setLike] = useState(false);
    const Tab = createMaterialTopTabNavigator();

    const isFavorite = useSelector(state => selectFavorite(state, data.data.id));
    const dispatch = useDispatch();

    const Details = () => {
        return (
            <View style={{ paddingHorizontal: moderateScale(20), paddingVertical: moderateScaleVertical(20), }}>
                <Text style={styles.h4}>Cuisine: {data.data.cuisine}</Text>
                <Text style={styles.h3}>
                    <Text style={styles.h4}>
                        Prep Time: </Text>
                    {data.data.prepTimeMinutes} minutes</Text>
                <Text style={styles.h3}>
                    <Text style={styles.h4}>Cook Time: </Text>
                    {data.data.cookTimeMinutes} minutes</Text>
                <Text style={styles.h3}>
                    <Text style={styles.h4}>Difficulty:</Text> {data.data.difficulty}</Text>
                <Text style={styles.h3}>
                    <Text style={styles.h4}>Rating: </Text>{data.data.rating}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 10 }}>
                    <Text style={styles.h3}>
                        <Text style={styles.h4}>Review : </Text>{data.data.reviewCount}</Text>
                    <IconButton
                        icon="star"
                        iconColor={'#FDCC0D'}
                        size={24}
                        onPress={() => console.log('Pressed')}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 10, marginBottom: moderateScaleVertical(5) }}>
                    <Text style={styles.h4}>Meal Type:</Text>
                    <FlatList
                        data={data.data.mealType}
                        renderItem={({ item }) =>
                            <Chip key={item} style={styles.chip} onPress={() => navigation.navigate('MealType', { data: item })}>{item}</Chip>
                        }
                        keyExtractor={item => item.id}
                        horizontal= {true}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 10, marginVertical: moderateScaleVertical(5) }}>
                    <Text style={styles.h4}>Tags:</Text>
                    <FlatList
                        data={data.data.tags}
                        renderItem={({ item }) =>
                            <Chip key={item} style={styles.chip} onPress={() => navigation.navigate('RecipeData', { data: item })}>{item}</Chip>
                        }
                        keyExtractor={item => item.id}
                        horizontal= {true}
                    />
                </View>
            </View>
        );
    };

    const Ingredients = () => {
        return (
            <ScrollView style={{ paddingHorizontal: moderateScale(10), paddingVertical: moderateScaleVertical(10) , marginBottom: 10}}>
                <Text style={styles.title2}>Ingredients</Text>
                <FlatList
                    data={data.data.ingredients}
                    renderItem={({ item }) => <List.Item
                        title={item}
                        titleNumberOfLines={2}
                        left={props => <List.Icon {...props} color={'#F4612D'} icon="plus-box" />}
                    />}
                    keyExtractor={item => item.id}
                    
                />
            </ScrollView>
        );
    };

    const Instructions = () => {
        return (
            <View style={{ paddingHorizontal: moderateScale(15), paddingVertical: moderateScaleVertical(10), marginBottom: 10}}>
                <Text style={styles.title2}>Instructions </Text>
                <FlatList
                    data={data.data.instructions}
                    renderItem={({ item }) =>
                        <Card style={styles.card}>
                            <List.Item
                                title={item}
                                titleNumberOfLines={5}
                                left={props => <List.Icon {...props} color={'blue'} icon="directions" size={30} />}
                            />
                        </Card>}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    };

    const onShare = async () => {
        try {
            const result = await Share.share({
                title: data.data.name,
                message: `${data.data.name}\nIngredients: ${data.data.ingredients.join(', ')}\nInstructions: ${data.data.instructions}`,
            });
            if (result.action === Share.sharedAction) {
            } else if (result.action === Share.dismissedAction) {
            }
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    const handleLike = () => {
        dispatch(toggleFavorite({ id: data.data.id }));
        if (addLike) {
            dispatch(addLike(data.data))
        }
    };

    return (
        <View style={styles.header2}>
            <ImageBackground style={styles.image} source={{ uri: data.data.image }} >
                <IconButton
                    icon="keyboard-backspace"
                    size={35}
                    style={styles.back}
                    onPress={() => navigation.goBack()}
                />
                <IconButton
                    icon={isFavorite ? "cards-heart" : "cards-heart-outline"}
                    iconColor={isFavorite ? '#ff0000' : '#000'}
                    size={35}
                    style={styles.like}
                    onPress={handleLike}
                />
                <IconButton
                    icon="share-variant"
                    size={35}
                    style={styles.share}
                    onPress={onShare}
                />
                <Text style={styles.title}>{data.data.name}</Text>
            </ImageBackground>

            <Tab.Navigator screenOptions={{
                tabBarStyle: { height: moderateScaleVertical(46) },
                tabBarLabelStyle: { fontSize: textScale(15), fontWeight: 'bold' }
            }}>
                <Tab.Screen name="Details" component={Details} />
                <Tab.Screen name="Ingredients" component={Ingredients} />
                <Tab.Screen name="Instructions" component={Instructions} />
            </Tab.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    header2: {
        flex: 1,
        width: "100%",
        Height: "100%",
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },
    title: {
        textAlign: 'center',
        color: '#242424',
        backgroundColor: '#f6f6f6',
        fontSize: textScale(16),
        fontWeight: 800,
        top: moderateScaleVertical(270),
        width: "80%",
        left: "10%",
        borderRadius: 20,
        padding: moderateScale(8)
    },
    title2: {
        textAlign: 'center',
        color: '#242424',
        fontSize: textScale(20),
        fontWeight: 800,
    },
    h4: {
        color: 'black',
        fontSize: textScale(18),
        fontWeight: 700,
    },
    h3: {
        color: 'blue',
        fontSize: textScale(16),
        fontWeight: 650,
        // paddingHorizontal: 10
    },
    image: {
        width: '100%',
        height: moderateScaleVertical(375),
        resizeMode: 'cover',
    },
    like: {
        position: 'absolute',
        backgroundColor: '#f6f6f6',
        right: moderateScale(56),
        top: moderateScaleVertical(2)
    },
    back: {
        backgroundColor: '#f6f6f6',
        left: moderateScale(2),
        top: moderateScaleVertical(2)
    },
    share: {
        position: 'absolute',
        backgroundColor: '#f6f6f6',
        right: moderateScale(2),
        top: moderateScaleVertical(2)
    },
    chip: {
        backgroundColor: '#F5AB90',
        fontWeight: 900,
        marginHorizontal: moderateScale(5),
        marginBottom: moderateScaleVertical(5)
    },
    card: {
        width: '100%',
        marginVertical: moderateScaleVertical(5),
        // backgroundColor: '#FFFFFF',
        backgroundColor: '#E1D9D1',
    }
});

export default DetailsCard;
