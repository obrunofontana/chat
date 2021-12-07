import styled from 'styled-components';

// UA: User account
// CI: Contact info
// CL: Chat list
// CM: Chat messages
// CD: Chat Data
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 400px auto;
  grid-template-rows: 58px auto 62px;
  grid-template-areas:
    'UA CI'
    'CL CM'
    'CL CD';

  height: 100vh;

  grid-gap: 1px;

  margin-left: 6rem;
  margin-right: 6rem;
  padding-top: 18px;
  padding-bottom: 18px;

  background-color: #2081ce;

  > div {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
  }
`;
