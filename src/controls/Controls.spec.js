// Test away!
import React from 'react'
import {render} from '@testing-library/react'
import Controls from './Controls'

test('Gate are defaults at unlock and open', ()=> {
    const {getByText} = render(<Controls locked closed/>)
    getByText('Unlock Gate' && 'Open Gate')
})