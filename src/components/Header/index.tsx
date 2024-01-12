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
const Header = () => {
  const itemCount = 5
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
            {itemCount > 0 && <CartItemCount>{itemCount}</CartItemCount>}
            <ShoppingCart size={24} weight="fill" />
          </Cart>
        </NavLink>
      </IconContainer>
    </HeaderContainer>
  )
}

export default Header
