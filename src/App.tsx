import Sidebar from "./components/Sidebar";
import React from 'react';
import styled from "styled-components";
import { CoursesStore } from "./store/CoursesStore";
import { RouterStore } from "./store/RouterStore";
import { observer } from "mobx-react-lite";
import Dashboard from "./pages/Dashboard";
import ShoppingList from "./pages/ShoppingList";
import Customer from "./pages/Customer";

const App: React.FC = observer(() => {
  return (
    <div className="App">
      <Container>
        <Sidebar/>
        {RouterStore.activeMenuLink === 'dashboard' && <Dashboard coursesStore={CoursesStore} />}
        {RouterStore.activeMenuLink === 'shopping' && <ShoppingList/>}
        {RouterStore.activeMenuLink === 'customer' && <Customer/>}
      </Container>
    </div>
  );
});

export default App;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 1920px;
  margin: 0 auto;
  overflow: hidden;
`;
