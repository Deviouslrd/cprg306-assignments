import Link from "next/link";

export default function StudentInfo () {
    return (
        <main>
            <p>Connor deHaas</p>
            <p><b>Course section: </b>CPRG-306-E</p>
            <Link href="https://github.com/Deviouslrd/cprg306-assignments" className="underline">Github Repository</Link>
        </main>
    )
}