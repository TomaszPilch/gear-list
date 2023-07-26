import { createContext, useContext, useState } from 'react'

const categories = [
  'Plynový vařič',
  'Nepromokavá bunda',
  'Dlouhé triko',
  'Mikina tenká',
  'Mikina zateplená',
  'Dlouhé kalhoty',
  'Nepromokavé kalhoty',
  'Kraťasy',
  'Trenky',
  'Podvlíkačky',
  'Ponožky',
  'Čepice',
  'Boty',
  'Kotníkové návleky',
  'Moskytiéra na hlavu',
]

const items = [
  {
    title: 'Montame Atomic Jacket',
    category: 'Nepromokavá bunda',
    weight: '311',
    id: 1,
    src: '/montame-atomic-jacket.jpeg',
    href: '/items/1t',
  },
  {
    title: 'Montame Primino',
    category: 'Dlouhé triko',
    weight: '181',
    id: 2,
    href: '/items/2',
    src: '/montame-primino.jpeg',
  },
  {
    title: 'Icebreaker',
    category: 'Dlouhé triko',
    weight: '177',
    id: 3,
    src: '/icebreaker.jpeg',
    href: '/items/3',
  },
  {
    title: 'Montane Allez',
    category: 'Mikina tenká',
    weight: '188',
    id: 4,
    href: '/items/4',
    src: '/montane-allez.jpeg',
  },
  {
    title: 'Montane Volt',
    category: 'Mikina zateplená',
    weight: '510',
    id: 5,
    href: '/items/5',
    src: '/montane-volt.jpeg',
  },
  {
    title: 'Direct Alpine',
    category: 'Dlouhé kalhoty',
    weight: '411',
    id: 6,
    href: '/items/6',
    src: '/direct-alpine.jpeg',
  },
  {
    title: 'Montane Atomic Pants',
    category: 'Nepromokavé kalhoty',
    weight: '221',
    id: 7,
    href: '/items/7',
    src: '/montane-atomic-pants.jpeg',
  },
  { title: 'Devold', category: 'Trenky', weight: '73', id: 8, href: '/items/8', src: '/devold.jpeg' },
  { title: 'Craft', category: 'Trenky', weight: '57', id: 9, href: '/items/9', src: '/craft.jpeg' },
  { title: 'Gratness', category: 'Trenky', weight: '51', id: 10, href: '/items/10', src: '/gratness.jpeg' },
  {
    title: 'Icebreaker Bodyfit',
    category: 'Podvlíkačky',
    weight: '100',
    id: 11,
    href: '/items/11',
    src: '/icebreaker-bodyfit.jpeg',
  },
  {
    title: 'Lorpen Merino',
    category: 'Ponožky',
    weight: '53',
    id: 12,
    href: '/items/12',
    src: '/lorpen-merino.jpeg',
  },
  {
    title: 'Lorpen Trekking',
    category: 'Ponožky',
    weight: '68',
    id: 13,
    href: '/items/13',
    src: '/lorpen-trekking.jpeg',
  },
  {
    title: 'Krátké, bavlněné :)',
    category: 'Ponožky',
    weight: '57',
    id: 14,
    href: '/items/14',
    src: '/bavlnene.jpeg',
  },
  {
    title: 'Montagne Logo',
    category: 'Čepice',
    weight: '54',
    id: 15,
    href: '/items/15',
    src: '/montagne-logo.jpeg',
  },
  {
    title: 'New Balance',
    category: 'Boty',
    weight: '555',
    id: 16,
    href: '/items/16',
    src: '/new-balance.jpeg',
  },
  {
    title: 'Homemade',
    category: 'Kotníkové návleky',
    weight: '25',
    id: 17,
    href: '/items/17',
    src: '/homemade.jpeg',
  },
  {
    title: 'Sea To Summit',
    category: 'Moskytiéra na hlavu',
    weight: '27',
    id: 18,
    href: '/items/18',
    src: '/sea-to-summit.jpeg',
  },
]

