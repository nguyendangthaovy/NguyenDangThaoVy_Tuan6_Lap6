import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

const productData = [
  {
    id: '1',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4,
    reviews: '(15)',
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/4400/39b8/47a25e463563954abcba9a885fd06c1a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LmkDbjmJRxWJ6TzuV2W7ji-tZ17lybDUKpxOjHdFaW-jFuThayIKw8xkaELSnV9GlEzdOi6AVzdgeCDxDxrjwV7ztF8gxdzTZAJYsf1R2lHWdUueHcdZh0jR2Y67Eg-p-Bd~Ocv9vvTnmuVc1taaShDxUV7xSU6bO5lD1RKM8Ejd7I54NrPUprrRgeW5vgHYjES0T6ayq9o4tbPj41Z22ysJGhx~CFQ30QIfIhxJOoz9VZE4TW7L4H2LdLT9-aedQCrme8t7AQY9Nsk1g6lJxpmeMOuApz9WncY1mvhDL1PMXadwsfDqxYZOWP4aAwUo1Ap46c7t6hY6Q3~WbiMDwQ__',
  },
  {
    id: '2',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4,
    reviews: '(15)',
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c12d/6fdf/653e7955fdd212ca1c4f3e84a556faf8?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lg057QUEIMBV6tjq9Ofv8lf2ovZ3KrDsw~dkO8PL0yUY97HLf4sPxNcxw0PdPKRzpCAxqZDWJJa7QjyNJHGqtNrbfKToq0A8ODxwP3eAO96HMyuSZAE3DzO5k3S7WKzO2-bxj9v-LtjYVwojeJ83xqGpurf-GmXrfxrUmRonC0fedhwytEj2dXuisjaottlFplHrDEFjMOXcA-oT-VDSLX2dBvNtZbgw877LItkJ6ghkvDIneax5gBy~OEbi0lcco3GgfppGeb0VSqHO4VvbHczR8JwpzndsKT3ZBgOMcQk4WDlgGpNMrQ33hq4Y4gtEXyl9xwz9Tj~cnGtE2R3Q2A__',
  },
  {
    id: '3',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4,
    reviews: '(15)',
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/e7a9/6613/19b8bd78c56e1818b8e5c5cac103b98a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lqg04q1PgIF45R2ABTLUA2okdVHhGRt5SLkpZFNqdDWd5AHjhVtCbneqsqIBX8nmgpbEX0EpCsxXSaYi7DVUIAQlRpXDWCKlIeZtPjsFxc8iBL4AUeCJjaG47rRfdfbOedpVwc2zrveXVDK3oi24x3y9pHf~CdZBqw3obfAlzrHqSVhNj0EXVX1Zjkzmy~KZw0zB7XWzZ0HOkWSoDdzGRrL6Gh2u3xKJ7XEvGF-q0Im02SULQO9w9zUWukuCuMXygZpWEJY28aWA6vmVlHifghNYFFEFutUlazVW2OQlzP6q3R-DfIMgNeoTmO9x9aioyEue8rEXwF~I6vcUYnzoKQ__',
  },
  {
    id: '4',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4,
    reviews: '(15)',
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/160f/3e8a/05ab63a7c5f544ef7b8f5c6c6e5d1265?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F5g6fBnG5F8T0P8dQTZ-pOHWx81Q2MArCPj60VERKs~T65F4gcy0neTpzxwwVy5x8HPpIPsNF4lqRZkK44NNdGD8IpgqCPdHpJdjDKHYEDfrJPZz2pzMwf3huwswwIMh6OFERdsh8~rKn9eKG0VzvvbYu1PzqehIQ4xdRv2~Dm4j3QLOCv9umsTuLzUoL-SFbIB3qr-9JsvXJitaYM7uReZgWvcPboxVrqi59hIxYjV~bN3XWFQeqPCQYSJHwbSXo~BOTEjy-KS2hSD4LeaYkoqcbnxGHM8hwVaPHyocJh8e7DThUD109bS3~P1YWkJJgER6QPMlbr2balZ~qcKv6w__',
  },
  {
    id: '5',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4,
    reviews: '(15)',
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/affd/f93f/aa4f39be8f379f8535c243245368ffad?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KFRyUvQB5bdQmCDAIM5kMFptIFeq806hritQ2fiVSHTTlQrtJZilhpzOZ41t8vG4E~GA3pCCMFd8jvkKUCQe2ETC5QmqZPk3WzulDN14KXkEcAFkXYk~Q~Obkv6aAcVX1rahr5zucZoIvmMP09ZUUZkj0SpS5eLWaJd~QRjKknDtpmzUbpb6fu62EwNHsCfIVDwFtHjLr4mD8EftVYlePgS1wjQG4AwL2Q6Yk-BaTfj1~7PQnOtdfhT99MLynlfpF-djeE7OsmhTFf8tqfiShJ4eX~jGAKCROauckm7PJw5~1Mywb6IQD-k8XrKnfnKuvJkck1T5kRb0SwELAd2fzg__',
  },
  {
    id: '6',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4,
    reviews: '(15)',
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/d41c/7988/b78d982cc3ffe7fef9c3256310825f19?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Se-xMiaTjqKcHx-lFOUI9F0jgISP8Ap9~2YnLKcQ9crZ8-M4~c8HZCEHNPEJfDfTBQ2OxA-D2vG1V2svq8TX5ZCFCY3BW9TFZQ0jFkjBvdUj4ZYzqxV4ORaOBRSQ3tt2n7ElQ2Kq4V5vkWU1o0gkOtMBUC4BpSFbk-55Fd9BGnOrjheCvrmt-trTLny-V3~gnPMb9A9pJKYtrGPG80B-53kEszL0ThddUqgpqO4lSFOLtv-ooNkUcUrtp7EME6ZRv2PUXrfxJOIR1R7iVMHzHYqjlQiGQ-zlUmUnr5e73dkQ3qHZGILzFhub9b2-T~1uixH~eb2T40uSA5kR7e1LZA__',
  },
];

