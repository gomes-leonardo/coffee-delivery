import {
  ButtonConfirm,
  ButtonContainer,
  BuyContainer,
  Container,
  ContainerForm,
  Footer,
  Title,
} from './styles'
import {
  MapPinLine,
  CurrencyCircleDollar,
  Bank,
  Money,
  CreditCard,
} from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

const Checkout = () => {
  // const { register } = useFormContext()
  return (
    <div>
      <Title>Complete seu pedido</Title>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '1.2rem',
        }}
      >
        <Container>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <MapPinLine
              style={{ marginRight: '10px', marginBottom: '24px' }}
              size={24}
              color="#DBAC2C"
            />
            <div>
              <h3 style={{ margin: '0' }}>Endereço de Entrega</h3>
              <p style={{ marginTop: '3px' }}>
                Informe o endereço onde deseja receber o pedido
              </p>
            </div>
          </div>
          <form>
            <ContainerForm>
              <input type="text" placeholder="CEP" />
              <input type="text" placeholder="Rua" />
              <input type="text" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </ContainerForm>
          </form>
        </Container>
        {/* <Title>Complete seu pedido</Title> */}
        <BuyContainer>
          Imagem
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              flexDirection: 'column',
            }}
          >
            Nome do café: R$ 9,90
            <div> contador: remover</div>
          </div>
          <div>
            <p>Total de Itens: R$ 29,70</p>
            <p>Entrega: R$ 3,50</p>
            <p>Total: R$ 33,20</p>
            <NavLink to="/success">
              <ButtonConfirm>CONFIRMAR PEDIDO</ButtonConfirm>
            </NavLink>
          </div>
        </BuyContainer>
      </div>
      <Footer>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <CurrencyCircleDollar
            style={{ marginBottom: '24px', marginRight: '10px' }}
            size={24}
            color="#8047F8"
          />
          <div>
            <h3 style={{ margin: '0' }}>Pagamento</h3>
            <p style={{ marginTop: '3px' }}>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </div>
        <ButtonContainer>
          <button>
            <CreditCard size={20} color="#8047F8" /> CARTÃO DE CRÉDITO
          </button>
          <button>
            <Bank size={20} color="#8047F8" />
            CARTÃO DE DÉBITO
          </button>
          <button>
            <Money size={20} color="#8047F8" />
            DINHEIRO
          </button>
        </ButtonContainer>
      </Footer>
    </div>
  )
}

export default Checkout
