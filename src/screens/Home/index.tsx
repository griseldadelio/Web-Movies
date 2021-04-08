import React, { FC } from 'react'
import { Layout, Main } from '../../components';
import { Card } from '../../components'

export const Home: FC = () => {

    return (
        <Layout>
            <Main>
                <Card />
            </Main>
        </Layout>
    )
}
