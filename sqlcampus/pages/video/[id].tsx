import Layout from '../../components/layout/Layout'
import { useTranslation } from 'next-i18next';

const WithStaticProps = (props: any) => {

    const {t} = useTranslation();

    props;
    return (
        <Layout title={"SQL-Campus | "+t("title_video")}>
      
        </Layout>
    )
}

export default WithStaticProps
