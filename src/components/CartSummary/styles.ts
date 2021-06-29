import styled from 'styled-components'

export const Container = styled.div``

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
