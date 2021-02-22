import React from 'react';
import styled from 'styled-components';
import { ReactComponent as DashboardIcon } from '../assets/sidebar-icons/dashboard.svg';
import { ReactComponent as ShoppingListIcon } from '../assets/sidebar-icons/shopping-list.svg';
import { ReactComponent as CustomerIcon } from '../assets/sidebar-icons/customer.svg';
import { observer } from 'mobx-react-lite';
import { RouterStore, TLink } from '../store/RouterStore';

const Sidebar: React.FC = observer(() => {

  const onHandleNavigate = (link: TLink) => {
    RouterStore.navigateTo(link);
  }

  return (
    <SidebarContainer>
      <SidebarLink className={RouterStore.activeMenuLink === 'dashboard' ? 'active' : ''} onClick={(e) => onHandleNavigate('dashboard')} href={'#dashboard'}>
        <DashboardIcon/>
      </SidebarLink>
      <SidebarLink className={RouterStore.activeMenuLink === 'shopping' ? 'active' : ''} onClick={(e) => onHandleNavigate('shopping')}href={'#shopping'}>
        <ShoppingListIcon/>
      </SidebarLink>
      <SidebarLink className={RouterStore.activeMenuLink === 'customer' ? 'active' : ''} onClick={(e) => onHandleNavigate('customer')} href={'#customer'}>
        <CustomerIcon/>
      </SidebarLink>
    </SidebarContainer>
  )
});

export default Sidebar;

// Styles |
//        v

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  max-width: 160px;
  min-width: 53px;
  height: 100%;
  padding-top: 92px;
  background-color: #FFE4D6;
  @media only screen and (min-device-width: 480px) 
  and (max-device-width: 568px) 
  and (orientation: landscape) {
    padding-top: 35px;
    & a {
      margin: 20px 0;
    };
  }
  @media only screen and (min-device-width: 569px) 
  and (max-device-width: 667px) 
  and (orientation: landscape) {
    padding-top: 50px;
    & a {
      margin: 25px 0;
    };
  }
  @media only screen and (min-device-width: 668px) 
  and (max-device-width: 736px) 
  and (orientation: landscape) {
    padding-top: 55px;
    & a {
      margin: 30px 0;
    };
  }
  @media only screen and (min-device-width: 737px) 
  and (max-device-width: 812px) 
  and (orientation: landscape) {
    padding-top: 34px;
    & a {
      margin: 30px 0;
    };
  }
  @media only screen and (min-device-width: 813px) 
  and (max-device-width: 926px) 
  and (orientation: landscape) {
    padding-top: 32px;
    & a {
      margin: 30px 0;
    };
  }
`
const SidebarLink = styled.a`
  position: relative;
  width: 100%;
  height: 48px;
  text-align: center;
  margin: 35px 0;
  & svg {
    width: 48px;
    height: 48px;
    fill: #E1AA98;
    @media (max-width: 420px) {
      width: 36px;
      height: 36px;
    };
  };
  &.active {
    & svg {
      fill: #8964D7;
    };
    &::before {
      content: "";
      position: absolute;
      height: 100%;
      background-color:#8964D7;
      width: 3px;
      left: 0;
      @media (max-width: 420px) {
        display: none;
      };
    }
  };
  @media (max-width: 420px) {
    height: 36px;
  };
`
