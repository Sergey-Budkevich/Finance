import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import AppHeader from '../components/AppHeader';
import SideBar from '../components/SideBar';

function MainLayout() {

    return (
        <Wrapper>
            <SideBar/>
            <Container>
                <AppHeader/>
                <Outlet/>
            </Container>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
`
const Container = styled.div`
    width: 83%;
    background: linear-gradient(258.66deg, #9754FF -4.76%, #87B9FA 119.06%);
    position: relative;
    overflow:auto
`

export default MainLayout;