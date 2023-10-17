import StudentInfo from '../StudentInfo'
import Link from 'next/link'

export default function ShopList() {
  return (
    <main className="min-h-screen flex-col items-center justify-between p-24">
      <h1 class="text-3xl">My Shopping List</h1>
      <StudentInfo />
    </main>
  )
}
