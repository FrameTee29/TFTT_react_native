import React, { Component } from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';

export default class Tearofgod extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (<Text style={{ fontSize: 30, fontWeight: 'bold', color: '#110244', alignItems: 'center', }}>Needlessly Large Rod</Text>),
        }
    }
    render() {
        return (
            <View style={styles.Stru}>
                {/*แถวที่ 1 Spear of Shojin*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Tear.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/B_F_Sword.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/Recurve/Gunblade.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 20, color: '#9B6E38', fontWeight: 'bold' }}>Spear of Shojin</Text>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{ fontSize: 10, color: 'white', }}>หลังจากร่ายสกิล การโจมตีปกติของผู้ใช้จะฟื้นฟู 15.0% จากมานาสูงสุดเขา</Text>
                        </View>
                    </View>
                </View>
                {/*แถวที่ 2 Statikk*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Tear.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Recurce_Bow.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/Recurve/Statik.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 20, color: '#9B6E38', fontWeight: 'bold' }}>Statikk Shiv</Text>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{ fontSize: 10, color: 'white', }}>ทุกการโจมตีปกติครั้งที่สามของผู้ใช้จะสร้างความเสียหายเวท </Text>
                            <Text style={{ fontSize: 10, color: 'white', }}>100.0 หน่วย กับศัตรู 3.0 เป้าหมาย</Text>
                        </View>
                    </View>
                </View>
                {/*แถวที่ 3 Luden*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Tear.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Needlessly_Large_rod.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/Recurve/Luden.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 20, color: '#9B6E38', fontWeight: 'bold' }}>Luden's Echo</Text>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{ fontSize: 10, color: 'white', }}>เมื่อผู้ใช้สร้างความเสียหายด้วยสกิล จะทำให้เป้าหมายแรกที่โดนและ</Text>
                            <Text style={{ fontSize: 10, color: 'white', }}>ศัตรูที่อยู่ใกล้มากถึง 3.0 ตัวได้รับความเสียหายเวทเพิ่ม 180.0 หน่วย</Text>
                        </View>
                    </View>
                </View>
                {/*แถวที่ 4 Seraph's Embrace*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Tear.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Tear.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/Recurve/Seraph.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 20, color: '#9B6E38', fontWeight: 'bold' }}>Seraph's Embrace</Text>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{ fontSize: 10, color: 'white', }}>หลังจากร่ายสกิล ผู้ใช้จะฟื้นฟูมานา 20.0 หน่วย</Text>
                        </View>
                    </View>
                </View>
                {/*แถวที่ 5 Frozen Heart*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Tear.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Chain_Vest.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/Recurve/FrozenHeart.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 20, color: '#9B6E38', fontWeight: 'bold' }}>Frozen Heart</Text>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{ fontSize: 10, color: 'white', }}>ลดความเร็วโจมตีของศัตรูที่อยู่รอบข้างลง 25.0% </Text>
                        </View>
                    </View>
                </View>
                {/*แถวที่ 6 Hush*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Tear.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Negaton.jpg')} style={styles.ImageItem}></Image>
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
                {/*แถวที่ 7 Redemption*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Tear.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Giant_Blet.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/Recurve/Redemption.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 20, color: '#9B6E38', fontWeight: 'bold' }}>Redemption</Text>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{ fontSize: 10, color: 'white', }}>เมื่อผู้ใช้พลังชีวิตลดลงต่ำกว่า 25.0% จะฮีลเพื่อนร่วมทีมที่อยู่ใกล้เคียง1200.0หน่วย</Text>
                            <Text style={{ fontSize: 10, color: 'white', }}>หลังจากผ่านไป 2.5 วินาทีเอฟเฟกต์นี้สามารถเกิดขึ้นได้เพียงครั้งเดียวในการต่อสู้</Text>
                        </View>
                    </View>
                </View>
                 {/*แถวที่ 8 Darkin*/}
                 <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Tear.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Spatula.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/Recurve/Darkin.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 20, color: '#9B6E38', fontWeight: 'bold' }}>Darkin</Text>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{ fontSize: 10, color: 'white', }}>เพิ่ม Mana +20.0 หน่วยผู้ใช้จะถือว่าเป็นปีศาจด้วย</Text>
                            <Text style={{ fontSize: 10, color: 'white', }}>[เฉพาะ - สามารถใส่ได้ 1 ชิ้นต่อแชมเปี้ยนเท่านั้น]</Text>
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
