import { useContext } from 'react'

import { Context } from '@/src/Context'

const Gear = () => {
  const gear = useContext(Context)
  const listItems = gear.items.map((item) => {
    return (
      <li color="black">
        {item.category}
        {item.title}
        {item.weight}
      </li>
    )
  })

  return <ul>{listItems}</ul>
}

export default Gear
