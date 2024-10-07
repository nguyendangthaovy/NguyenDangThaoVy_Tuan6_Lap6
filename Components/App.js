import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';


const DATA = [
  {
    id: '1',
    title: 'Ca nấu lẩu, nấu mì mini',
    title2: 'Shop devang',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1oh1clzMRcwLrWeZ8PZ2K4zWJ8STQawunxg&s',
  },
  {
    id: '2',
    title: '1kg gà khô bơ tỏi',
    title2: 'Shop LTD FOOD',
    image: 'https://mamifarm.com.vn/wp-content/uploads/2021/11/0-scaled.jpg',
  },
  {
    id: '3',
    title: 'Xe cần cẩu đa năng',
    title2: 'Shop thế giới đồ chơi',
    image:
      'https://bizweb.dktcdn.net/thumb/1024x1024/100/403/846/products/img-7060.jpg?v=1604552346983',
  },
  {
    id: '4',
    title: 'Đồ chơi dạng mô hình',
    title2: 'Shop thế giới đồ chơi',
    image:
      'https://cdn.shopify.com/s/files/1/0731/6514/4343/products/bru03761_6.jpg?v=1684911060',
  },
  {
    id: '5',
    title: 'Lãnh Đạo Giản Đơn',
    title2: 'Shop Minh Long Book',
    image:
      'https://product.hstatic.net/1000237375/product/lang-dao-gian-don-900x900_3_7001f3146cc54c3c9e9320f8eef919fe.png',
  },
  {
    id: '6',
    title: 'Hiếu Lòng Con Trẻ',
    title2: 'Shop Minh Long Book',
    image:
      'https://cdn0.fahasa.com/media/catalog/product/h/i/hieu_long_con_tre_tieu_hoc_1_2020_05_15_13_50_44.jpg',
  },
];

const App = ({ navigation }) => {
const Item = ({ title, title2, image }) => (
  <View style={styles.item}>
    <Image source={{ uri: image }} style={styles.image} />

    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title2}>{title2}</Text>
    </View>

    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Chat</Text>
    </TouchableOpacity>
  </View>
);


  return (
    <View style={styles.container}>
      <View style={styles.topNavbar}>
        <TouchableOpacity onPress={() => navigation.navigate('ProductList')}>
          <Entypo name="chevron-left" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.header}>Chat</Text>
        <TouchableOpacity style={styles.cartButton}>
          <MaterialIcons name="shopping-bag" size={28} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.item1}>
        <Text style={styles.title1}>
          Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
        </Text>
      </View>
      <View style={styles.divider} />
    
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item title={item.title} title2={item.title2} image={item.image} />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.divider} />} 
      />
      <View style={styles.bottomNavbar}>
        <TouchableOpacity>
          <Entypo name="menu" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="home" size={24} color="black"  />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topNavbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  item: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginHorizontal: 14,
    flexDirection: 'row', // Bố cục thành hàng ngang
    alignItems: 'center', // Căn giữa các phần tử theo chiều dọc
    justifyContent: 'space-between', // Chia đều các phần tử
  },
  textContainer: {
    flex: 1, // Dùng hết không gian còn lại
    marginLeft: 10, // Khoảng cách từ hình ảnh tới text
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  title1: {
    fontSize: 16,
  },
  title2: {
    fontSize: 14,
    color: 'red',
    marginTop: 4,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8, // Góc bo tròn cho hình ảnh
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginLeft: 10, // Khoảng cách giữa text và button
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  divider: {
    height: 1, // Độ cao của đường kẻ
    backgroundColor: '#ddd', // Màu của divider (xám nhạt)
    width: '100%', // Chiều rộng full màn hình
    marginVertical: 5, // Khoảng cách giữa các mục
  },
  bottomNavbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#2196F3',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default App;