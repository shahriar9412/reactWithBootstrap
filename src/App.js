import React from 'react'
import Card1 from './components/Card1'
import Card2 from './components/Card2'
import Card3 from './components/Card3'
import { FaFacebook } from "react-icons/fa"
import ReactBootstrap from "./components/ReactBootstrap"

export default function App()
{
    return <div>
        < Card1 name="card1" desc="This is card1" />
        < Card2 name="card2" desc="This is card2" />
        < Card3 />
        < FaFacebook />
        < ReactBootstrap />
    </div>
}