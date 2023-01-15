import React from 'react'
import { Actions } from '../components/Actions'
import { Header } from '../components/Header'

export const Layout = (props: any) => {
    return (
        <>
            <Header />
            <main >
                {props.children}
            </main>
        </>
    )
}
