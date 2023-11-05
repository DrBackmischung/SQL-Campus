import React from 'react'
import Head from 'next/head'
import { useTranslation } from 'react-i18next';
import AppBar from '@mui/material/AppBar';
import { Box, Button, ButtonGroup, Container, Link, Toolbar } from '@mui/material';

type Props = {
  title?: string
}

const Header = ({ title }: Props) => {

    const { t, i18n } = useTranslation();

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <AppBar
                style={{ backgroundColor: "rgba(255, 255, 255,255)", opacity: 1 }}
                position="static"
                >
                <Container>
                    <Toolbar>
                    <Box 
                        sx={{
                            justifyContent: "space-evenly",
                            flexGrow: 1,
                            display: { xs: "flex" },
                            margin: "5px"
                        }}
                    >
                    <ButtonGroup>
                        <Button
                            className='button'
                            style={{ backgroundColor: "rgba(200, 255, 200, 0.3)", opacity: 0.95, color: "black", marginLeft: "10px", marginRight: "10px" }}
                            key="home"
                            sx={{ my: 2, color: "black", display: "block" }}
                            variant="contained"
                            component={Link}
                            href="/"
                        >
                            {t("menu_home")}
                        </Button>
                        <Button
                            className='button'
                            style={{ backgroundColor: "rgba(200, 255, 200, 0.3)", opacity: 0.95, color: "black", marginLeft: "10px", marginRight: "10px" }}
                            key="rent"
                            sx={{ my: 2, color: "black", display: "block" }}
                            variant="contained"
                            component={Link}
                            href="/course"
                        >
                            {t("menu_course")}
                        </Button>
                        <Button
                            className='button'
                            style={{ backgroundColor: "rgba(200, 255, 200, 0.3)", opacity: 0.95, color: "black", marginLeft: "10px", marginRight: "10px" }}
                            key="service"
                            sx={{ my: 2, color: "black", display: "block" }}
                            variant="contained"
                            component={Link}
                            href="/profile"
                        >
                            {t("menu_profile")}
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button
                            className='button'
                            style={{ backgroundColor: "rgba(255, 255, 255, 0.3)", opacity: 0.95, color: "white" }}
                            key="service"
                            sx={{ my: 2, color: "black", display: "block" }}
                            variant="text"
                            component={Link}
                            onClick={() => {
                                i18n.changeLanguage("en");
                            }}
                        >
                            <img src="https://flagicons.lipis.dev/flags/4x3/us.svg" width={20}></img>
                        </Button>
                        <Button
                            className='button'
                            style={{ backgroundColor: "rgba(255, 255, 255, 0.3)", opacity: 0.95, color: "white" }}
                            key="service"
                            sx={{ my: 2, color: "black", display: "block" }}
                            variant="text"
                            component={Link}
                            onClick={() => {
                                i18n.changeLanguage("de");
                            }}
                        >
                            <img src="https://flagicons.lipis.dev/flags/4x3/de.svg" width={20}></img>
                        </Button>
                    </ButtonGroup>
                    </Box>
                    </Toolbar>
                </Container>
            </AppBar>

        </>
    )
};

export default Header;
