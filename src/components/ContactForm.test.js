import React from 'react';
import {render, screen, } from '@testing-library/react'
import ContactForm from './ContactForm'


test("renders ContactForm", () => {
  render(<ContactForm/>)
})

// Find all elements to test
const firstName = screen.queryByLabelText(/First Name*/i)
const lastName = screen.queryByLabelText(/Last Name*/i)
const email = screen.queryByLabelText(/Email*/i)
const message = screen.queryByLabelText(/Message/i)
const maxLength = screen.queryByText(/Looks like there was an error: maxLength/i)
const required = screen.queryByText(/Looks like there was an error: required/i)

//Test that component renders without any elements being tested.
test("can fill in form and display", () => {
  render(<ContactForm/>)

})

//Testing each inputs in order of appearence on screen.
test('first name renders to screen', () => {
  render(<ContactForm />)

  expect(firstName).not.toBeUndefined()
})
test('last name renders to screen', () => {
  render(<ContactForm />)
  expect(lastName).not.toBeUndefined()

})
test('first name renders to screen', () => {
  render(<ContactForm />)
})
test('email renders to screen', () => {
  render(<ContactForm />)
  expect(email).not.toBeUndefined()

})
test('message renders to screen', () => {
  render(<ContactForm />)
  expect(message).not.toBeUndefined()

})

//testing Messages render
test('test error message when name over 3 characters', () => {
  render(<ContactForm/>)
  expect(maxLength).not.toBeInTheDocument()
})
test('test error message - required', () => {
  render(<ContactForm/>)
  expect(required).not.toBeInTheDocument()
})


