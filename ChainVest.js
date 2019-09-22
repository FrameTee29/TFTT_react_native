import React, { Component } from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';

export default class ChainVesttt extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (<Text style={{ fontSize: 30, fontWeight: 'bold', color: '#110244', alignItems: 'center', }}>Chain Vest</Text>),
        }
    }
    render() {
        return (
            <View style={styles.Stru}>
                {/*แถวที่ 1 Guardian Angel*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Chain_Vest.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/B_F_Sword.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/Recurve/GuardianAngel.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 15, color: '#9B6E38', fontWeight: 'bold' }}>Guardian Angel</Text>
                        <View style={{ flexDirection: 'column', }} >
                            <Text style={{ fontSize: 10, color: 'white', }}>เมื่อผู้ใช้ตาย จะลบล้างสถานะผิดปกติและคืนชีพพร้อมกับพลังชีวิต 500.0 </Text>
                            <Text style={{ fontSize: 10, color: 'white', }}>หน่วยหลังจากผ่านไป 2.0 วินาที เอฟเฟกต์นี้สามารถเกิดขึ้นได้เพียงหนึ่งครั้งในการต่อสู้</Text>
                        </View>
                    </View>
                </View>
                {/*แถวที่ 2 Phantom Dancer*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Chain_Vest.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Recurce_Bow.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/Recurve/phantom.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 20, color: '#9B6E38', fontWeight: 'bold' }}>Phantom Dancer</Text>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{ fontSize: 10, color: 'white', }}>ผู้ใช้จะหลบหลีกการโจมตีปกติทั้งหมดที่น่าจะเป็นการโจมตีคริติคอล</Text>
                            <Text style={{ fontSize: 10, color: 'white', }}>[เฉพาะ - สามารถใส่ได้ 1 ชิ้นต่อแชมเปี้ยนเท่านั้น]</Text>
                        </View>
                    </View>
                </View>
                {/*แถวที่ 3 Locket of the Iron Solari*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Chain_Vest.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Needlessly_Large_rod.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/Recurve/Sorali.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 20, color: '#9B6E38', fontWeight: 'bold' }}>Locket of the Iron Solari</Text>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{ fontSize: 10, color: 'white', }}>เมื่อเริ่มการต่อสู้ ผู้ใช้และเพื่อนร่วมทีมที่อยู่ในระยะ 2.0 </Text>
                            <Text style={{ fontSize: 10, color: 'white', }}>ช่องในแถวเดียวกันจะได้รับโล่ป้องกันความเสียหาย </Text>
                            <Text style={{ fontSize: 10, color: 'white', }}>300.0 หน่วยเป็นเวลา 7.0 วินาที</Text>
                        </View>
                    </View>
                </View>
                {/*แถวที่ 4 Frozen Heart*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Chain_Vest.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Tear.jpg')} style={styles.ImageItem}></Image>
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
                {/*แถวที่ 5 Thornmail*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Chain_Vest.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Chain_Vest.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/Recurve/Thornmail.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 20, color: '#9B6E38', fontWeight: 'bold' }}>Thornmail</Text>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{ fontSize: 10, color: 'white', }}>เมื่อผู้ใช้ได้รับความเสียหายจากการโจมตีปกติ เขาจะสะท้อน 100.0% ของความ</Text>
                            <Text style={{ fontSize: 10, color: 'white', }}>เสียหายที่ป้องกันได้กลับไปเป็นความเสียหายเวท</Text>
                        </View>
                    </View>
                </View>
                {/*แถวที่ 6 Sword Breaker*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Chain_Vest.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Negaton.jpg')} style={styles.ImageItem}></Image>
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
                {/*แถวที่ 7 Red Buff*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Chain_Vest.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Giant_Blet.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/Recurve/Redbuff.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 20, color: '#9B6E38', fontWeight: 'bold' }}>Red Buff</Text>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{ fontSize: 10, color: 'white', }}>การโจมตีปกติของผู้ใช้จะเผาเป้าหมายต่อการโจมตี สร้างความเสียหายจริง20.0%</Text>
                            <Text style={{ fontSize: 10, color: 'white', }}>จากพลังชีวิตสูงสุดของเป้าหมายภายในช่วงเวลา 10.0 วินาทีและลดเอฟเฟกต์</Text>
                            <Text style={{ fontSize: 10, color: 'white', }}>การฮีลลง 80% ตลอดระยะเวลาเผาไหม้ แชมเปี้ยนจะสามารถติดเอฟเฟกต์เผาไหม้</Text>
                        </View>
                    </View>
                </View>
                 {/*แถวที่ 8 Darkin*/}
                 <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Chain_Vest.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Spatula.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/Recurve/Knight.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 20, color: '#9B6E38', fontWeight: 'bold' }}>Knight's Vow</Text>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{ fontSize: 10, color: 'white', }}>เพิ่ม Armor +20.0 หน่วยผู้ใช้จะถือว่าเป็นอัศวินด้วย</Text>
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
