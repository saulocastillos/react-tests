import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import Navbar from './index'

/**
 * Deve mostrar links para as páginas de exercício, 1 para cada dos 4 disponíveis.
 */

describe('Navbar', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Navbar />
    </MemoryRouter>
  )

  const link1 = screen.getByRole('link', { name: 'exerciseone' })
  const link2 = screen.getByRole('link', { name: 'exercisetwo' })
  const link3 = screen.getByRole('link', {
    name: 'exercisethree',
  })
  const link4 = screen.getByRole('link', {
    name: 'exercisefour',
  })

  it('should show four exercise links in Navbar', () => {
    expect(link1).toBeInTheDocument()
    expect(link2).toBeInTheDocument()
    expect(link3).toBeInTheDocument()
    expect(link4).toBeInTheDocument()
  })
  it('should navigate to exercise one page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
      </MemoryRouter>
    )

    act(() => {
      link1.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(screen.queryByText('Exercise One')).toBeInTheDocument()
  })
  it('should navigate to exercise two page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
      </MemoryRouter>
    )

    act(() => {
      link2.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(screen.queryByText('Exercise Two')).toBeInTheDocument()
  })
  it('should navigate to exercise three page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
      </MemoryRouter>
    )

    act(() => {
      link3.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(screen.queryByText('Exercise Three')).toBeInTheDocument()
  })
  it('should navigate to exercise four page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
      </MemoryRouter>
    )

    act(() => {
      link4.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(screen.queryByText('Exercise Four')).toBeInTheDocument()
  })
})
