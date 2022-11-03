import { Image, StyleSheet, Text, View } from '@react-pdf/renderer';
import { colors } from '../../../styles/styles';
import Dots from '../Dots';

const styles = StyleSheet.create({
  column: {
    display: 'flex',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    height: '72mm',
    width: '44.25mm',
    transform: 'rotate(-70deg)',
  },
  cursive: {
    fontFamily: 'Learning Curve',
    fontSize: '60pt',
    lineHeight: 1.1,
    color: colors.black60,
    marginTop: '4mm',
  },
  year: {
    fontFamily: 'Inter',
    fontSize: '72pt',
    lineHeight: 1.1,
    fontWeight: 'bold',
    color: colors.black30,
    marginLeft: '4mm',
  },
  logo: {
    width: '40mm',
    height: '40mm',
    opacity: 0.5,
  },
  text: {
    fontFamily: 'Inter',
    fontSize: '8pt',
    lineHeight: 1.1,
    color: colors.black60,
  },
  icon: {
    width: '3mm',
    height: '3mm',
    opacity: 0.5,
    marginRight: '2mm',
  },
});

const Credits = ({ year }) => {
  return (
    <View style={{ position: 'relative', height: '100%' }}>
      <View style={styles.column}>
        <View style={styles.row}>
          <Image style={styles.image} src="/images/flower2.jpg" alt="" />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: '-24mm',
            }}
          >
            <Text style={styles.cursive}>Feliz</Text>
            <Text style={styles.year}>{`${year + 1}!`}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Image style={styles.logo} src="/images/logo.jpg" alt="" />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: '4mm',
            }}
          >
            <Image style={styles.icon} src="/images/whatsapp.jpg" alt="" />
            <Text style={styles.text}>(61) 98148-5145</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: '2mm',
            }}
          >
            <Image style={styles.icon} src="/images/instagram.jpg" alt="" />
            <Text style={styles.text}>@simplesmentesandroca</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: '2mm',
            }}
          >
            <Text style={styles.text}>simplesmentesandroca@hotmail.com</Text>
          </View>
          <Dots columns={20} dots={1} padding={'6mm 0 6mm 0'} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>ilustrações</Text> @ohoh.lele
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: '2mm',
            }}
          >
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>projeto gráfico</Text>{' '}
              @entretantosestudio | @dada1smo
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Credits;
