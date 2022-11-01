import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import styles from'../assets/style/pageStyle'

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.slide}
        source={require('../assets/img/flat-lay-pills-syringe-with-copy-space1.png')}
      />
      <View style={styles.sliderContent}>
        <Text style={styles.contentWord}>
          {' '}
          Save axtra on {`\n`} every order
        </Text>
        <Text style={styles.contentDetail}>
          Etiam mollis metus non {`\n`}faucibus sollivitudin
        </Text>
      </View>
      <Text style={styles.productTitle}> Diabetic Diet </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.productDetail}>
          <View style={styles.images}>
            <View style={styles.imagesProduct}>
              <Image
                style={styles.imagesMedicine}
                source={require('../assets/img/image134.png')}
              />
              <Text style={styles.imagesTitle}> Sugar{`\n`} Substitute </Text>
            </View>
            <View style={styles.imagesProduct}>
              <Image
                style={styles.imagesMedicine}
                source={require('../assets/img/image133.png')}
              />
              <Text style={styles.imagesTitle}> Juices & {`\n`}Vinegars </Text>
            </View>

            <View style={styles.imagesProduct}>
              <Image
                style={styles.imagesMedicine}
                source={require('../assets/img/image133.png')}
              />
              <Text style={styles.imagesTitle}> Vitamins {`\n`}Medicines</Text>
            </View>
            <View style={styles.imagesProduct}>
              <Image
                style={styles.imagesMedicine}
                source={require('../assets/img/image133.png')}
              />
              <Text style={styles.imagesTitle}> Vitamins {`\n`}Medicines</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <Text style={styles.chainTitle}>All Product</Text>

      <View style={styles.chainProduct}>
        <View style={styles.chainDetail}>
          <Image
            style={styles.chainImages}
            source={require('../assets/img/image20.png')}
          />
          <Text style={styles.chainCaption}>
            Accu-check Active{`\n`}
            Test Strip
          </Text>
        </View>
        <View style={styles.chainDetail}>
          <Image
            style={styles.chainImages}
            source={require('../assets/img/image20.png')}
          />
          <Text style={styles.chainCaption}>
            Omron HEM-8712 {`\n`}
            BP Monitor
          </Text>
        </View>
        <View style={styles.chainDetail}>
          <Image
            style={styles.chainImages}
            source={require('../assets/img/image20.png')}
          />
          <Text style={styles.chainCaption}>
            Omron HEM-8712 {`\n`}
            BP Monitor
          </Text>
        </View>
        <View style={styles.chainDetail}>
          <Image
            style={styles.chainImages}
            source={require('../assets/img/image20.png')}
          />
          <Text style={styles.chainCaption}>
            Omron HEM-8712 {`\n`}
            BP Monitor
          </Text>
        </View>
        <View style={styles.chainDetail}>
          <Image
            style={styles.chainImages}
            source={require('../assets/img/image20.png')}
          />
          <Text style={styles.chainCaption}>
            Omron HEM-8712 {`\n`}
            BP Monitor
          </Text>
        </View>
        <View style={styles.chainDetail}>
          <Image
            style={styles.chainImages}
            source={require('../assets/img/image20.png')}
          />
          <Text style={styles.chainCaption}>
            Omron HEM-8712 {`\n`}
            BP Monitor
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DisplayAnImage;
