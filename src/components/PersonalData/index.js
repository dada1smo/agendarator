import { Image, StyleSheet, Text, View } from '@react-pdf/renderer';
import { colors } from '../../../styles/styles';
import Dots from '../Dots';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    flexWrap: 'nowrap',
  },
  heading: {
    fontFamily: 'Inter',
    fontSize: '20pt',
    lineHeight: 1.4,
    color: colors.black30,
    width: '77%',
    textTransform: 'lowercase',
  },
  image: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: '12mm',
    width: '24mm',
  },
  rows: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: '4mm',
  },
  fieldHeading: {
    width: '100%',
    fontWeight: 'bold',
  },
  field: {
    borderBottom: `1pt solid ${colors.black30}`,
    padding: '2mm 0 0.5mm 0',
  },
  label: {
    fontFamily: 'Inter',
    fontSize: '10pt',
    lineHeight: 1.1,
    color: colors.black60,
  },
  month: {
    fontFamily: 'Learning Curve',
    fontSize: '28pt',
    lineHeight: 1.1,
    color: colors.black60,
  },
  obs: {
    fontFamily: 'Learning Curve',
    fontSize: '28pt',
    lineHeight: 1.1,
    color: colors.black60,
    textTransform: 'lowercase',
  },
  line: {
    height: '1pt',
    width: '100%',
    backgroundColor: colors.black30,
    marginBottom: '6mm',
  },
});

const dataFields = [
  {
    fields: [
      {
        label: 'Nome',
        width: '100%',
      },
      {
        label: 'RG',
        width: '46%',
      },
      {
        label: 'CPF',
        width: '46%',
      },
      {
        label: 'Endereço',
        width: '100%',
      },
      {
        label: 'Cidade',
        width: '46%',
      },
      {
        label: 'Estado',
        width: '46%',
      },
      {
        label: 'CEP',
        width: '46%',
      },
      {
        label: 'País',
        width: '46%',
      },
      {
        label: 'Telefone',
        width: '46%',
      },
      {
        label: 'Celular',
        width: '46%',
      },
      {
        label: 'E-mail',
        width: '100%',
      },
      {
        label: 'Redes sociais',
        width: '100%',
      },
    ],
  },
  {
    fields: [
      {
        label: 'Trabalho/Empresa',
        width: '100%',
      },
      {
        label: 'Endereço',
        width: '100%',
      },
      {
        label: 'CNPJ/MEI',
        width: '46%',
      },
      {
        label: 'Telefone',
        width: '46%',
      },
      {
        label: 'E-mail',
        width: '100%',
      },
      {
        label: 'Site/Redes sociais',
        width: '100%',
      },
    ],
  },
  {
    fields: [
      {
        label: 'Alergias',
        width: '100%',
      },
      {
        label: 'Medicamentos',
        width: '100%',
      },
      {
        label: 'Tipo sanguíneo',
        width: '46%',
      },
      {
        label: 'Plano de Saúde',
        width: '46%',
      },
    ],
  },
  {
    heading: 'Contatos de emergência',
    fields: [
      {
        label: 'Nome',
        width: '46%',
      },
      {
        label: 'Telefone',
        width: '46%',
      },
      {
        label: 'Nome',
        width: '46%',
      },
      {
        label: 'Telefone',
        width: '46%',
      },
    ],
  },
];

const lines = [...Array(4).keys()];

const PersonalData = ({ format, theme }) => {
  return (
    <View style={{ position: 'relative', height: '100%' }}>
      <View style={styles.header}>
        <Text style={styles.heading}>Dados pessoais</Text>
        {theme !== 'neutral' && (
          <>
            <Dots columns={8} dots={1} padding="2mm 24mm 0 2mm" />
            <Image style={styles.image} src="/images/flower3.jpg" alt="" />
          </>
        )}
      </View>
      <View style={styles.rows}>
        {dataFields.map(({ fields, heading }, index) => {
          return (
            <View key={index} style={styles.row}>
              {heading && (
                <View style={styles.fieldHeading}>
                  <Text style={styles.label}>{heading}</Text>
                </View>
              )}
              {fields.map(({ label, width }, index) => {
                return (
                  <View key={index} style={{ ...styles.field, width: width }}>
                    <Text style={styles.label}>{label}</Text>
                  </View>
                );
              })}
            </View>
          );
        })}
        <View style={{ width: '100%' }}>
          <Text
            style={
              theme === 'neutral'
                ? { ...styles.label, fontWeight: 'bold', marginBottom: '4mm' }
                : styles.obs
            }
          >
            Observações
          </Text>
        </View>
        {lines.map((line, lineIndex) => {
          return (
            <View
              key={line}
              style={{
                ...styles.line,
                marginBottom: lineIndex === lines.length - 1 ? 0 : '6mm',
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default PersonalData;
