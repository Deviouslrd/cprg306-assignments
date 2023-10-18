import StudentInfo from './StudentInfo'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl">CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <Link href="/week2">Link to Week 2</Link><br/>
      <Link href="/week3">Link to Week 3</Link><br/>
      <Link href="/week4">Link to Week 4</Link><br/>
      <Link href="/week5">Link to Week 5</Link><br/>
      <Link href="/week6">Link to Week 6</Link>
    </main>
  )
}
