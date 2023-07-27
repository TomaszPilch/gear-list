import { PieChart } from '@mui/x-charts'
import * as React from 'react'

const Chart = (props) => {
  const gear = props.tmp.map((item) => {
    return { id: item.id, value: parseInt(item.weight) * parseInt(item.qty), label: item.category }
  })

  const chartData = []

  for (let i = 0; i < gear.length; i++) {
    if (chartData.length === 0 || !chartData.some((comparator) => gear[i].label === comparator.label)) {
      chartData.push(gear[i])
    } else {
      const idx = chartData.findIndex((comparator) => gear[i].label === comparator.label)

      chartData[idx].value = parseInt(chartData[idx].value) + parseInt(gear[i].value)
    }
  }

  return <PieChart align="left" height={300} series={[{ data: chartData }]} width={1000} />
}

export default Chart
