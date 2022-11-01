import { FunctionComponent } from 'react';
import { Page as PdfPage, StyleSheet, Text, Font } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: '15mm 15mm 18mm',
    position: 'relative',
  },
  text: {
    fontFamily: 'Learning Curve',
  },
});

const A5Page = ({ children }) => {
  return (
    <PdfPage size="A5" style={styles.page}>
      {children}
    </PdfPage>
  );
};

export default A5Page;
