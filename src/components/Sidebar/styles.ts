import styled from 'styled-components';

// UA: User account
export const Container = styled.div`
  grid-area: CL;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 11px 0px;

  /* O sair pra fora do componete na 'vertical' sera adicionado o scroll */
  overflow-y: scroll;

  /* Customiza o scrollbar */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Separator = styled.div`
  width: 32px;
  border-bottom: 2px solid #666;
  margin-bottom: 8px;
`;
