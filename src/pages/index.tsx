import App from '@components/App/App'
import Skills from '@components/Skills/Skills'
import Career from '@components/Career/Career'
import Strategy from '@components/Strategy/Strategy'
import Portfolio from '@components/Portfolio/Portfolio'
import Favorite from '@components/Favorite/Favorite'

const Index = () => {
  return (
    <App>
      <Career />
      <Strategy />
      <Skills />
      <Portfolio />
      <Favorite />
    </App>
  )
}

export default Index
