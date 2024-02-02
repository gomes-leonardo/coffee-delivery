import {
  MapPinLine,
  Bank,
  Money,
  CreditCard,
  CurrencyDollar,
  WarningCircle,
  ShoppingCart,
} from 'phosphor-react'
import { useForm } from 'react-hook-form'
import {
  CoffeeContainer,
  CoffeeListContainer,
  Container,
  Divider,
  InputButtonContainer,
  InputContainer,
  InputRadio,
  MainContainer,
  StyledForm,
  Title,
  TitleSection,
  TotalContainer,
} from './styles'

import { useNavigate } from 'react-router-dom'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useCart } from '../../context/CartContext'
import Counter from '../../components/Counter'
import { Coffee } from '../../components/CoffeeCard'
import { useFormContext } from '../../context/FormContext'

export enum PaymentMethod {
  CREDIT_CARD = 'Cartão de Crédito',
  DEBIT_CARD = 'Cartão de Debito',
  MONEY = 'Dinheiro',
}
export interface FormData {
  cep: string
  rua: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
  paymentMethod: PaymentMethod
}

const Checkout = () => {
  const { selectedCoffees, addToCart, removeFromCart, removeAllCoffees } =
    useCart()

  const { setFormData } = useFormContext()

  const schema = z.object({
    cep: z
      .string()
      .min(5, { message: 'CEP inválido' })
      .max(10, { message: 'CEP inválido' }),
    rua: z
      .string()
      .min(1, { message: 'Rua obrigatório' })
      .max(70, { message: 'Máximo permitido 70 caracteres' }),
    numero: z
      .string()
      .min(1, { message: 'Número obrigatório' })
      .max(50, { message: 'Máximo permitido 50 caracteres' }),
    complemento: z
      .string()
      .max(50, { message: 'Máximo permitido 50 caracteres' }),
    bairro: z
      .string()
      .min(1, { message: ' Bairro obrigatório' })
      .max(50, { message: 'Máximo permitido 50 caracteres' }),
    cidade: z
      .string()
      .min(5, { message: 'Cidade obrigatória' })
      .max(50, { message: 'Máximo permitido 50 caracteres' }),
    uf: z
      .string()
      .min(1, { message: 'UF obrigatório' })
      .max(2, { message: 'UF inválido' }),
    paymentMethod: z
      .enum([
        PaymentMethod.CREDIT_CARD,
        PaymentMethod.DEBIT_CARD,
        PaymentMethod.MONEY,
      ])
      .refine((value) => !!value, {
        message: 'Selecione uma forma de pagamento',
        path: ['paymentMethod'],
      }),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const navigate = useNavigate()

  const handleFormSubmit = (data: FormData) => {
    setFormData(data)
    navigate('/success')
  }

  const hasError = () => {
    return errors.cep || errors.rua || errors.bairro || errors.cidade
      ? 'flex'
      : 'grid'
  }

  const handleIncrement = (coffee: Coffee) => {
    addToCart(coffee)
  }

  const handleDecrement = (coffee: Coffee) => {
    removeFromCart(coffee)
  }

  const handleRemoveAll = (coffee: Coffee) => {
    removeAllCoffees(coffee)
  }

  const delivery = 3.5
  const deliveryFormatted = `R$ ${delivery.toFixed(2)}`

  const itemsPrice = selectedCoffees.reduce((all, curr) => {
    return all + curr.price
  }, 0)
  const itemsPriceFormatted = `R$ ${itemsPrice.toFixed(2)}`

  const total = delivery + itemsPrice
  const totalFormatted = `R$ ${total.toFixed(2)}`

  return (
    <div>
      <StyledForm onSubmit={handleSubmit(handleFormSubmit)}>
        <MainContainer>
          <div>
            <Title>Complete seu pedido</Title>
            <Container>
              <TitleSection>
                <MapPinLine size={22} color="#DBAC2C" />
                <div>
                  <h3>Endereço de Entrega</h3>
                  <h3>Informe o endereço onde deseja receber seu pedido</h3>
                </div>
              </TitleSection>
              <InputContainer
                style={{ display: hasError(), flexDirection: 'column' }}
              >
                <input
                  style={{ border: errors.cep?.message && '2px solid #FF0000' }}
                  {...register('cep')}
                  type="text"
                  placeholder="CEP"
                  id="cep"
                />
                {errors.cep?.message && (
                  <p style={{ color: '#FF0000', fontSize: '14px' }}>
                    {errors.cep?.message}
                  </p>
                )}

                <input
                  style={{ border: errors.rua?.message && '1px solid #FF0000' }}
                  {...register('rua')}
                  type="text"
                  placeholder="Rua"
                  id="rua"
                />

                {errors.rua?.message && (
                  <p
                    style={{
                      color: '#FF0000',
                      fontSize: '14px',
                    }}
                  >
                    {errors.rua?.message}
                  </p>
                )}
                <input
                  {...register('numero')}
                  type="text"
                  placeholder="Número"
                  id="numero"
                />
                {errors.numero?.message && (
                  <p
                    style={{
                      color: '#FF0000',
                      fontSize: '14px',
                    }}
                  >
                    {errors.numero?.message}
                  </p>
                )}
                <input
                  type="text"
                  id="complemento"
                  {...register('complemento')}
                  placeholder="Complemento"
                />
                <input
                  {...register('bairro')}
                  type="text"
                  placeholder="Bairro"
                  id="bairro"
                />
                {errors.bairro?.message && (
                  <p
                    style={{
                      color: '#FF0000',
                      fontSize: '14px',
                    }}
                  >
                    {errors.bairro?.message}
                  </p>
                )}
                <input
                  {...register('cidade')}
                  type="text"
                  placeholder="Cidade"
                  id="cidade"
                />
                {errors.cidade?.message && (
                  <p
                    style={{
                      color: '#FF0000',
                      fontSize: '14px',
                    }}
                  >
                    {errors.cidade?.message}
                  </p>
                )}
                <input
                  {...register('uf')}
                  type="text"
                  placeholder="UF"
                  id="uf"
                />
                {errors.uf?.message && (
                  <p
                    style={{
                      color: '#FF0000',
                      fontSize: '14px',
                    }}
                  >
                    {errors.uf?.message}
                  </p>
                )}
              </InputContainer>
            </Container>
          </div>
          <div>
            <Title>Cafés selecionados</Title>
            <CoffeeContainer>
              {selectedCoffees.length === 0 ? (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '10px',
                  }}
                >
                  <h3>Adicione nossos produtos no carrinho</h3>
                  <ShoppingCart size={154} color="#D7D5D5" />
                </div>
              ) : (
                <div>
                  {selectedCoffees
                    .filter(
                      (coffee, index, array) =>
                        array.findIndex((item) => item.id === coffee.id) ===
                        index,
                    )
                    .map((coffee, index) => {
                      const occurrences = selectedCoffees.filter(
                        (item) => item.id === coffee.id,
                      ).length

                      return (
                        <div key={index}>
                          <CoffeeListContainer>
                            <img
                              width={70}
                              src={coffee.image}
                              alt="Coffee Illustrator"
                            />
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'start',
                                gap: '0.5rem',
                                justifyContent: 'center',
                              }}
                            >
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                  gap: '6.5rem',
                                  alignItems: 'center',
                                }}
                              >
                                <h3>{coffee.title}</h3>
                                <p>
                                  R$ {(occurrences * coffee.price).toFixed(2)}
                                </p>
                              </div>

                              <Counter
                                count={
                                  selectedCoffees.filter(
                                    (c) => c.id === coffee.id,
                                  ).length
                                }
                                onDecrement={() => handleDecrement(coffee)}
                                onIncrement={() => handleIncrement(coffee)}
                                showRemoveButton={true}
                                onRemoveAllCoffees={() =>
                                  handleRemoveAll(coffee)
                                }
                              />
                            </div>
                          </CoffeeListContainer>
                          <Divider />
                        </div>
                      )
                    })}
                </div>
              )}
              {selectedCoffees.length > 0 && (
                <TotalContainer>
                  <div>
                    <h3>Total de itens</h3>
                    <h3>{itemsPriceFormatted}</h3>
                  </div>
                  <div>
                    <h3>Entrega</h3>
                    <h3>{deliveryFormatted}</h3>
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 'bold', fontSize: '22px' }}>
                      Total
                    </h3>
                    <h3 style={{ fontWeight: 'bold', fontSize: '22px' }}>
                      {totalFormatted}
                    </h3>
                  </div>
                  <button type="submit">Confirmar Pedido</button>
                </TotalContainer>
              )}
            </CoffeeContainer>
          </div>
        </MainContainer>

        <Container>
          <TitleSection>
            <CurrencyDollar size={22} color="#8047F8" />
            <div>
              <h3>Pagamento</h3>
              <h3>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </h3>
            </div>
          </TitleSection>
          <InputButtonContainer>
            <InputRadio>
              <input
                type="radio"
                id="cartao-credito"
                value={PaymentMethod.CREDIT_CARD}
                {...register('paymentMethod')}
                name="paymentMethod"
              />
              <label htmlFor="cartao-credito">
                <CreditCard size={16} color="#8047F8" />
                Cartão de Crédito
              </label>
            </InputRadio>

            <InputRadio>
              <input
                type="radio"
                id="cartao-debito"
                value={PaymentMethod.DEBIT_CARD}
                {...register('paymentMethod')}
                name="paymentMethod"
              />
              <label htmlFor="cartao-debito">
                <Bank size={16} color="#8047F8" /> Cartão de Débito
              </label>
            </InputRadio>

            <InputRadio>
              <input
                type="radio"
                id="dinheiro"
                value={PaymentMethod.MONEY}
                {...register('paymentMethod')}
                name="paymentMethod"
              />
              <label htmlFor="dinheiro">
                <Money size={16} color="#8047F8" /> Dinheiro
              </label>
            </InputRadio>
          </InputButtonContainer>
          {errors.paymentMethod && (
            <p
              style={{
                color: '#FF0000',
                fontSize: '14px',
                margin: '10px auto',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                Selecione uma forma de pagamento
                <WarningCircle size={20} />
              </div>
            </p>
          )}
        </Container>
      </StyledForm>
    </div>
  )
}

export default Checkout
