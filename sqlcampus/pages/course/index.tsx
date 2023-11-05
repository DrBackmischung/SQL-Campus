import Layout from '../../components/layout/Layout'
import { useTranslation } from 'react-i18next';

const WithStaticProps = (props: any) => {

    const {t} = useTranslation();

    props;
    return (
        <Layout title={"SQL-Campus | "+t("title_courses")}>
      
        </Layout>
    )
}

export default WithStaticProps