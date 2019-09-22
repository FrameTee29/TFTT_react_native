import React, { Component } from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';

export default class Needlessly extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (<Text style={{ fontSize: 30, fontWeight: 'bold', color: '#110244', alignItems: 'center', }}>Needlessly Large Rod</Text>),
        }
    }
    render() {
        return (
            <View style={styles.Stru}>
                {/*แถวที่ 1 Gunblade*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Needlessly_Large_rod.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/B_F_Sword.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/Recurve/Gunblade.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 20, color: '#9B6E38', fontWeight: 'bold' }}>Hextech Gunblade</Text>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{ fontSize: 10, color: 'white', }}>การโจมตีปกติและสกิลจะฮีลผู้ใช้เป็น 25.0% ของความเสียหายที่ทำ</Text>
                        </View>
                    </View>
                </View>
                {/*แถวที่ 2 Ginsoo*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Needlessly_Large_rod.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Recurce_Bow.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/Recurve/Ginsoo.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 20, color: '#9B6E38', fontWeight: 'bold' }}>Guinsoo's Rageblade</Text>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{ fontSize: 10, color: 'white', }}>การโจมตีปกติจะทำให้ผู้ใช้ได้รับโบนับความเร็วโจมตี +5.0% </Text>
                            <Text style={{ fontSize: 10, color: 'white', }}>จนจบการต่อสู้เอฟเฟกต์นี้สามารถทับซ้อนกันได้ไม่จำกัด</Text>
                        </View>
                    </View>
                </View>
                {/*แถวที่ 3 Rabadon*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Needlessly_Large_rod.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Needlessly_Large_rod.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/Recurve/Rabadon.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 20, color: '#9B6E38', fontWeight: 'bold' }}>Rabadon's Deathcap</Text>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{ fontSize: 10, color: 'white', }}>พลังสกิลของผู้ใช้จะถูกเสริมพลังขึ้น +50.0%(พลังสกิลจากทุก</Text>
                            <Text style={{ fontSize: 10, color: 'white', }}>แหล่งจะมีผลมากขึ้น 50.0%)</Text>
                        </View>
                    </View>
                </View>
                {/*แถวที่ 4 Luden*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Needlessly_Large_rod.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Tear.jpg')} style={styles.ImageItem}></Image>
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
                {/*แถวที่ 5 Sorali*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Needlessly_Large_rod.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Chain_Vest.jpg')} style={styles.ImageItem}></Image>
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
                {/*แถวที่ 6 Ionic spark*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Needlessly_Large_rod.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Negaton.jpg')} style={styles.ImageItem}></Image>
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
                {/*แถวที่ 7 Merello*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Needlessly_Large_rod.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Giant_Blet.jpg')} style={styles.ImageItem}></Image>
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
                 {/*แถวที่ 7 Merello*/}
                 <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Needlessly_Large_rod.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Spatula.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/Recurve/Yumi.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 20, color: '#9B6E38', fontWeight: 'bold' }}>Yuumi</Text>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{ fontSize: 10, color: 'white', }}>เพิ่ม AP +20.0ผู้ใช้จะถือว่าเป็นจอมเวทด้วย</Text>
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
