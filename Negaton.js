import React, { Component } from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';

export default class Negatonn1 extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (<Text style={{ fontSize: 30, fontWeight: 'bold', color: '#110244', alignItems: 'center', }}>Negatron Cloak</Text>),
        }
    }
    render() {
        return (
            <View style={styles.Stru}>
                {/*แถวที่ 1 The Bloodthirster*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Negaton.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/B_F_Sword.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/Recurve/Bloodthirster.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 20, color: '#9B6E38', fontWeight: 'bold' }}>The Bloodthirster</Text>
                        <Text style={{ fontSize: 10, color: 'white', }}>การโจมตีปกติจะฮีลผู้ใช้เป็นจำนวน 40.0% ของความเสียหายที่ทำ</Text>
                    </View>
                </View>
                {/*แถวที่ 2 Curse*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Negaton.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Recurce_Bow.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/Recurve/CursedBlade.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 20, color: '#9B6E38', fontWeight: 'bold' }}>Cursed Blade</Text>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{ fontSize: 10, color: 'white', }}>การโจมตีปกติมีโอกาส 20.0% ต่อการโจมตีที่จะลดดาวของเป้าหมาย</Text>
                            <Text style={{ fontSize: 10, color: 'white', }}>ลง 1 ระดับจนจบการต่อสู้</Text>
                        </View>
                    </View>
                </View>
                {/*แถวที่ 3 Ionic*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Negaton.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Needlessly_Large_rod.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/Recurve/Ionic.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 20, color: '#9B6E38', fontWeight: 'bold' }}>Ionic Spark</Text>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{ fontSize: 10, color: 'white', }}>เมื่อใดก็ตามที่ศัตรูร่ายสกิล ผู้ใช้ไอเทมจะสร้างความเสียหายจริง 125.0หน่วย </Text>
                            <Text style={{ fontSize: 10, color: 'white', }}>ใส่ผู้ร่ายสกิล</Text>
                        </View>
                    </View>
                </View>
                {/*แถวที่ 4 Hush*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Negaton.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Tear.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/Recurve/Hush.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 20, color: '#9B6E38', fontWeight: 'bold' }}>Hush</Text>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{ fontSize: 10, color: 'white', }}>การโจมตีปกติมีโอกาส 33.0% ที่จะทำให้เป้าหมายติดสถานะใบ้ต่อการโจมตี </Text>
                            <Text style={{ fontSize: 10, color: 'white', }}>ทำให้ศัตรูไม่สามารถได้รับมานาเป็นเวลา 4.0 วินาที</Text>
                        </View>
                    </View>
                </View>
                {/*แถวที่ 5 SwordBreadker*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Negaton.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Chain_Vest.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/Recurve/SwordBreaker.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 20, color: '#9B6E38', fontWeight: 'bold' }}>Sword Breaker</Text>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{ fontSize: 10, color: 'white', }}>การโจมตีปกติของผู้ใช้มีโอกาส 33.0% ที่จะปลดอาวุธเป้าหมายเป็นเวลา </Text>
                            <Text style={{ fontSize: 10, color: 'white', }}>3.0 วินาที ทำให้ศัตรูไม่สามารถโจมตีปกติได้</Text>
                        </View>
                    </View>
                </View>
                {/*แถวที่ 6 Dragon's Claw*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Negaton.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Negaton.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/Recurve/Dragon.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 20, color: '#9B6E38', fontWeight: 'bold' }}>Dragon's Claw</Text>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{ fontSize: 10, color: 'white', }}>ผู้ใช้จะต้านทานความเสียหายเวท 83.0%</Text>
                        </View>
                    </View>
                </View>
                {/*แถวที่ 7 Zephyr*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Negaton.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Giant_Blet.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/Recurve/Zephyr.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 20, color: '#9B6E38', fontWeight: 'bold' }}>Zephyr</Text>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{ fontSize: 10, color: 'white', }}>เมื่อเริ่มการต่อสู้ ผู้ใช้จะเรียกพายุขึ้นมาที่ฝั่งตรงข้ามของสนามต่อสู้ซึ่งจะยก</Text>
                            <Text style={{ fontSize: 10, color: 'white', }}>ศัตรูที่อยู่ใกล้สุดออกจากการต่อสู้ เป็นเวลา 6.0 วินาที</Text>
                        </View>
                    </View>
                </View>
                 {/*แถวที่ 8 Runaan's Hurricane*/}
                 <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Negaton.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Spatula.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/Recurve/Runaan.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 20, color: '#9B6E38', fontWeight: 'bold' }}>Runaan's Hurricane</Text>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{ fontSize: 10, color: 'white', }}>เพิ่ม MR +20.0การโจมตีปกติจะยิงมิสไซล์เพิ่มออกไปใส่</Text>
                            <Text style={{ fontSize: 10, color: 'white', }}> ศัตรูเป้าหมายสร้างความเสียหาย 75.0% จากพลังโจมตีของผู้ใช้</Text>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    Stru: { flex: 1, flexDirection: 'column', alignItems: 'center', backgroundColor: '#110244', },
    ImageItem: { width: 50, height: 50, },
    inStru: { flexDirection: 'row', alignItems: 'center', }

});
