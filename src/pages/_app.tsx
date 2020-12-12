import { AppProps } from 'next/app'

import '@assets/css/tailwind.css'

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default App
