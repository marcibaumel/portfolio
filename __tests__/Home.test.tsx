import { render, screen } from '@testing-library/react'
import Home from '@/app/page'
import Navbar from '@/components/Navbar/Navbar';
import ClientThemeWrapper from '@/contexts/ClientThemeWrapper';
import ThemeProvider from '@/contexts/ThemeContext';

it('Should have CV text ', () => {
    render(<ThemeProvider>
        <ClientThemeWrapper>
            <Home />
        </ClientThemeWrapper>
    </ThemeProvider>)
    const myElem = screen.getByText('React');
    expect(myElem).toBeInTheDocument()
})