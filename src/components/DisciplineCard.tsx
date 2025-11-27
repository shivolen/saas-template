import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"


interface DisciplineCardProps {
    id: string
    description: string
    help: string
    color: string
    macho: string
  }
  
  const DisciplineCard = ({ id, description, help, color,macho }: DisciplineCardProps) => {
    return (
        <article
        className="w-[550px] rounded-3xl flex flex-col gap-4 px-6 py-4 my-3 shadow-md"
        style={{ backgroundColor: color }}
      >
        <div className="flex gap-6 flex-wrap justify-center">
          <div className="bg-black text-white rounded-full px-4 py-1 text-sm font-semibold shrink-0">
            {id}
          </div>
      
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-black">{description}</p>
            <p className="text-xs opacity-80 text-black">{help}</p>
          </div>
        </div>
      
        <Link href="/sign-in" className="w-full flex justify-center">
          <button className="bg-black text-white rounded-full px-6 py-2 text-sm font-medium w-full max-w-[250px] hover:bg-gray-900 transition">
            {macho}
          </button>
        </Link>
      </article>
      
      
    )
  }
  
  export default DisciplineCard
  