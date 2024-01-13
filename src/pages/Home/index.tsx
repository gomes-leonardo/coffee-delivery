import { Benefits, HomeContainer, RoundedIcon, Title } from './styles'
import HomeImage from '../../assets/Imagem.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
const Home = () => {
  return (
    <div>
      <HomeContainer>
        <div>
          <Title>Encontre o cafe perfeito para qualquer hora do dia</Title>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>

        <img src={HomeImage} alt="Coffee image" />
      </HomeContainer>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '7rem',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <RoundedIcon statuscolor="yellow-dark">
              {' '}
              <ShoppingCart size={24} weight="fill" color="white" />
            </RoundedIcon>
            <Benefits>Compra simples e segura</Benefits>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <RoundedIcon statuscolor="yellow-normal">
              {' '}
              <Timer size={24} weight="fill" color="white" />
            </RoundedIcon>
            <Benefits>Entrega rápida e rastreada</Benefits>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <RoundedIcon statuscolor="base-text">
              {' '}
              <Package size={24} weight="fill" color="white" />
            </RoundedIcon>
            <Benefits>Compra simples e segura</Benefits>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <RoundedIcon statuscolor="purple-normal">
              {' '}
              <Coffee size={24} weight="fill" color="white" />
            </RoundedIcon>
            <Benefits>Entrega rápida e rastreada</Benefits>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
