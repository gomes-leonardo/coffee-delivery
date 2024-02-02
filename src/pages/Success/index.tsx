import {
  CardInfo,
  MainContainer,
  OrderInformation,
  RoundedIcon,
  Title,
} from './styles'
import ilustration from '../../assets/Illustration.png'
import { CurrencyCircleDollar, Square, Timer } from 'phosphor-react'
const Success = () => {
  return (
    <MainContainer>
      <Title>Uhu! Pedido confirmado</Title>
      <p>Agora é so aguardar que logo o café chegará até você</p>
      <div
        style={{
          display: 'flex',
          gap: '5.5rem',
          alignItems: 'center',
        }}
      >
        <OrderInformation>
          <CardInfo>
            <RoundedIcon statuscolor="purple-normal">
              <Square size={32} color="white" weight="fill" />
            </RoundedIcon>
            <div>
              <p style={{ marginBottom: '0.2rem' }}>
                Entrega em{' '}
                <span style={{ fontWeight: 'bold' }}>
                  Rua João Daniel Martinelli, 102
                </span>
              </p>{' '}
              <p>São Paulo</p>{' '}
            </div>
          </CardInfo>
          <CardInfo>
            <RoundedIcon statuscolor="yellow-normal">
              <Timer size={32} color="white" weight="fill" />
            </RoundedIcon>
            <div>
              <p style={{ marginBottom: '0.2rem' }}>Previsão de entrega</p>{' '}
              <p style={{ fontWeight: 'bold' }}>20 min - 30 min</p>{' '}
            </div>
          </CardInfo>
          <CardInfo>
            <RoundedIcon statuscolor="yellow-dark">
              <CurrencyCircleDollar size={32} color="white" weight="fill" />
            </RoundedIcon>
            <div>
              <p style={{ marginBottom: '0.2rem' }}>Forma de pagamento</p>{' '}
              <p style={{ fontWeight: 'bold' }}>Cartão de Crédito</p>{' '}
            </div>
          </CardInfo>
        </OrderInformation>
        <div>
          <img src={ilustration} alt="Ilustração" />
        </div>
      </div>
    </MainContainer>
  )
}

export default Success
