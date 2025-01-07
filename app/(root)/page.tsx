import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'

const Home = () => {
    const loggedIn = {firstName: 'Yusuf'}
    return (
        <section className='home'>
            <div className = "home-content">
                <header>
                    <HeaderBox
                        type = 'greeting'
                        title = 'Welcome to Horizon'
                        user = {loggedIn?.firstName || 'Guest'} 
                        subtext = 'Access and manage your account with ease'
                    />

                    <TotalBalanceBox
                        accounts = {[]}
                        totalBanks = {1}
                        totalCurrentBalance={1250.32}

                    />



                </header>

            </div>
        </section>
    )
}

export default Home
