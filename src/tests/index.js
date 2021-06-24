// eslint-disable-next-line import/no-unresolved
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { renderHook, cleanup } from '@testing-library/react-hooks'
import { act } from 'react-dom/test-utils'
import userEvent from '@testing-library/user-event'

export { screen, render, userEvent, renderHook, act, cleanup }
