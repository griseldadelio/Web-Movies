import React, { FC, useEffect, useState } from 'react'
import { Layout, Main } from '../../components';
import { Intro } from './components/Intro';
import { CardCarousel } from './components/CardCarousel';

export const Home: FC = () => {
    return (
        <Layout>
            <Main>
                <Intro />
                <CardCarousel />
            </Main>
        </Layout>
    )
}
