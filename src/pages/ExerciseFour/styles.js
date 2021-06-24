import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 10px;
  }

  h2 {
    margin: 10px 0;
  }
`

export const ProductsBox = styled.div`
  display: flex;
  gap: 10px;
`

export const CartBox = styled.div`
  display: flex;
  gap: 10px;

  width: 100%;

  min-height: 100px;

  table {
    width: 100%;

    thead,
    td,
    th {
      text-align: left;
      height: 100%;
    }
  }

  .actions {
    button {
      width: 20px;
      margin: 0 5px;
    }
  }
`
