import React from 'react';
import * as Asset from 'expo-asset';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const products = [
  {
    id: '1',
    name: 'Ca nấu lẩu, nấu mì mini',
    shop: 'Shop Devang',
    image: require('./assets/Canaulaumini.jpg'),
  },
  {
    id: '2',
    name: '1KG KHÔ GÀ BƠ TỎI',
    shop: 'Shop LTD Food',
    image: require('./assets/1KGKhoGaBoToi.jpeg'),
  },
  {
    id: '3',
    name: 'Xe cần cẩu đa năng',
    shop: 'Shop Tuấn Vương',
    image: require('./assets/XeCanCauDaNang.jpeg'),
  },
  {
    id: '4',
    name: 'Đồ chơi dạng mô hình',
    shop: 'Shop Thế giới đồ chơi',
    image: require('./assets/DoChoiDangMoHinh.jpeg'),
  },
  {
    id: '5',
    name: 'Lãnh đạo giản đơn',
    shop: 'Shop Minh Long Book',
    image: require('./assets/LanhDaoGianDon.png'),
  },
  {
    id: '6',
    name: 'Hiểu lòng con trẻ',
    shop: 'Shop Minh Long Book',
    image: require('./assets/HieuLongConTre.jpeg'),
  },
];

const App = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.textContainer}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.shopName}>{item.shop}</Text>
      </View>
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatButtonText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      <TouchableOpacity style={styles.iconButton} onPress={() => alert('Go back')}>
        <Icon name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
        <Text style={styles.headerText}>Chat</Text>
      <TouchableOpacity style={styles.iconButton} onPress={() => alert('Go to cart')}>
        <Icon name="cart-outline" size={24} color="#fff" />
      </TouchableOpacity>
      </View>
      
      {/* Product List */}
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#00aaff',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconButton: {
    padding: 8,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  list: {
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 8,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  shopName: {
    fontSize: 14,
    color: '#888',
  },
  chatButton: {
    backgroundColor: 'red',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  chatButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
