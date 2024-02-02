import {
  CardInfo,
  Hero,
  MainContainer,
  OrderInformation,
  RoundedIcon,
  SubTitle,
  Title,
} from './styles'
import ilustration from '../../assets/Illustration.png'
import { CurrencyCircleDollar, Square, Timer } from 'phosphor-react'
import { useFormContext } from '../../context/FormContext'
const Success = () => {
  const { formData } = useFormContext()
  return (
    <MainContainer>
      <Title>Uhu! Pedido confirmado</Title>
      <SubTitle>Agora é so aguardar que logo o café chegará até você</SubTitle>
      <Hero>
        <OrderInformation>
          <CardInfo>
            <RoundedIcon statuscolor="purple-normal">
              <Square size={32} color="white" weight="fill" />
            </RoundedIcon>
            <div>
              <p style={{ marginBottom: '0.2rem' }}>
                Entrega em{' '}
                <span style={{ fontWeight: 'bold' }}>
                  {formData && <p>{formData.rua}</p>}
                </span>
              </p>{' '}
              {formData && <p>{formData.cep}</p>}
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
              <p style={{ fontWeight: 'bold' }}>
                {formData && <p>{formData.paymentMethod}</p>}
              </p>{' '}
            </div>
          </CardInfo>
        </OrderInformation>
        <div>
          <img src={ilustration} alt="Ilustração" />
        </div>
      </Hero>
    </MainContainer>
  )
}

export default Success
