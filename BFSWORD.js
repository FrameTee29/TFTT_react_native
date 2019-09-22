import React, { Component } from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';

export default class BFSWORD1 extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (<Text style={{ fontSize: 30, fontWeight: 'bold', color: '#110244', alignItems: 'center', }}>B.F. Sword</Text>),
        }
    }
    render() {
        return (
            <View style={styles.Stru}>
                {/*แถวที่ 1 Infinity egde*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/BF/B_F_Sword.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/BF/B_F_Sword.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/BF/infinityegde.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 20, color: '#9B6E38', fontWeight: 'bold' }}>infinityegde</Text>
                        <Text style={{ fontSize: 10, color: 'white', }}>ผู้ใช้จะสร้างความเสียหายคริติคอล +150.0%</Text>
                    </View>
                </View>
                {/*แถวที่ 2 Sword of divine*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/BF/B_F_Sword.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/BF/Recurce_Bow.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/BF/Swordofdivine.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 15, color: '#9B6E38', fontWeight: 'bold' }}>Sword of Divine</Text>
                        <Text style={{ fontSize: 10, color: 'white', }}>ทุก ๆ วินาที ผู้ใช้มีโอกาส 7.0% ที่จะเพิ่มโอกาสคริติคอล 100% จนจบการต่อสู้</Text>
                    </View>
                </View>
                {/*แถวที่ 3 Hextech Gunblade*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/BF/B_F_Sword.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/BF/Needlessly_Large_rod.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/BF/Gunblade.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 15, color: '#9B6E38', fontWeight: 'bold' }}>Hextech Gunblade</Text>
                        <Text style={{ fontSize: 10, color: 'white', }}>การโจมตีปกติและสกิลจะฮีลผู้ใช้เป็น 25.0% ของความเสียหายที่ทำ</Text>
                    </View>
                </View>
                {/*แถวที่ 4 Spear of shojin*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/BF/B_F_Sword.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/BF/Tear.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/BF/Shojin.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 15, color: '#9B6E38', fontWeight: 'bold' }}>Spear of shojin</Text>
                        <Text style={{ fontSize: 10, color: 'white', }}>หลังจากร่ายสกิล การโจมตีปกติของผู้ใช้จะฟื้นฟู 15.0% จากมานาสูงสุดเขา</Text>
                    </View>
                </View>
                {/*แถวที่ 5 Guardian Angel */}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/BF/B_F_Sword.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/BF/Chain_Vest.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/BF/GuardianAngel.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 15, color: '#9B6E38', fontWeight: 'bold' }}>Guardian Angel</Text>
                        <View style={{ flexDirection: 'column', }} >
                            <Text style={{ fontSize: 10, color: 'white', }}>เมื่อผู้ใช้ตาย จะลบล้างสถานะผิดปกติและคืนชีพพร้อมกับพลังชีวิต 500.0 </Text>
                            <Text style={{ fontSize: 10, color: 'white', }}>หน่วยหลังจากผ่านไป 2.0 วินาที เอฟเฟกต์นี้สามารถเกิดขึ้นได้เพียงหนึ่งครั้งในการต่อสู้</Text>
                        </View>
                    </View>
                </View>
                {/*แถวที่ 6 The Bloodthirster*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/BF/B_F_Sword.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/BF/Negaton.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/BF/Bloodthirster.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 15, color: '#9B6E38', fontWeight: 'bold' }}>The Bloodthirster</Text>
                        <Text style={{ fontSize: 10, color: 'white', }}>การโจมตีปกติจะฮีลผู้ใช้เป็นจำนวน 40.0% ของความเสียหายที่ทำ</Text>
                    </View>
                </View>
                {/*แถวที่ 7 Zeke's Herald*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/BF/B_F_Sword.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/BF/Giant_Blet.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/BF/Zeke.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 15, color: '#9B6E38', fontWeight: 'bold' }}>Zeke's Herald</Text>
                        <View style={{ flexDirection: 'column', }}>
                            <Text style={{ fontSize: 10, color: 'white', }}>เมื่อเริ่มการต่อสู้ ผู้ใช้และเพื่อนร่วมทีมในระยะ 2.0 ช่องในแถวเดียวกัน</Text>
                            <Text style={{ fontSize: 10, color: 'white', }}>จะได้รับความเร็วโจมตี +15.0% จนจบการต่อสู้</Text>
                        </View>
                    </View>
                </View>
                {/*แถวที่ 7 Yomuu*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/BF/B_F_Sword.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/BF/Spatula.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/BF/Yomu.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 15, color: '#9B6E38', fontWeight: 'bold' }}>Yomuu</Text>
                        <View style={{ flexDirection: 'column', }}></View>
                        <Text style={{ fontSize: 10, color: 'white', }}>เพิ่ม AD +15.0ผู้ใช้จะถือว่าเป็นมือสังหารด้วย</Text>
                        <Text style={{ fontSize: 10, color: 'white', }}>[เฉพาะ - สามารถใส่ได้ 1 ชิ้นต่อแชมเปี้ยนเท่านั้น]</Text>
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
