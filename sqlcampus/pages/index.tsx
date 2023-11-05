import Layout from '../components/layout/Layout'
import '../i18n.js'
import { useTranslation } from 'react-i18next';

const IndexPage = () => {

  const {t} = useTranslation();

  return (
    <Layout title={"SQL-Campus | "+t("title_home")}>
      <h1>{t("temporary_title")}</h1>
      <br></br>
      <br></br>
      <p>{t("temporary_home")}</p>
      <p>{t("temporary_mail")}</p>
    </Layout>
  );
}

export default IndexPage
