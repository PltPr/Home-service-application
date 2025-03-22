import React from 'react'
import CardList from '../../Components/CardList/CardList'
import AddCardModal from '../../Components/AddCardModal/AddCardModal'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
        <h1>Dostepne uslugi</h1>
        <CardList/>
        <AddCardModal/>
    </div>
  )
}

export default HomePage