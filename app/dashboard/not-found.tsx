import Link from "next/link"

const NorFoundPage = () => {
 
  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <h3>Page Not Found Go Back | <Link href="/dashboard" className="underline !text-[--textSoft]">Dashboard</Link></h3>
    </div>
  )
}

export default NorFoundPage