import React from 'react'
import Head from 'next/head'
import { useTranslation } from "react-i18next";

type Props = {
  title?: string
}

const Header = ({ title }: Props) => {

    const { i18n } = useTranslation();

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <header>
                <a onClick={() => {i18n.changeLanguage("de")}}>DE</a> | <a onClick={() => {i18n.changeLanguage("en")}}>EN</a>
            </header>
        </>
    )
};

export default Header;
