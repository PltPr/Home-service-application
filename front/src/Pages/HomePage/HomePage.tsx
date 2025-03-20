import React from 'react'
import CardList from '../../Components/CardList/CardList'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
        <h1>Dostepne uslugi</h1>
        <CardList/>
    </div>
  )
}

export default HomePage