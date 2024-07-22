import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { useFormStatus } from 'react-dom'
export default function EmailSubmit() {
  const { pending } = useFormStatus()

  return (
    <div className='flex flex-col items-center'>
        <button type = "submit"
            className='mt-3 group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-[#183059] text-white border border-[#0b1125] rounded-full outline-none transition-all hover:scale-125 disabled:scale-100 disabled:opacity-75' disabled = {pending} 
            >
        {
        pending ? <div className='h-5 w-5 animate-spin rounded-full border border-white border-b-2 '></div> :(
            <>Submit <FaPaperPlane className = "text-xs opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition"/> </>
        )
        }
        </button>
    </div>
  )
}
