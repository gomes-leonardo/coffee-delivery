import { NavLink } from 'react-router-dom'
import {
  Cart,
  CartItemCount,
  HeaderContainer,
  IconContainer,
  Localization,
} from './styles'
import logo from '../../assets/Logo.png'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { useCart } from '../../context/CartContext'
const Header = () => {
  const { selectedCoffees } = useCart()

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logo} alt="Logo" style={{ width: '100%' }} />
      </NavLink>
      <IconContainer>
        <Localization>
          <MapPin size={24} weight="fill" />
          <p>São Paulo, SP</p>
        </Localization>
        <NavLink
          style={{ textDecoration: 'none', position: 'relative' }}
          to="/checkout"
          title="Carrinho"
        >
          <Cart>
            {selectedCoffees.length > 0 && (
              <CartItemCount>{selectedCoffees.length}</CartItemCount>
            )}
            <ShoppingCart size={24} weight="fill" />
          </Cart>
        </NavLink>
      </IconContainer>
    </HeaderContainer>
  )
}

export default Header
