import styled from 'styled-components'

import { Table, Empty as EmptyAnt } from 'antd'

export const Container = styled(Table)``

export const EmptyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`

export const Empty = styled(EmptyAnt)``
