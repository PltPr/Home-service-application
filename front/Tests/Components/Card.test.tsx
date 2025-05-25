import { it, expect, describe, vi } from 'vitest'
import {render,screen} from '@testing-library/react'
import React from 'react'
import Card from '../../src/Components/Card/Card';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/vitest'

vi.mock('../../src/Context/useAuth', () => ({
    useAuth: () => ({
      isAdmin: vi.fn().mockReturnValue(false) 
    })
  }));


describe('Card', () => {
    it('should render Card with provided data', () => {
        render(
        <BrowserRouter>
        <Card id={1} name={"example_service"}></Card>
        </BrowserRouter>)
        // eslint-disable-next-line testing-library/no-debugging-utils
        screen.debug();
        expect(screen.getByText('example_service')).toBeInTheDocument();
        
        const deleteButton = screen.queryByText('X');
        expect(deleteButton).not.toBeInTheDocument();
    })
})