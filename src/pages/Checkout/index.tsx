import {
  MapPinLine,
  Bank,
  Money,
  CreditCard,
  CurrencyDollar,
  WarningCircle,
} from 'phosphor-react'
import { useForm } from 'react-hook-form'
import {
  CoffeeContainer,
  Container,
  InputButtonContainer,
  InputContainer,
  InputRadio,
  MainContainer,
  StyledForm,
  Title,
  TitleSection,
} from './styles'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useCart } from '../../context/CartContext'
import { Coffee } from '../../components/CoffeeCard'

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

export interface CoffeeCardProps {
  coffee: Coffee
}

const Checkout = ({ coffee }: CoffeeCardProps) => {
  const { selectedCoffees } = useCart()

  console.log(selectedCoffees)

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

  const handleFormSubmit = (data: FormData) => {
    console.log(data)
  }

  const hasError = () => {
    return errors.cep || errors.rua || errors.bairro || errors.cidade
      ? 'flex'
      : 'grid'
  }

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
              {' '}
              <ul>
                {selectedCoffees.map((coffee, index) => (
                  <li key={index}>
                    <h3>{coffee.title}</h3>
                    <img src={coffee.image} alt="" />
                    <p>{coffee.description}</p>
                    <p>Preço: R$ {coffee.price.toFixed(2)}</p>
                  </li>
                ))}
              </ul>
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
          <button type="submit">Enviar</button>
        </Container>
      </StyledForm>
    </div>
  )
}

export default Checkout
