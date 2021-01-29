import React, { useState } from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient'
// import axios from 'axios';


export function Drawercontent(props) {


    return (
        <View style={{ flex: 1, backgroundColor: '#FEF7FF' }} >
            <ScrollView {...props} style={{ paddingTop: 0, marginTop: 0 }} >
                <View style={{ display: 'flex', width: '100%', alignItems: 'center' }} >
                    <LinearGradient
                        colors={['#f4511e', '#eb4919', '#e24014', '#da370f', '#d12d0a']}
                        style={styles.imgDiv}
                        start={{ x: 0.7, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        {/* <View style={styles.imgDiv}  > */}
                        <Image source={require('../../assets/img/asdf.png')} style={{ height: 65, width: 70 }} />
                        {/* </View> */}
                    </LinearGradient>

                </View>
                <View style={styles.sectionDiv} onTouchStart={() => {
                    props.navigation.navigate('Main')
                }}  >
                    <View style={{
                        width: '90%', display: 'flex',
                        flexDirection: 'row-reverse', alignItems: 'center', marginTop: 30
                    }} >
                        <Image source={require('../../assets/img/home.png')} style={{ width: 40, height: 40 }} />
                        <Text style={styles.drawerText}>الرئيسية</Text>
                    </View>
                </View>

                <View style={styles.sectionDiv} onTouchStart={() => {
                    props.navigation.navigate('Resturant')
                }}  >
                    <View style={{
                        width: '90%', display: 'flex',
                        flexDirection: 'row-reverse', alignItems: 'center'
                    }} >
                        <Image source={require('../../assets/img/restaurant.png')} style={{ width: 40, height: 40 }} />
                        <Text style={styles.drawerText}>مطاعم</Text>
                    </View>
                </View>

                <View style={styles.sectionDiv} onTouchStart={() => {
                    props.navigation.navigate('Login')
                }} >
                    <View style={{
                        width: '90%', display: 'flex',
                        flexDirection: 'row-reverse', alignItems: 'center'
                    }} >
                        <Image source={require('../../assets/img/user.png')} style={{ width: 40, height: 40 }} />
                        <Text style={styles.drawerText}>الحساب</Text>
                    </View>
                </View>
                <View style={styles.sectionDiv} onTouchStart={() => {
                    props.navigation.navigate('Help')
                }}  >
                    <View style={{
                        width: '90%', display: 'flex',
                        flexDirection: 'row-reverse', alignItems: 'center'
                    }} >
                        <Image source={require('../../assets/img/help.png')} style={{ width: 40, height: 40 }} />
                        <Text style={styles.drawerText}>مساعدة</Text>
                    </View>
                </View>
                <View style={styles.sectionDiv}>
                    <View style={{
                        width: '90%', display: 'flex',
                        flexDirection: 'row-reverse', alignItems: 'center'
                    }} >
                        <Image source={require('../../assets/img/exit.png')} style={{ width: 40, height: 35 }} />
                        <Text style={styles.drawerText}> تسجيل الخروج</Text>
                    </View>
                </View>







            </ScrollView>

            {/* <Drawer.Section style={{ color: '#fff' }}   >
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon name="logout" color={'#9C634D'} size={size} />
                    )}
                    label="Sig Out"
                />
            </Drawer.Section> */}

        </View>
    )
}
export default Drawercontent;
const styles = StyleSheet.create({
    DrawerContent: {
        flex: 1,

    },
    userInfoSection: {
        paddingLeft: 20
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        marginRight: 15,
        alignItems: 'center',
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,

        width: '100%',
        direction: 'ltr'

    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: 'gray',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    imgDiv: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        // backgroundColor:'#f4511e',
        width: 150,
        height: 150,

        borderBottomLeftRadius: 90,
        borderBottomRightRadius: 90,
        transform: [{ scaleX: 2 }],

    },
    sectionDiv: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0.58,
        borderBottomColor: '#ddd',
        paddingBottom: 10,
        paddingTop: 10
    },
    drawerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#f4511e',
        padding: 10
    }


});