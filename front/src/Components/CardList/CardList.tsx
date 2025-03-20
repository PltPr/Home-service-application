import React, { JSX } from 'react'
import Card from '../Card/Card';

interface Props  {

}

const CardList:React.FC<Props> = (props: Props):JSX.Element => {
  return (
    <div>
    <Card id={1} name={"abc"}></Card>
    <Card id={2} name={"abcd"}></Card>
    <Card id={3} name={"abce"}></Card>
    </div>
  )
}

export default CardList