const Screen2 = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <View style={styles.productDetails}>
        <Text style={styles.productRating}>★ ★ ★ ★ ☆</Text>
        <Text style={styles.productReviews}>{item.reviews}</Text>
      </View>
      <View style={styles.priceDiscountContainer}>
        <Text style={styles.productPrice}>{item.price}</Text>
        <Text style={styles.productDiscount}>{item.discount}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topNavbar}>
        {/* Back button to navigate to ChatScreen */}
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Entypo name="chevron-left" size={28} color="white" />
        </TouchableOpacity>

        {/* Search Bar with Icon and Input aligned horizontally */}
        <View style={styles.searchBarContainer}>
          <MaterialIcons
            name="search"
            size={22}
            color="black"
            style={styles.searchIcon}
          />
          <TextInput style={styles.searchInput} placeholder="Dây cáp usb" />
        </View>

        <TouchableOpacity style={styles.cartButton}>
          <MaterialIcons name="shopping-bag" size={28} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cartButton}>
          <MaterialIcons name="more-horiz" size={28} color="white" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={productData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // Display items in 2 columns
        contentContainerStyle={styles.productList}
      />

      <View style={styles.bottomNavbar}>
        <TouchableOpacity>
          <Entypo name="menu" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  topNavbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    padding: 10,
  },

  searchBarContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center', // Aligns items vertically
    marginLeft: 10,
    marginRight: 10,
  },
  searchIcon: {
    marginRight: 8, // Adds some space between the icon and the text input
  },
  searchInput: {
    flex: 1, // Allows input to take up the remaining space
  },
  cartButton: {
    padding: 5,
  },
  productList: {
    padding: 10,
  },
  productContainer: {
    flex: 1,
    margin: 5,
    padding: 2,
    borderRadius: 5,
    elevation: 2,
    alignItems: 'center',
  },
  productImage: {
    width: 105,
    height: 100,
  },
  productName: {
    fontSize: 14,
    marginTop: 10,
  },
  priceDiscountContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '100%', 
    marginTop: 5, 
  },
  productPrice: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold', 
  },
  productDiscount: {
    fontSize: 14,
  },
  productDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 5,
  },
  productRating: {
    fontSize: 12,
    color: '#FFD700',
  },
  productReviews: {
    fontSize: 12,
    color: '#888',
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

export default Screen2;
