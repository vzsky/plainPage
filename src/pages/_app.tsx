import { AppProps } from 'next/app'
import Head from 'next/head'
import { Grommet } from 'grommet';

const theme = {
    name: "my99n",
    defaultMode: "light",
    global: {
        colors: {
            brand: "#FA198B",
            background : "#5BC0BE",
            'accent-1' : "#F22B29",
            "light-1" : "#FFC15E",
            "dark-1" : "#262F30",
        },
        font: {
            family: 'Roboto',
            size: '20px',
            height: '20px',
        },
    },
};

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Grommet full theme={theme}>
            <Component {...pageProps} />
            <Head>
                <title> my99n </title>
            </Head>
        </Grommet>
    )
}

export default MyApp