import { View, Text, SafeAreaView, Platform, StatusBar, BackHandler, Alert, ScrollView, Touchable, Pressable } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import BackButtonHandler from '../scripts/assistive/BackButtonHandler';
import TextButton from '../components/buttons/TextButton';

function Support(props) {    
    const navigation = useNavigation();   
    
    useEffect(() => { //Subscribe on ABB               
        navigation.addListener('focus', () => {
            BackButtonHandler.handleAndroidBackButton(() => { 
                navigation.navigate('Main');
            })
        })
            
        navigation.addListener('blur', BackButtonHandler.removeAndroidBackButtonHandler);
    }, []);  

    const handleBackButton = () => {        
        navigation.navigate('Main');
    }

    return (
        <View className="bg-background dark:bg-backgroundDRK">
            <SafeAreaView className="flex items-center h-full w-[90%] m-auto" style={{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>            
                <View style={{overflow: 'hidden', borderTopLeftRadius: 16, borderTopRightRadius: 16, borderBottomLeftRadius: 16, borderBottomRightRadius: 16}}>
                    <ScrollView className="w-full h-screen" showsVerticalScrollIndicator={false}>
                        {/* Header text */}
                        <View className="mt-5 sm:mt-7 md:mt-12">
                            <Text className="text-xl font-medium text-center text-headerDescr dark:text-headerDescrDRK">SUPPORT</Text>
                            <Text className="text-5xl font-bold text-center text-headerText dark:text-headerTextDRK">OUR TEAM</Text>
                        </View>

                        {/* Atteniton block */}
                        <View className="mt-10 sm:mt-12">
                            <Text className="text-3xl font-semibold text-center text-headerText dark:text-headerTextDRK">This app is free</Text>
                            <Text className="text-center text-lg md:text-xl mt-2.5 text-subText dark:text-subTextDRK">We don't impose paid subscriptions, ads, or any paid functions. However, our team relies on contributions to continue developing the app.</Text>
                        </View>

                        {/* Atteniton block 2 */}
                        <View className="mt-6 sm:mt-8">
                            <Text className="text-3xl font-semibold text-center text-headerText dark:text-headerTextDRK">We believe in you</Text>
                            <Text className="text-center text-lg md:text-xl mt-2.5 text-subText dark:text-subTextDRK">This app helps you earn money and change your life. It’s worth a lot. In return, we ask for whatever amount you can and want to give.</Text>
                        </View>

                        {/* Money block */}
                        <Text className='mt-9 sm:mt-11 font-semibold text-left text-lg md:text-xl  text-subText dark:text-subTextDRK'>Card: </Text>
                        <Text className="text-left text-lg md:text-xl text-subText dark:text-subTextDRK" selectable={true}>5208 1300 1111 0867</Text>

                        <Text className='mt-2 sm:mt-4 font-semibold text-left text-lg md:text-xl  text-subText dark:text-subTextDRK'>IBAN: </Text>
                        <Text className="text-left text-lg md:text-xl text-subText dark:text-subTextDRK" selectable={true}>BY40 ALFA 3014 317G 4M00 3027 0000</Text>

                        <Text className='mt-2 sm:mt-4 font-semibold text-left text-lg md:text-xl  text-subText dark:text-subTextDRK'>SWIFT/BIC: </Text>
                        <Text className="text-left text-lg md:text-xl text-subText dark:text-subTextDRK" selectable={true}>ALFABY2X</Text>

                        <Text className='mt-2 sm:mt-4 font-semibold text-left text-lg md:text-xl  text-subText dark:text-subTextDRK'>Bitcoin: </Text>
                        <Text className="text-left text-lg md:text-xl text-subText dark:text-subTextDRK" selectable={true}>bc1qsynhmmlsw662gm57crsakdl299kshhtlhqq7r5</Text>

                        <Text className='mt-2 sm:mt-4 font-semibold text-left text-lg md:text-xl  text-subText dark:text-subTextDRK'>Ethereum: </Text>
                        <Text className="text-left text-lg md:text-xl text-subText dark:text-subTextDRK" selectable={true}>0x4F8dC39824a1102DaAd69E09a73C779a613750ea</Text>

                        <Text className='mt-2 sm:mt-4 font-semibold text-left text-lg md:text-xl  text-subText dark:text-subTextDRK'>Litecoin: </Text>
                        <Text className="text-left text-lg md:text-xl text-subText dark:text-subTextDRK" selectable={true}>ltc1qaxwrvn97r4f3d4p7hmak4e9j6fudye3lyp42rg</Text>

                        <Text className='mt-2 sm:mt-4 font-semibold text-left text-lg md:text-xl  text-subText dark:text-subTextDRK'>Dogecoin: </Text>
                        <Text className="text-left text-lg md:text-xl text-subText dark:text-subTextDRK" selectable={true}>DP9eQM8gE4j7jhYenme6Mcyx4ju1Esjr6Q</Text>

                        <Text className='mt-2 sm:mt-4 font-semibold text-left text-lg md:text-xl  text-subText dark:text-subTextDRK'>Solana: </Text>
                        <Text className="text-left text-lg md:text-xl text-subText dark:text-subTextDRK" selectable={true}>ETKXAyviNzycw1FHiw9ZCMqWzjvpCThQodULAWVSHYLm</Text>

                        <Text className="text-center text-lg md:text-xl mt-10 text-subText dark:text-subTextDRK" selectable={true}>You can copy this text 📋</Text>
                        <Text className="text-center text-lg md:text-xl mt-5 text-subText dark:text-subTextDRK">Thank you for your support 🤗</Text>

                        {/* Atteniton block 2 */}
                        <View className="mt-8 sm:mt-10 mb-16 sm:mb-20">
                            <Text className="text-3xl font-semibold text-center text-headerText dark:text-headerTextDRK">Small tips</Text>
                            <Text className="text-center text-lg md:text-xl mt-2.5 text-subText dark:text-subTextDRK">You can start a new period by clicking on the amount of days left.</Text>
                            <Text className="text-center text-lg md:text-xl mt-2.5 text-subText dark:text-subTextDRK">You can expand the tasks card by clicking on the name of the card.</Text>
                        </View>

                        <TextButton text='Back' style='self-start absolute' textViewStyle='mt-5' onPress={handleBackButton}/>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </View>
    );
}

export default Support;