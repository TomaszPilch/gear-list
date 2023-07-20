import { createContext, useState } from 'react'

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
  { title: 'Montame Atomic Jacket', category: 'Nepromokavá bunda', weight: '311' },
  { title: 'Montame Primino', category: 'Dlouhé triko', weight: '181' },
  { title: 'Icebreaker', category: 'Dlouhé triko', weight: '177' },
  { title: 'Montane Allez', category: 'Mikina tenká', weight: '188' },
  { title: 'Montane Volt', category: 'Mikina zateplená', weight: '510' },
  { title: 'Direct Alpine', category: 'Dlouhé kalhoty', weight: '411' },
  { title: 'Montane Atomic Pants', category: 'Nepromokavé kalhoty', weight: '221' },
  { title: 'Devold', category: 'Trenky', weight: '73' },
  { title: 'Craft', category: 'Trenky', weight: '57' },
  { title: 'Gratness', category: 'Trenky', weight: '51' },
  { title: 'Icebreaker Bodyfit', category: 'Podvlíkačky', weight: '100' },
  { title: 'Lorpen Merino', category: 'Ponožky', weight: '53' },
  { title: 'Lorpen Trekking', category: 'Ponožky', weight: '68' },
  { title: 'Krátké, bavlněné :)', category: 'Ponožky', weight: '57' },
  { title: 'Montagne Logo', category: 'Čepice', weight: '54' },
  { title: 'New Balance', category: 'Boty', weight: '555' },
  { title: 'Homemade', category: 'Kotníkové návleky', weight: '25' },
  { title: 'Sea To Summit', category: 'Moskytiéra na hlavu', weight: '27' },
]

const lists = [
  { text: 'Iceland 2016', href: '/iceland-2016' },
  { text: 'Mt. Blanc 2018', href: '/mt.blanc-2018' },
  { text: 'Paragliding', href: '/paragliding' },
  { text: 'Thajsko 2019', href: '/thajsko-2019' },
  { text: 'Tour de Mont Blanc 2020', href: '/tour-de-mont-blanc-2020' },
  { text: 'Ireland 2022', href: '/ireland-2022' },
]

export const Context = createContext({ categories, items, lists })

export default function ContextProvider({ children }) {
  const [data, setData] = useState({ categories, items, lists })
  return <Context.Provider value={data}>{children}</Context.Provider>
}
