/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { render } from '@testing-library/react'
import Skills from './Skills'

// Unit tests for the skills file
describe('Skills', () => {
  it('renders without crashing', () => {
    render(<Skills />)
  })
})