const lists = [
  {
    text: 'Iceland 2016',
    href: '/lists/iceland-2016',
    id: 'iceland-2016',
    items: [
      { id: 1, qty: 2 },
      { id: 2, qty: 1 },
      { id: 3, qty: 3 },
      { id: 4, qty: 2 },
      { id: 5, qty: 1 },
      { id: 6, qty: 3 },
      { id: 7, qty: 1 },
      { id: 8, qty: 3 },
      { id: 9, qty: 1 },
      { id: 10, qty: 2 },
      { id: 11, qty: 2 },
      { id: 12, qty: 3 },
      { id: 13, qty: 1 },
      { id: 14, qty: 2 },
      { id: 15, qty: 3 },
      { id: 16, qty: 2 },
      { id: 17, qty: 1 },
      { id: 18, qty: 1 },
    ],
  },
  {
    text: 'Mt. Blanc 2018',
    href: '/lists/mt.blanc-2018',
    id: 'mt.blanc-2018',
    items: [
      { id: 1, qty: 2 },
      { id: 2, qty: 1 },
      { id: 3, qty: 3 },
      { id: 4, qty: 2 },
      { id: 5, qty: 1 },
      { id: 6, qty: 3 },
      { id: 7, qty: 0 },
      { id: 8, qty: 3 },
      { id: 9, qty: 1 },
      { id: 10, qty: 2 },
      { id: 11, qty: 0 },
      { id: 12, qty: 3 },
      { id: 13, qty: 1 },
      { id: 14, qty: 2 },
      { id: 15, qty: 3 },
      { id: 16, qty: 2 },
      { id: 17, qty: 1 },
      { id: 18, qty: 1 },
    ],
  },
  {
    text: 'Paragliding',
    href: '/lists/paragliding',
    id: 'paragliding',
    items: [
      { id: 1, qty: 2 },
      { id: 2, qty: 1 },
      { id: 3, qty: 3 },
      { id: 4, qty: 2 },
      { id: 5, qty: 1 },
      { id: 6, qty: 3 },
      { id: 7, qty: 1 },
      { id: 8, qty: 3 },
      { id: 9, qty: 1 },
      { id: 10, qty: 2 },
      { id: 11, qty: 2 },
      { id: 12, qty: 0 },
      { id: 13, qty: 1 },
      { id: 14, qty: 2 },
      { id: 15, qty: 3 },
      { id: 16, qty: 0 },
      { id: 17, qty: 1 },
      { id: 18, qty: 1 },
    ],
  },
  {
    text: 'Thajsko 2019',
    href: '/lists/thajsko-2019',
    id: 'thajsko-2019',
    items: [
      { id: 1, qty: 0 },
      { id: 2, qty: 1 },
      { id: 3, qty: 3 },
      { id: 4, qty: 2 },
      { id: 5, qty: 1 },
      { id: 6, qty: 3 },
      { id: 7, qty: 1 },
      { id: 8, qty: 3 },
      { id: 9, qty: 1 },
      { id: 10, qty: 2 },
      { id: 11, qty: 2 },
      { id: 12, qty: 0 },
      { id: 13, qty: 1 },
      { id: 14, qty: 2 },
      { id: 15, qty: 3 },
      { id: 16, qty: 2 },
      { id: 17, qty: 1 },
      { id: 18, qty: 1 },
    ],
  },
  {
    text: 'Tour de Mont Blanc 2020',
    href: '/lists/tour-de-mont-blanc-2020',
    id: 'tour-de-mont-blanc-2020',
    items: [
      { id: 1, qty: 2 },
      { id: 2, qty: 1 },
      { id: 3, qty: 3 },
      { id: 4, qty: 2 },
      { id: 5, qty: 1 },
      { id: 6, qty: 3 },
      { id: 7, qty: 1 },
      { id: 8, qty: 3 },
      { id: 9, qty: 1 },
      { id: 10, qty: 0 },
      { id: 11, qty: 2 },
      { id: 12, qty: 3 },
      { id: 13, qty: 1 },
      { id: 14, qty: 2 },
      { id: 15, qty: 0 },
      { id: 16, qty: 2 },
      { id: 17, qty: 1 },
      { id: 18, qty: 1 },
    ],
  },
  {
    text: 'Ireland 2022',
    href: '/lists/ireland-2022',
    id: 'ireland-2022',
    items: [
      { id: 1, qty: 2 },
      { id: 2, qty: 1 },
      { id: 3, qty: 3 },
      { id: 4, qty: 0 },
      { id: 5, qty: 1 },
      { id: 6, qty: 3 },
      { id: 7, qty: 1 },
      { id: 8, qty: 3 },
      { id: 9, qty: 1 },
      { id: 10, qty: 2 },
      { id: 11, qty: 2 },
      { id: 12, qty: 0 },
      { id: 13, qty: 1 },
      { id: 14, qty: 2 },
      { id: 15, qty: 3 },
      { id: 16, qty: 2 },
      { id: 17, qty: 1 },
      { id: 18, qty: 0 },
    ],
  },
]

export const Context = createContext({ categories, items, lists })

export default function ContextProvider({ children }) {
  // const [data, setData] = useState({ categories, items, lists })
  const [category, setCategory] = useState(categories)
  const [item, setItem] = useState(items)
  const [list, setList] = useState(lists)

  const addCategory = (newData) => {
    setCategory([...categories, newData])
  }

  const addItem = (newData) => {
    setItem([...items, newData])
  }

  const addList = (newData) => {
    setList([...lists, newData])
  }

  // return <Context.Provider value={data}>{children}</Context.Provider>
  return <Context.Provider value={{ category, item, list }}>{children}</Context.Provider>
}

export const useList = (id: string) => {
  const gear = useContext(Context)
  const foundCurrentGear = gear.lists.find((item) => item.id === id)
  let listItems = []
  if (foundCurrentGear) {
    listItems = foundCurrentGear.items.map((item) => {
      const currentItem = gear.items.find((i) => i.id === item.id)
      return { ...currentItem, ...item }
    })
  }
  return [foundCurrentGear, listItems]
}

export const useItem = (id: number) => {
  const gear = useContext(Context)
  const foundItem = gear.items.find((item) => item.id === id)
  console.log(gear.items, id, foundItem)
  return foundItem
}
