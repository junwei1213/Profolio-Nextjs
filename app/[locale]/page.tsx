import fs from 'fs'
import path from 'path'
import Portfolio from "@/components/Portfolio"

export default function Home() {
  const blurDataURL = fs.readFileSync(path.join(process.cwd(), 'public/profile-blurDataURL.txt'), 'utf8')

  return <Portfolio blurDataURL={blurDataURL} />
}
