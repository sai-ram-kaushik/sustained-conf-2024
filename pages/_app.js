import Layout from '../components/Layout'
import '../styles/globals.css'
import TransitionEffect from '../components/TransitionEffect'
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
