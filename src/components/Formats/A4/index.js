import { Page as PdfPage, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: '31mm 31mm 45mm',
    position: 'relative',
  },
  text: {
    fontFamily: 'Learning Curve',
  },
});

const A4Page = ({ children }) => {
  return (
    <PdfPage size="A4" style={styles.page}>
      {children}
    </PdfPage>
  );
};

export default A4Page;
