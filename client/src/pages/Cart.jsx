import React from 'react'
import styled from "styled-components";
import TextInput from "../components/TextInput";

const Container = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 768px) {
    padding: 20px 12px;
  }
  background: ${({ theme }) => theme.bg};
`;

const Section = styled.div`
  max-width: 1400px;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  display: flex;
  justify-content: ${({ center }) => (center ? "center" : "space-between")};
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;
  padding: 12px;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 750px) {
    flex: 1.2;
  }
`;

const Table = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 30px;
  ${({ head }) => head && `margin-bottom: 22px`}
`;

const TableItem = styled.div`
  ${({ flex }) => flex && `flex: 1; `}
  ${({ bold }) =>
    bold &&
    `font-weight: 600; 
  font-size: 18px;`}
`;

const Counter = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.text_secondary + 40};
  border-radius: 8px;
  padding: 4px 12px;
`;

const Product = styled.div`
  display: flex;
  gap: 16px;
`;

const Img = styled.img`
  height: 80px;
`;

const Details = styled.div``;
const Protitle = styled.div`
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  font-weight: 500;
`;

const ProDesc = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ProSize = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 750px) {
    flex: 0.8;
  }
`;

const Subtotal = styled.div`
  font-size: 22px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
`;

const Delivery = styled.div`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  gap: 6px;
  flex-direction: column;
`;

function Cart() {
  return (
    <Container>
        <Section>
          <Title>Your Shopping Cart</Title>
            <Wrapper>
              <Left>
                <Table>
                  <TableItem bold="true" flex="true">
                      Product
                  </TableItem>
                  <TableItem bold="true">
                      Price
                  </TableItem>
                  <TableItem bold="true">
                      Quantity
                  </TableItem>
                  <TableItem bold="true">
                      Subtotal
                  </TableItem>
                  <TableItem bold="true">
                      Subtotal
                  </TableItem>
                </Table>
                <Table>
                  <TableItem flex="true">
                      <Product>
                        <Img src='https://cdn.suitsupply.com/image/upload/b_rgb:efefef,bo_300px_solid_rgb:efefef,c_pad,w_2600/b_rgb:efefef,c_pad,dpr_1,w_1690,h_3042,f_auto,q_auto,fl_progressive/products/suits/default/Summer/P9449_1.jpg' />
                        <Details>
                          <Protitle>Title</Protitle>
                          <ProDesc>Desc</ProDesc>
                          <ProSize>size: XL</ProSize>
                        </Details>
                      </Product>
                  </TableItem>
                  <TableItem>
                      $120
                  </TableItem>
                  <TableItem>
                      <Counter>
                        <div>-</div>2<div>+</div>
                      </Counter>
                  </TableItem>
                  <TableItem>
                      $220
                  </TableItem>
                  <TableItem>
                  </TableItem>
                </Table>
              </Left>
              <Right>
                  <Subtotal>Subtotal : 120.90</Subtotal>
                  <Delivery>
                  Delivery Details:
                  <div>
                    <div
                      style={{
                        display: "flex",
                        gap: "6px",
                      }}
                    >
                        <TextInput small="true" placeholder="First Name" />
                        <TextInput small="true" placeholder="Last Name" />
                      </div>
                      <TextInput
                      small = "true"
                      placeholder="Email Address"
                    />
                    <TextInput
                      small="true"
                      placeholder="Phone no. +91 XXXXX XXXXX"
                    />
                    <TextInput
                      small="true"
                      textArea
                      rows="5"
                      placeholder="Complete Address (Address, State, Country, Pincode)"
                    />
                    </div>
                  </Delivery>
              </Right>
            </Wrapper>
        </Section>
    </Container>  
    )
}

export default Cart