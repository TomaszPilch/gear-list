import { PieChart } from '@mui/icons-material'
import { useContext } from 'react'

import { Context } from '@/src/Context'

const Chart = () => {
  const tmp = useContext(Context)
  const gear = tmp.items.map((item) => {
    return { id: item.category, value: item.weight, label: item.category }
  })

  return <PieChart height={1000} series={gear} width={2000} />
}

export default Chart
