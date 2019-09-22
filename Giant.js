import React, { Component } from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';

export default class Giant1 extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (<Text style={{ fontSize: 30, fontWeight: 'bold', color: '#110244', alignItems: 'center', }}>Giant's Belt</Text>),
        }
    }
    render() {
        return (
            <View style={styles.Stru}>
                {/*แถวที่ 1 Zeke's Herald*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Giant_Blet.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/B_F_Sword.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/Recurve/Zeke.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 20 ,color: '#9B6E38', fontWeight: 'bold' }}>Zeke's Herald</Text>
                        <View style={{ flexDirection: 'column', }}>
                            <Text style={{ fontSize: 10, color: 'white', }}>เมื่อเริ่มการต่อสู้ ผู้ใช้และเพื่อนร่วมทีมในระยะ 2.0 ช่องในแถวเดียวกัน</Text>
                            <Text style={{ fontSize: 10, color: 'white', }}>จะได้รับความเร็วโจมตี +15.0% จนจบการต่อสู้</Text>
                        </View>
                    </View>
                </View>
                {/*แถวที่ 2 Titanic Hydra*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Giant_Blet.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Recurce_Bow.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/Recurve/Titanic.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 20, color: '#9B6E38', fontWeight: 'bold' }}>Titanic Hydra</Text>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{ fontSize: 10, color: 'white', }}>การโจมตีปกติจะสร้างความเสียหายกายภาพ 5.0% จากพลังชีวิตสูงสุด</Text>
                            <Text style={{ fontSize: 10, color: 'white', }}>ของผู้ใช้ออกมาเป็นรูปโคนจากด้านหลังของเป้าหมาย</Text>
                        </View>
                    </View>
                </View>
                {/*แถวที่ 3 Merellonomicon*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Giant_Blet.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Needlessly_Large_rod.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/Recurve/Merello.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 20, color: '#9B6E38', fontWeight: 'bold' }}>Merellonomicon</Text>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{ fontSize: 10, color: 'white', }}>เมื่อผู้ใช้สร้างความเสียหายด้วยสกิลจะเผาเป้าหมายสร้างความเสียหายจริง </Text>
                            <Text style={{ fontSize: 10, color: 'white', }}>20.0% จากพลังชีวิตสูงสุดของเป้าหมายภายในช่วงเวลา 10.0 วินาที </Text>
                            <Text style={{ fontSize: 10, color: 'white', }}>และลดเอฟเฟกต์การฮีลลง 80% ตลอดระยะเวลาเผาไหม้</Text>
                        </View>
                    </View>
                </View>
                {/*แถวที่ 4 Redemption*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Giant_Blet.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Tear.jpg')} style={styles.ImageItem}></Image>
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
                {/*แถวที่ 5 Red Buff*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Giant_Blet.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Chain_Vest.jpg')} style={styles.ImageItem}></Image>
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
                {/*แถวที่ 6 Zephyr*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Giant_Blet.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Negaton.jpg')} style={styles.ImageItem}></Image>
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
                {/*แถวที่ 7 Warmog's Armor*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Giant_Blet.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Giant_Blet.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/Recurve/Warmog.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 20, color: '#9B6E38', fontWeight: 'bold' }}>Warmog's Armor</Text>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{ fontSize: 10, color: 'white', }}>ผู้ใช้จะฟื้นฟูพลังชีวิต 6.0% จากพลังชีวิตที่หายไปของเขาทุกวินาที</Text>
                        </View>
                    </View>
                </View>
                 {/*แถวที่ 8 Frozen Mallet*/}
                 <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Giant_Blet.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Spatula.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/Recurve/FrozenMallet.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 20, color: '#9B6E38', fontWeight: 'bold' }}>Frozen Mallet</Text>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{ fontSize: 10, color: 'white', }}>เพิ่ม Health +200.0 หน่วยผู้ใช้จะถือว่าเป็นเผ่าน้ำแข็งด้วย</Text>
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
