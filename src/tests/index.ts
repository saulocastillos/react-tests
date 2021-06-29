// eslint-disable-next-line import/no-unresolved
import '@testing-library/jest-dom'
import { screen, render, fireEvent } from '@testing-library/react'
import { renderHook, cleanup } from '@testing-library/react-hooks'
import { act } from 'react-dom/test-utils'
import userEvent from '@testing-library/user-event'
import { unmountComponentAtNode } from 'react-dom'

export {
  screen,
  render,
  userEvent,
  renderHook,
  act,
  cleanup,
  unmountComponentAtNode,
  fireEvent,
}
