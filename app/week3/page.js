import ItemList from './item-list'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl">My Shopping List</h1>
      <ItemList />
    </main>
  )
}
