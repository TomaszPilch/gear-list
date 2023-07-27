import { createContext, useContext, useState, useMemo, useCallback } from 'react'

const categoriesDefault = [
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

const itemsDefault = [
  {
    title: 'Montame Atomic Jacket',
    category: 'Nepromokavá bunda',
    weight: 311,
    id: 1,
    qty: 1,
    src: '/montame-atomic-jacket.jpeg',
    href: '/items/1t',
  },
  {
    title: 'Montame Primino',
    category: 'Dlouhé triko',
    weight: 181,
    id: 2,
    qty: 1,
    href: '/items/2',
    src: '/montame-primino.jpeg',
  },
  {
    title: 'Icebreaker',
    category: 'Dlouhé triko',
    weight: 177,
    id: 3,
    qty: 1,
    src: '/icebreaker.jpeg',
    href: '/items/3',
  },
  {
    title: 'Montane Allez',
    category: 'Mikina tenká',
    weight: 188,
    id: 4,
    qty: 1,
    href: '/items/4',
    src: '/montane-allez.jpeg',
  },
  {
    title: 'Montane Volt',
    category: 'Mikina zateplená',
    weight: 510,
    id: 5,
    qty: 1,
    href: '/items/5',
    src: '/montane-volt.jpeg',
  },
  {
    title: 'Direct Alpine',
    category: 'Dlouhé kalhoty',
    weight: 411,
    id: 6,
    qty: 1,
    href: '/items/6',
    src: '/direct-alpine.jpeg',
  },
  {
    title: 'Montane Atomic Pants',
    category: 'Nepromokavé kalhoty',
    weight: 221,
    id: 7,
    qty: 1,
    href: '/items/7',
    src: '/montane-atomic-pants.jpeg',
  },
  { title: 'Devold', category: 'Trenky', weight: 73, id: 8, qty: 1, href: '/items/8', src: '/devold.jpeg' },
  { title: 'Craft', category: 'Trenky', weight: 57, id: 9, qty: 1, href: '/items/9', src: '/craft.jpeg' },
  { title: 'Gratness', category: 'Trenky', weight: 51, id: 10, qty: 1, href: '/items/10', src: '/gratness.jpeg' },
  {
    title: 'Icebreaker Bodyfit',
    category: 'Podvlíkačky',
    weight: 100,
    id: 11,
    qty: 1,
    href: '/items/11',
    src: '/icebreaker-bodyfit.jpeg',
  },
  {
    title: 'Lorpen Merino',
    category: 'Ponožky',
    weight: 53,
    id: 12,
    qty: 1,
    href: '/items/12',
    src: '/lorpen-merino.jpeg',
  },
  {
    title: 'Lorpen Trekking',
    category: 'Ponožky',
    weight: 68,
    id: 13,
    qty: 1,
    href: '/items/13',
    src: '/lorpen-trekking.jpeg',
  },
  {
    title: 'Krátké, bavlněné :)',
    category: 'Ponožky',
    weight: 57,
    id: 14,
    qty: 1,
    href: '/items/14',
    src: '/bavlnene.jpeg',
  },
  {
    title: 'Montagne Logo',
    category: 'Čepice',
    weight: 54,
    id: 15,
    qty: 1,
    href: '/items/15',
    src: '/montagne-logo.jpeg',
  },
  {
    title: 'New Balance',
    category: 'Boty',
    weight: 555,
    id: 16,
    qty: 1,
    href: '/items/16',
    src: '/new-balance.jpeg',
  },
  {
    title: 'Homemade',
    category: 'Kotníkové návleky',
    weight: 25,
    id: 17,
    qty: 1,
    href: '/items/17',
    src: '/homemade.jpeg',
  },
  {
    title: 'Sea To Summit',
    category: 'Moskytiéra na hlavu',
    weight: 27,
    id: 18,
    qty: 1,
    href: '/items/18',
    src: '/sea-to-summit.jpeg',
  },
]

const listsDefault = [
  {
    text: 'Iceland 2016',
    href: '/lists/iceland-2016',
    id: 'iceland-2016',
    items: [
      { id: 1, qty: 2, fav: true },
      { id: 2, qty: 1, fav: false },
      { id: 3, qty: 3, fav: true },
      { id: 4, qty: 2, fav: true },
      { id: 5, qty: 1, fav: true },
      { id: 6, qty: 3, fav: true },
      { id: 7, qty: 1, fav: true },
      { id: 8, qty: 3, fav: false },
      { id: 9, qty: 1, fav: false },
      { id: 10, qty: 2, fav: false },
      { id: 11, qty: 2, fav: false },
      { id: 12, qty: 3, fav: true },
      { id: 13, qty: 1, fav: true },
      { id: 14, qty: 2, fav: true },
      { id: 15, qty: 3, fav: true },
      { id: 16, qty: 2, fav: true },
      { id: 17, qty: 1, fav: true },
      { id: 18, qty: 1, fav: true },
    ],
  },
  {
    text: 'Mt. Blanc 2018',
    href: '/lists/mt.blanc-2018',
    id: 'mt.blanc-2018',
    items: [
      { id: 1, qty: 2, fav: true },
      { id: 2, qty: 1, fav: false },
      { id: 3, qty: 3, fav: true },
      { id: 4, qty: 2, fav: false },
      { id: 5, qty: 1, fav: true },
      { id: 6, qty: 3, fav: false },
      { id: 8, qty: 3, fav: true },
      { id: 9, qty: 1, fav: false },
      { id: 10, qty: 2, fav: true },
      { id: 12, qty: 3, fav: false },
      { id: 13, qty: 1, fav: true },
      { id: 14, qty: 2, fav: false },
      { id: 15, qty: 3, fav: true },
      { id: 16, qty: 2, fav: false },
      { id: 17, qty: 1, fav: true },
      { id: 18, qty: 1, fav: false },
    ],
  },
  {
    text: 'Paragliding',
    href: '/lists/paragliding',
    id: 'paragliding',
    items: [
      { id: 1, qty: 2, fav: false },
      { id: 2, qty: 1, fav: false },
      { id: 3, qty: 3, fav: false },
      { id: 4, qty: 2, fav: false },
      { id: 5, qty: 1, fav: false },
      { id: 6, qty: 3, fav: false },
      { id: 7, qty: 1, fav: false },
      { id: 8, qty: 3, fav: false },
      { id: 9, qty: 1, fav: true },
      { id: 10, qty: 2, fav: true },
      { id: 11, qty: 2, fav: true },
      { id: 13, qty: 1, fav: true },
      { id: 14, qty: 2, fav: true },
      { id: 15, qty: 3, fav: true },
      { id: 17, qty: 1, fav: false },
      { id: 18, qty: 1, fav: true },
    ],
  },
  {
    text: 'Thajsko 2019',
    href: '/lists/thajsko-2019',
    id: 'thajsko-2019',
    items: [
      { id: 2, qty: 1, fav: true },
      { id: 3, qty: 3, fav: true },
      { id: 4, qty: 2, fav: true },
      { id: 5, qty: 1, fav: true },
      { id: 6, qty: 3, fav: true },
      { id: 7, qty: 1, fav: true },
      { id: 8, qty: 3, fav: true },
      { id: 9, qty: 1, fav: false },
      { id: 10, qty: 2, fav: false },
      { id: 11, qty: 2, fav: true },
      { id: 13, qty: 1, fav: true },
      { id: 14, qty: 2, fav: true },
      { id: 15, qty: 3, fav: false },
      { id: 16, qty: 2, fav: false },
      { id: 17, qty: 1, fav: false },
      { id: 18, qty: 1, fav: false },
    ],
  },
  {
    text: 'Tour de Mont Blanc 2020',
    href: '/lists/tour-de-mont-blanc-2020',
    id: 'tour-de-mont-blanc-2020',
    items: [
      { id: 1, qty: 2, fav: false },
      { id: 2, qty: 1, fav: false },
      { id: 3, qty: 3, fav: false },
      { id: 4, qty: 2, fav: false },
      { id: 5, qty: 1, fav: false },
      { id: 6, qty: 3, fav: false },
      { id: 7, qty: 1, fav: false },
      { id: 8, qty: 3, fav: false },
      { id: 9, qty: 1, fav: true },
      { id: 11, qty: 2, fav: true },
      { id: 12, qty: 3, fav: true },
      { id: 13, qty: 1, fav: true },
      { id: 14, qty: 2, fav: false },
      { id: 16, qty: 2, fav: false },
      { id: 17, qty: 1, fav: true },
      { id: 18, qty: 1, fav: true },
    ],
  },
  {
    text: 'Ireland 2022',
    href: '/lists/ireland-2022',
    id: 'ireland-2022',
    items: [
      { id: 1, qty: 2, fav: true },
      { id: 2, qty: 1, fav: true },
      { id: 3, qty: 3, fav: true },
      { id: 5, qty: 1, fav: false },
      { id: 6, qty: 3, fav: true },
      { id: 7, qty: 1, fav: false },
      { id: 8, qty: 3, fav: false },
      { id: 9, qty: 1, fav: false },
      { id: 10, qty: 2, fav: false },
      { id: 11, qty: 2, fav: false },
      { id: 13, qty: 1, fav: true },
      { id: 14, qty: 2, fav: false },
      { id: 15, qty: 3, fav: true },
      { id: 16, qty: 2, fav: true },
      { id: 17, qty: 1, fav: true },
    ],
  },
]

const signedInStatusDefault = true

const userDefault = 'davidhotar'

const users = [
  { username: 'davidhotar', password: '12345' },
  { username: 'terka', password: 'hello' },
]

export const Context = createContext({
  categoriesDefault,
  itemsDefault,
  listsDefault,
  signedInStatusDefault,
  users,
  userDefault,
})

export default function ContextProvider({ children }) {
  const [categories, setCategory] = useState(categoriesDefault)
  const [items, setItem] = useState(itemsDefault)
  const [lists, setList] = useState(listsDefault)
  const [signedInStatus, setSignedInStatus] = useState(signedInStatusDefault)
  const [user, setUser] = useState(userDefault)

  const addCategory = useCallback(
    (newData) => {
      setCategory([...categories, newData])
    },
    [categories],
  )

  const addItemToList = useCallback(
    (id, newItem) => {
      setList((prevLists) =>
        prevLists.map((trip) =>
          trip.id === id
            ? {
                ...trip,
                items: [...trip.items, newItem],
              }
            : { ...trip },
        ),
      )
    },
    [lists],
  )

  const addItem = useCallback(
    (title, category, weight, src) => {
      const newItem = {
        title,
        category,
        weight,
        src,
        id: parseInt(items.length) + 1,
        qty: 1,
        href: '/items/' + (parseInt(items.length) + 1),
      }
      if (!categories.includes(category)) setCategory([...categories, category])
      setItem([...items, newItem])
      console.log(items)
    },
    [items],
  )

  const removeItemFromList = useCallback(
    (id, item) => {
      setList((prevLists) =>
        prevLists.map((trip) =>
          trip.id === id ? { ...trip, items: trip.items.filter((tmp) => tmp.id !== item.id) } : { ...trip },
        ),
      )
    },
    [lists],
  )

  const addToFav = useCallback(
    (id, item) => {
      setList((prevLists) =>
        prevLists.map((trip) =>
          trip.id === id
            ? { ...trip, items: trip.items.map((tmp) => (tmp.id !== item.id ? { ...tmp } : { ...tmp, fav: true })) }
            : { ...trip },
        ),
      )
    },
    [lists],
  )

  const removeFromFav = useCallback(
    (id, item) => {
      setList((prevLists) =>
        prevLists.map((trip) =>
          trip.id === id
            ? { ...trip, items: trip.items.map((tmp) => (tmp.id !== item.id ? { ...tmp } : { ...tmp, fav: false })) }
            : { ...trip },
        ),
      )
    },
    [lists],
  )

  const addList = useCallback(
    (title, newData) => {
      const tmp = { id: title, href: `/lists/${title}`, items: newData, text: title }

      setList((prevLists) => [...prevLists, tmp])
    },
    [lists, setList],
  )

  const changeSignedInStatus = useCallback((username) => {
    setSignedInStatus((signedInStatus) => !signedInStatus), setUser(username)
  }, [])

  // // Save the list to localStorage whenever it changes
  // useEffect(() => {
  //   localStorage.setItem('myList', JSON.stringify(lists))
  // }, [lists])
  //
  // // Load the list from localStorage when the component mounts
  // useEffect(() => {
  //   const storedList = localStorage.getItem('myList')
  //   if (storedList) {
  //     setList(JSON.parse(storedList))
  //   }
  // }, [])

  const value = useMemo(
    () => ({
      categories,
      items,
      lists,
      addCategory,
      addItemToList,
      addList,
      addItem,
      addToFav,
      removeFromFav,
      removeItemFromList,
      signedInStatus,
      users,
      changeSignedInStatus,
      user,
    }),
    [
      categories,
      items,
      lists,
      addCategory,
      addItemToList,
      removeItemFromList,
      addList,
      addItem,
      addToFav,
      removeFromFav,
      signedInStatus,
      users,
      changeSignedInStatus,
      user,
    ],
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const useDataContext = () => useContext(Context)

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
  return foundItem
}
