import Link from "next/link"  
import {Button} from "@/components/ui/button";    
import DisciplineCard from "@/components/DisciplineCard";
import CTA from "@/components/CTA";

const page = () => {
  return (
    <main className='flex flex-col items-center justify-center px-6 py-4'>
      <section className='text-center max-w-xl'>
        <h1 className='text-4xl font-bold mb-4'>
          Change Your Life in 21 Days!
        </h1>
        <p className='text-lg text-grey-500 mb-6'>
          Start Today , See The Change Tomorrow
        </p>

      </section>  
      <section className='home-section flex flex-row gap-6 flex-wrap justify-center '>
          <DisciplineCard 
          
            id="Accountability"
            description="Stay accountable to your goals with daily reminders and progress tracking."
            help= "Custom AI Coach to help you stay accountable to your goals."
            color="#ffda6e"
            macho = 'Self-Help Partner'
          />
          <DisciplineCard 
            id="Discipline"
            description="Stay disciplined and focused on your goals with daily reminders and progress tracking."
            help= "Github style contribution tracker to help you stay disciplined and focused on your goals."
            color="#e5d0ff"
            macho="21 Days of never giving up"
          
          />
          <DisciplineCard 
            id="Dedication"
            description="Stay dedicated to your goals with daily reminders and progress tracking."
            help= "Goal Plan and Daily Routine Generator to help you stay dedicated and motivated to your goals."
            color="#334155"
            macho = "Tracker to see progress"
          />
      </section>
      <section>
        <CTA /> 
      </section>
    </main>
  )
}
 
export default page