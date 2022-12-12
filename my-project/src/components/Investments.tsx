import Content from './Content';
import "../styles/Investments.css"
import TariffsCard from './TariffsCard';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';
import Button from './Button';
import styled from 'styled-components';
import { Title } from './styled-components/fonts';
import { Card, Container, Flex } from './styled-components/wrapper';
import moment from 'moment';

function Investments() {
    const {currentTariff, refLink, balance, dateConfirmTariff} = useAppSelector(state => state.userInfo)
    
    let closeDate = moment(dateConfirmTariff).add(2,'years').calendar();
    console.log(closeDate);
    
    return (
        <>
        <InvestmentWrapper>
            <Content>
                { currentTariff === null ? 
                    <Container>
                        <Content>
                            <Flex flexDirection='column' >
                                <Title color='var(--color-darkGray)' textAlign='start'>Инвестиционные продукты </Title>
                                <InvestmentsContainer>
                                    <TariffsCard title={"average"} percent={"0.25%"} color={"linear-gradient(258.01deg, #A76FFD 13.51%, #519CFD 119.02%)"} />
                                    <TariffsCard title={"elevated"} percent={"0.33%"} color={"linear-gradient(258.66deg, #9754FF -4.76%, #87B9FA 119.06%)"} />
                                    <TariffsCard title={"upper"} percent={"0.49%"} color={"linear-gradient(258.66deg, #9754FF -4.76%, #87B9FA 119.06%"} />
                                    <TariffsCard title={"supreme"} percent={"ИНДИВИДУАЛЬНЫЕ УСЛОВИЯ"} color={"linear-gradient(250.12deg, #B93CE8 -7.53%, #FF9AEA 82.03%)"} />
                                </InvestmentsContainer>
                            </Flex>
                        </Content>
                    </Container>  
                    :
                    <Container backgroundColor='var(--color-milk)'>
                        <Content>
                            <Title color='var(--color-darkGray)' textAlign='start'>Инвестиционная программа</Title>
                            <CardsWrapper>
                                <Flex alignItems='stretch' columnGap='20px' justifyContent='space-between'>
                                    <Card maxWidth='33%' width='100%'>
                                        <Flex flexDirection='column' >
                                            <CardHeader>
                                                <CardTitle>Ваши инвестиционные продукты: </CardTitle>
                                            </CardHeader>
                                            <CardBody>
                                                <CardBar>{currentTariff.toUpperCase()}</CardBar>
                                                <CardText>
                                                    <Flex flexDirection='column'  alignItems='center'>
                                                        <span>Дата открытия: {dateConfirmTariff}</span>
                                                        <span>Дата закрытия: {closeDate}</span>
                                                    </Flex>
                                                </CardText>
                                            </CardBody>
                                        </Flex>
                                    </Card>
                                    <Card maxWidth='33%' width='100%'>
                                        <CardHeader>
                                            <CardTitle>Приглашенно в инвест: </CardTitle>
                                        </CardHeader>
                                        <SecondCardBody>
                                            <CardText >Пользователи 1 уровня - <span>5 человек</span></CardText>
                                            <CardText >Пользователи 2 уровня - <span>1 человек</span></CardText>
                                        </SecondCardBody>
                                    </Card>
                                    <Card maxWidth='33%' width='100%'>
                                        <CardHeader backgroundColor='var(--color-violet)'>
                                            <Flex columnGap='15px' alignItems='center'>
                                                <CardTitle color='var(--color-white)'>Баланс инвестиционного кошелька </CardTitle>
                                                <CardBar>{balance} UBR</CardBar>
                                            </Flex>
                                        </CardHeader>
                                        <CardBody>
                                            <CardText>В ожидании</CardText>
                                            <CardText>5 UBR</CardText>
                                        </CardBody>
                                    </Card>
                                </Flex>
                            </CardsWrapper>
                            <div className='programm_referal-link'>
                                <div className='programm_referal-info'>
                                    <h4 className='programm_referal-title'>Ваша реферальная ссылка:</h4>
                                    <div className="programm-referal-info_items">
                                        <p className='programm-referal-info_link'>{refLink}</p>
                                        <Button className={'purple'} type={'button'} onClick={() => navigator.clipboard.writeText(`${refLink}`)}>Скопировать</Button>
                                    </div>
                                </div>
                                <div className='programm-referal-info_image'>
                                    <img src="../images/investment-programm.png" alt="investments" />
                                </div>
                            </div>
                        </Content>
                    </Container>
                }
            </Content>   
            <Outlet/>
        </InvestmentWrapper>
        </>
    );
}


const InvestmentsContainer = styled(Flex)`
    column-gap: 20px;
    margin-top: 30px;
`

const InvestmentWrapper = styled.section`
    padding: var(--app-section-padding) 0;
    position: relative;
    overflow: auto;
`
const CardsWrapper = styled.div`
    margin-top: 55px;
`

type CardHeaderProps = {
    backgroundColor?: string,
}
const CardHeader = styled.div<CardHeaderProps>`
    padding: 10px 15px;
    border-bottom: 2px solid var(--color-milk);
    ${props => props.backgroundColor && `background-color: ${props.backgroundColor};` }
`
type CardTitleProps = {
    color?:string,
}
const CardTitle = styled.h4<CardTitleProps>`
    font-family: var(--second-font);
    font-weight: var(--font-weight-regular);
    font-size: var(--text-small-size);
    line-height: 20px;
    color: var(--color-darkGray);
    ${props => props.color && `color: ${props.color};` }

`
const CardBody = styled(Flex)`
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    column-gap: 15px;
`
const CardBar = styled.p`
    padding: 5px 10px;
    background: linear-gradient(250.12deg, #B93CE8 -7.53%, #FF9AEA 82.03%);
    border-radius: 5px;
    font-family: var(--second-font);
    font-weight: var(--font-weight-regular);
    font-size: var(--text-small-size);
    line-height: 20px;
    color: var(--color-white);
    text-align: center;
    max-width: 90px;
    width: 100%;
`
const CardText = styled.p`
    font-family: var(--second-font);
    font-weight: var(--font-weight-regular);
    line-height: 18px;
    text-align: center;
    color: var(--color-lightGray);
    span{
        font-size: 12px;
    }
`

const SecondCardBody = styled(Flex)`
    flex-direction: column;
    row-gap: 15px;
    justify-content: space-between;
    padding: 15px;
    p,span{
        font-family: var(--second-font);
        font-weight: var(--font-weight-regular);
        font-size: 12px;
        line-height: 18px;
        color: var(--color-lightGray);
        span {
            color: var(--color-blue);
        }
    }
`

export default Investments;