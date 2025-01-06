import React from 'react';
import Login from './src/screen/Auth/login';
import Register from './src/screen/Auth/register';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import StartPage from './src/screen/Start/StartPage';
import HomePage from './src/screen/HomePage';
import StepPage from './src/screen/Start/Steppage';
import DetailsCard from './src/screen/Recipe/RecipeCard.jsx/detailsCard';
import RecipeAllTagCard from './src/screen/Recipe/RecipeTag/RecipeAllTagCard';
import AllRecipeCard from './src/screen/Recipe/AllRecipe/AllRecipeCard';
import RecipeData from './src/screen/Recipe/RecipeTag/RecipeData';
import MealType from './src/screen/Recipe/AllRecipe/MealType';
import RecipeAllMeal from './src/screen/Recipe/RecipeMeals/RecipeAllMeal';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favourite from './src/screen/Recipe/Favourite';
import SearchRecipe from './src/screen/Recipe/RecipeCard.jsx/SearchRecipe';
import RecipeMealCard from './src/screen/Recipe/RecipeMeals/RecipeMealCard';
import ProfileScreen from './src/screen/ProfileScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs({route}) {
  const data = route.params;
  
  return (
    <Tab.Navigator screenOptions={{ 
      headerShown: false 
      }} >
      <Tab.Screen name="HomePage" component={HomePage} initialParams={{data: data}} options={{
        tabBarIcon: ({ size }) => (
          <Icon name="home" color={'#f4612d'} size={size} />
        ),
      }}/>
      <Tab.Screen name="Search" component={SearchRecipe} options={{
      tabBarIcon: ({ size }) => (
        <Icon name="search" color={'#f4612d'} size={size} />
      ),
    }}/>
      <Tab.Screen name="Favourite" component={Favourite} options={{
      tabBarIcon: ({ size }) => (
        <Icon name="heart" color={'#f4612d'} size={size} />
      ),
    }}/>
    </Tab.Navigator>
  );
}
function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        gestureDirection: 'vertical-inverted',
      }}>
       {/* <Stack.Screen name="StartPage" component={StartPage} /> */}
        {/* <Stack.Screen name="StepPage" component={StepPage} /> */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="SearchRecipe" component={SearchRecipe} options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}/>
        <Stack.Screen name="DetailsCard" component={DetailsCard} />
        <Stack.Screen name="RecipeAllTagCard" component={RecipeAllTagCard} />
        <Stack.Screen name="RecipeAllMeal" component={RecipeAllMeal} />
        <Stack.Screen name="AllRecipeCard" component={AllRecipeCard} />
        <Stack.Screen name="RecipeData" component={RecipeData} />
        <Stack.Screen name="MealType" component={MealType} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="RecipeMealCard" component={RecipeMealCard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
