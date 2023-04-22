import Repo from "@/app/components/Repo"
import RepoDirs from "@/app/components/RepoDirs"
import Link from "next/link"
import { Suspense } from "react"

const RepoPage  = ({ params: { name } }) => {
  return (
      <div className="card">
        <Link href={'/code/repos'} className="btn btn-back">Back to repositories</Link>
        <Suspense fallback={<h3>Loading Repo</h3>}>
          <Repo name={name}/>
        </Suspense>
        <Suspense fallback={<h4>Loading Directories</h4>}>
          <RepoDirs name={name}/>
        </Suspense>
      </div>
    )
}

export default RepoPage 