import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import { useTheme } from '@/theme';

import type { RootStackParamList } from '@/types/navigation';
import HomeScreen from '@/screens/Home/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from '@/screens/Search/SearchScreen';
import TicketScreen from '@/screens/Ticket/TicketScreen';
import UserScreen from '@/screens/User/UserScreen';
import HomeActive from '@/theme/icons/HomeActiveIcon';
import HomePassive from '@/theme/icons/HomePassiveIcon';
import SearchActive from '@/theme/icons/SearchActiveIcon';
import SearchPassive from '@/theme/icons/SearchPassiveIcon';
import TicketActive from '@/theme/icons/TicketActiveIcon';
import TicketPassive from '@/theme/icons/TicketPassiveIcon';
import UserActive from '@/theme/icons/UserActiveIcon';
import UserPassive from '@/theme/icons/UserPassiveIcon';

const Tab = createBottomTabNavigator();
function ApplicationNavigator() {
	const { variant, navigationTheme } = useTheme();

	return (
		<SafeAreaProvider>
			<NavigationContainer theme={navigationTheme}>
				<Tab.Navigator key={variant} screenOptions={{ headerShown:true,headerTitleStyle:{
					fontWeight:'bold'
				} }}>
					<Tab.Screen name="Home" component={HomeScreen} 
					options={{
						tabBarShowLabel:false,
						headerTitleAlign:'center',headerTitle:'Tickets',
						tabBarIcon:({focused})=>{
							return focused ? <HomeActive/> : <HomePassive/>
						}
					}}/>
					<Tab.Screen name="Search" component={SearchScreen} 
					options={{
						tabBarShowLabel:false,
						headerShown:false,
						tabBarIcon:({focused})=>{
							return focused ? <SearchActive/> : <SearchPassive/>
						}
					}}/>
					<Tab.Screen name="Ticket" component={TicketScreen}
					options={{
						tabBarShowLabel:false,
						headerShown:false,
						tabBarIcon:({focused})=>{
							return focused ? <TicketActive/> : <TicketPassive/>
						}
					}}
					/>
					<Tab.Screen name="User" component={UserScreen} 
					options={{
						tabBarShowLabel:false,
						headerShown:false,
						tabBarIcon:({focused})=>{
							return focused ? <UserActive/> : <UserPassive/>
						}
					}}/>
				</Tab.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

export default ApplicationNavigator;
