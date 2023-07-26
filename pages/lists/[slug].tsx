import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React from 'react'

import AppBar from '@/src/AppBar'
import { useList } from '@/src/Context'
import CustomList from '@/src/CustomList'

const Chart = dynamic(() => import('@/src/Chart'), { ssr: false })

export default function Page() {
  const router = useRouter()
  const [foundCurrentGear, listItems] = useList(router.query.slug)
  if (!foundCurrentGear) {
    return null
  }
  const currentTitle = foundCurrentGear.text
  console.log(foundCurrentGear, listItems)

  return (
    <>
      <AppBar title={currentTitle} />
      <br />
      <br />
      <br />
      <Chart tmp={listItems} />
      <CustomList tmp={listItems}></CustomList>
    </>
  )
}
