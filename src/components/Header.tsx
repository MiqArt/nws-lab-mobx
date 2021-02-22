import { observer } from 'mobx-react-lite';
import React, { useCallback } from 'react'
import styled from 'styled-components';
import { CoursesStore } from '../store/CoursesStore';
import { RouterStore } from '../store/RouterStore';

interface IProps {
  title: string;
}

const Header: React.FC<IProps> = observer(({ title }) => {

  const getClassName = useCallback((filterName: string) => {
    return CoursesStore.isFilteredBy === filterName ? 'active' : '';
  }, [CoursesStore.isFilteredBy]);

  return (
    <HeaderWrapper>
      <Title>{title}</Title>
      {
        RouterStore.activeMenuLink === 'dashboard' && (
          <FiltersWrapper>
            <FiltersBtn className={getClassName('popular')} onClick={() => getClassName('popular') ? CoursesStore.reset() : CoursesStore.filterByPopular()}>
              Popular
            </FiltersBtn>
            <FiltersBtn className={getClassName('favorite')} onClick={() => getClassName('favorite') ? CoursesStore.reset() : CoursesStore.filterByFavorite()}>
              Favorite
            </FiltersBtn>
            <FiltersBtn className={getClassName('new')} onClick={() => getClassName('new') ? CoursesStore.reset() : CoursesStore.filterByNew()}>
              New
            </FiltersBtn>
          </FiltersWrapper>
        )
      }
    </HeaderWrapper>
  );
});

export default Header;

// Styles |
//        v

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  height: 14%;
  padding: 64px 4% 0 4%;
  background-color: #FFF8F5;
  @media (max-width: 768px) {
    height: 18%;
  }
  @media (max-width: 420px) {
    padding-left: 6%;
  }
`;

const Title = styled.span`
  font-size: 48px;
  font-weight: 400;
  margin-right: 28px;
  margin-bottom: 10px;
  @media (max-width: 420px) {
    font-size: 36px;
  }
`;

const FiltersWrapper = styled.div`
  display: flex;
  margin-right: 9%;
`;

const FiltersBtn = styled.button`
  position: relative;
  user-select: none;
  border: none;
  font-size: 24px;
  line-height: 29px;
  font-weight: bold;
  color: #CBB1A2;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  &.active {
    color: #6749A5;
    &::before {
      content: "";
      position: absolute;
      width: 24px;
      height: 4px;
      bottom: -13px;
      left: 0;
      right: 0;
      margin: 0 auto;
      background-color: #6749A5;
      @media (max-width: 420px) {
        bottom: -8px;
      };
    };
  };
  &:not(:first-child) {
    margin-left: 30px;
  };
  @media (max-width: 420px) {
    font-size: 18px;
    &:not(:first-child) {
      margin-left: 14px;
    };
  };
`;
