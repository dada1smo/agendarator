import { StyleSheet, View } from '@react-pdf/renderer';
import { colors } from '../../../styles/styles';

const styles = StyleSheet.create({
  rows: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    padding: '4mm 0 0 4mm',
  },
  columns: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100%',
    width: '100%',
    gap: '8mm',
  },
  dots: {
    minHeight: '0.6mm',
    minWidth: '0.6mm',
    height: '0.6mm',
    width: '0.6mm',
    maxHeight: '0.6mm',
    maxWidth: '0.6mm',
    backgroundColor: colors.black30,
    borderRadius: '100%',
  },
});

function Dots({ height, padding, columns, dots }) {
  return (
    <View
      style={{
        ...styles.rows,
        height: height,
        padding: padding ? padding : styles.rows.padding,
      }}
    >
      {[...Array(columns).keys()].map((column, index) => {
        return (
          <View key={index} style={styles.columns}>
            {[...Array(dots).keys()].map((dot, dotIndex) => {
              return <View key={dotIndex} style={styles.dots} />;
            })}
          </View>
        );
      })}
    </View>
  );
}

export default Dots;
