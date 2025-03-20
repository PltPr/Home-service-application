import React, { JSX } from 'react'

interface Props  {
    id:number;
    name:string
}

const Card:React.FC<Props> = ({id,name}: Props):JSX.Element => {
  return (
    <div>{name}</div>
  )
}

export default Card