import { Container, Grid } from '@mui/material';
import Layout from '../components/layout/Layout'
import '../i18n.js'
import { useTranslation } from 'react-i18next';

const IndexPage = () => {

  const {t} = useTranslation();

  return (
    <Layout title={"SQL-Campus | "+t("title_home")}>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <Container style={{backgroundColor: "rgba(200, 200, 255,255)", height: "200px"}}><p>1</p></Container>
        </Grid>
        <Grid item xs={12}>
          <Container style={{backgroundColor: "rgba(255, 200, 200,255)", height: "200px"}}><p>2</p></Container>
        </Grid>
        <Grid item xs={12}>
          <Container style={{backgroundColor: "rgba(200, 255, 200,255)", height: "200px"}}><p>3</p></Container>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default IndexPage
