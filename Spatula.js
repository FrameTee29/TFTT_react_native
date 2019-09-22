import React, { Component } from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';

export default class Spatula1 extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (<Text style={{ fontSize: 30, fontWeight: 'bold', color: '#110244', alignItems: 'center', }}>Spatula</Text>),
        }
    }
    render() {
        return (
            <View style={styles.Stru}>
                {/*แถวที่ 1 Yomuu*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Spatula.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/B_F_Sword.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/Recurve/Yomu.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 15, color: '#9B6E38', fontWeight: 'bold' }}>Yomuu</Text>
                        <View style={{ flexDirection: 'column', }}></View>
                        <Text style={{ fontSize: 10, color: 'white', }}>เพิ่ม AD +15.0ผู้ใช้จะถือว่าเป็นมือสังหารด้วย</Text>
                        <Text style={{ fontSize: 10, color: 'white', }}>[เฉพาะ - สามารถใส่ได้ 1 ชิ้นต่อแชมเปี้ยนเท่านั้น]</Text>
                    </View>
                </View>
                {/*แถวที่ 2 Blade of the Ruined King*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Spatula.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Recurce_Bow.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/Recurve/Runeking.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 20, color: '#9B6E38', fontWeight: 'bold' }}>Blade of the Ruined King</Text>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{ fontSize: 10, color: 'white', }}>เพิ่ม AS +20.0 หน่วยผู้ใช้จะถือว่าเป็นนักดาบด้วย</Text>
                            <Text style={{ fontSize: 10, color: 'white', }}>[เฉพาะ - สามารถใส่ได้ 1 ชิ้นต่อแชมเปี้ยนเท่านั้น]</Text>
                        </View>
                    </View>
                </View>
                {/*แถวที่ 3 yuumi*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Spatula.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Needlessly_Large_rod.jpg')} style={styles.ImageItem}></Image>
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
                {/*แถวที่ 4 Darkin*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Spatula.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Tear.jpg')} style={styles.ImageItem}></Image>
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
                {/*แถวที่ 5 Knight's Vow*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Spatula.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Chain_Vest.jpg')} style={styles.ImageItem}></Image>
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
                {/*แถวที่ 6 Runaan's Hurricane*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Spatula.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Negaton.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/Recurve/Runaan.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 20, color: '#9B6E38', fontWeight: 'bold' }}>Runaan's Hurricane</Text>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{ fontSize: 10, color: 'white', }}>เพิ่ม MR +20.0การโจมตีปกติจะยิงมิสไซล์เพิ่มออกไปใส่ศัตรูเป้าหมาย</Text>
                            <Text style={{ fontSize: 10, color: 'white', }}> สร้างความเสียหาย 75.0% จากพลังโจมตีของผู้ใช้</Text>
                        </View>
                    </View>
                </View>
                {/*แถวที่ 7 Frozen Mallet*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Spatula.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Giant_Blet.jpg')} style={styles.ImageItem}></Image>
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
                {/*แถวที่ 8 Force of Nature*/}
                <View style={styles.Stru}>
                    <View style={styles.inStru}>
                        <Image source={require('./BaseItem/Recurve/Spatula.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                        <Image source={require('./BaseItem/Recurve/Spatula.jpg')} style={styles.ImageItem}></Image>
                        <Text style={{ fontSize: 20, color: 'white' }}>=</Text>
                        <Image source={require('./BaseItem/Recurve/Force.jpg')} style={styles.ImageItem}></Image>
                    </View>
                    <View style={styles.inStru}>
                        <Text style={{ fontSize: 20, color: '#9B6E38', fontWeight: 'bold' }}>Force of Nature</Text>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontSize: 10, color: 'white', }}>ทีมของผู้ใช้ได้รับขนาดทีมสูงสุด +1.0 หน่วย</Text>
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
