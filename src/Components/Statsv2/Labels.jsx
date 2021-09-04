import React from 'react';
import info from '../../Images/info.svg';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 0fr);
  justify-items: flex-start;
  justify-content: flex-start;
  align-items: center;
  gap: 0rem 0rem;
`;
const Label = styled.div`
  width: 310px;
  display: grid;
  justify-content: flex-start;
  grid-template-columns: repeat(2, auto);
  gap: 0.8rem 2.4rem;
`;

const AmountWrapper = styled.div`
  display: grid;
  grid-template-columns: 0fr 0fr;
  align-items: center;
  gap: 0.65rem;
  img {
    cursor: pointer;
    margin-bottom: 0.3rem;
  }
`;

const Amount = styled.div`
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 28px;
  color: var(--main);
`;

const Dot = styled.div`
  width: 24px;
  height: 24px;
  background: ${(props) => props.color};
  border-radius: 50px;
`;

const Title = styled.p`
  grid-column: 2/3;
`;

const Labels = ({ labels, items, currency }) => {
  const numberFormat = new Intl.NumberFormat('en-US');
  return (
    <Wrapper>
      {labels &&
        labels.map((label, index) => (
          <Label>
            <Dot color={label.color} />
            <AmountWrapper className='label-amount'>
              {items[index] && (
                <Amount>
                  {currency + numberFormat.format(items[index].result)}
                </Amount>
              )}
              <img src={info} alt='info-icon' />
            </AmountWrapper>
            <Title>{label.name}</Title>
          </Label>
        ))}
    </Wrapper>
  );
};

export default Labels;
