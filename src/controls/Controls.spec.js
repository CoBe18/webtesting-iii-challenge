// Test away!

import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';


test('open and unlocked, cant be open if its locked', () => {
    const { getByTestId } = render (<Controls />);
    const button = getByTestId(/toggle-btn/i);
    fireEvent.click(button);
    getByTestId()
})