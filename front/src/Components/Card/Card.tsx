import React, { JSX } from 'react'
import { Link } from 'react-router-dom';
import "./Card.css"

interface Props  {
    id:number;
    name:string
}

const Card:React.FC<Props> = ({id,name}: Props):JSX.Element => {
  return (
    <div className='card'>{name}
    <Link to={`/order-page/${id}`}className='button'>
    <span>order service</span>
    </Link>
    </div>
  )
}

export default Card