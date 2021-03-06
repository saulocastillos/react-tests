import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { act } from '../../tests'

import Home from './index'

/**
 * Deve mostrar links para as páginas de exercício, 1 para cada dos 4 disponíveis.
 */

const MemoryRouterWrapper = () => {
  return (
    <MemoryRouter initialEntries={['/']}>
      <Home />
    </MemoryRouter>
  )
}

describe('Home', () => {
  render(<MemoryRouterWrapper />)

  const link1 = screen.getByRole('link', { name: 'exerciseone' })
  const link2 = screen.getByRole('link', { name: 'exercisetwo' })
  const link3 = screen.getByRole('link', {
    name: 'exercisethree',
  })
  const link4 = screen.getByRole('link', {
    name: 'exercisefour',
  })

  it('should show four exercise links in home', () => {
    expect(link1).toBeInTheDocument()
    expect(link2).toBeInTheDocument()
    expect(link3).toBeInTheDocument()
    expect(link4).toBeInTheDocument()
  })
  it('should navigate to exercise one page', () => {
    render(<MemoryRouterWrapper />)

    act(() => {
      link1.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(screen.queryByText('Exercise One')).toBeInTheDocument()
  })
  it('should navigate to exercise two page', () => {
    render(<MemoryRouterWrapper />)

    act(() => {
      link2.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(screen.queryByText('Exercise Two')).toBeInTheDocument()
  })
  it('should navigate to exercise three page', () => {
    render(<MemoryRouterWrapper />)

    act(() => {
      link3.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(screen.queryByText('Exercise Three')).toBeInTheDocument()
  })
  it('should navigate to exercise four page', () => {
    render(<MemoryRouterWrapper />)

    act(() => {
      link4.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(screen.queryByText('Exercise Four')).toBeInTheDocument()
  })
})
