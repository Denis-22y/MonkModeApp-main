import { View, SafeAreaView, Platform, ScrollView, Alert, BackHandler, StatusBar, Pressable } from 'react-native';

import HeaderCard from '../components/cards/header/HeaderCard';
import TaskCard from '../components/cards/focus/TaskCard';
import DiaryCard from '../components/cards/diary/DiaryCard';
import PlanningCard from '../components/cards/planning/PlanningCard';

import { useEffect, useState } from 'react';
import * as Notifications from 'expo-notifications';
import NonNegotiablesCard from '../components/cards/nonNegotiables/NonNegotiablesCard';
import { useNavigation } from '@react-navigation/native';
import BackButtonHandler from '../scripts/assistive/BackButtonHandler';
import PeriodManager from '../scripts/managers/PeriodManager';
import NonNegotiablesManager from '../scripts/managers/NonNegotiablesManager';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import NotificationsPlanner from '../scripts/assistive/NotificationsPlanner';
import Animated, { Layout } from 'react-native-reanimated';

function Main(props) {    
    const navigation = useNavigation();       

    //#region Rerender when the screen becomes active    
        const useForceRerendering = () => {
            const [counter, setCounter] = useState(0);
            return () => setCounter(counter => counter + 1);
        };    
    
        const forceRerendering = useForceRerendering();  

        navigation.addListener('focus', () => {forceRerendering();});
    //#endregion

    useEffect(() => { //Subscribe on ABB               
        if(Platform.OS === 'android'){
            navigation.addListener('focus', () => {
                BackButtonHandler.handleAndroidBackButton(() => { 
                    Alert.alert('Confirm exit', 'Do you want to quit the app?', [{text: 'CANCEL', style: 'cancel'}, {text: 'OK', onPress: () => BackHandler.exitApp()}]); 
                })
            })
            
            navigation.addListener('blur', BackButtonHandler.removeAndroidBackButtonHandler);
        }
    }, []);   

    useEffect(() => {    
        NotificationsPlanner.setupNotifications();       
        
        if(new Date().getTime() >= PeriodManager.endTime){
            Alert.alert(`You've finished the period`, 'Do you want to create another Monk Mode period?', [{text: 'No', style: 'cancel'}, {text: 'Create', onPress: () => navigation.navigate('Entering-Description')}]); 
        } 
    }, [])        

    return (
        <View className="w-full h-full bg-backgroundEssential dark:bg-backgroundEssentialDRK">
            <ExpoStatusBar style='auto' translucent/>
            <SafeAreaView className="w-[95%] h-full flex content-center mx-auto" style={{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>                                
            <View style={{overflow: 'hidden', borderTopLeftRadius: 16, borderTopRightRadius: 16, borderBottomLeftRadius: 16, borderBottomRightRadius: 16}}>
                <ScrollView className="w-full h-screen" showsVerticalScrollIndicator={false}>
                        <HeaderCard style="mt-2"/>
                        <TaskCard style="mt-1.5"/>
                        {
                            NonNegotiablesManager.haveNonNegotiables === true
                            ? <NonNegotiablesCard />
                            : <></>
                        }                        
                        <DiaryCard />
                        <PlanningCard />
                        
                        <Animated.View className="mt-5" layout={Layout}>
                            <Pressable hitSlop={30} onPress={() => navigation.navigate('Support')}>
                                <View>
                                    <Animated.Text className="text-grayTextButton dark:text-grayTextButtonDRK font-medium text-lg text-center" >Support the team</Animated.Text>            
                                </View>            
                            </Pressable>
                        </Animated.View>
                        <View className="h-32"/>
                </ScrollView>
            </View>
            </SafeAreaView>        
        </View>
    );
}

export default Main;
