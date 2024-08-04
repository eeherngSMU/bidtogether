"use client"

import Link from "next/link";
import { useState, useEffect } from "react" 
// import { useRouter } from "next/router"

async function getGroup() {

    const res = await fetch('/api/group', {
        method: "GET",
        body: JSON.stringify(),
        headers: {
            'Content-Type': 'application/json'
        },

    });
    if (!res.ok) {
        throw new Error('Failed to fetch group')
    }
    return res.json()
}

const Feed = () => {
    const [group, setGroup] = useState([])
    const getData = async () => {
        const data = await getGroup()
        // console.log('DATA', data)
        setGroup(data)
    }

    useEffect(() => {
        getData()
    }, [])

    
    return (
        <div className="flex flex-wrap ">
            {group && group.map((details) => {
                return (<div key={details.groupName} className="flex-grow pl-6 w-full md:w-1/3 border border-gray-300 p-4">
                    <h2 className="text-base text-lg title-font font-medium mb-2">Group Name: {details.groupName}</h2>
                    <p className="leading-relaxed text-base">Group Size: {details.groupSize}</p>
                    <p className="leading-relaxed text-base">Module: {details.module}</p>
                    <p className="leading-relaxed text-base">Skillsets: {details.skillsets}</p>
                    <Link href="" className="mt-3 text-orange-400 inline-flex items-center">
                        Learn More
                    </Link>
                </div>)
            })}
        
        </div>
      )
    }

export default Feed


// import Link from "next/link";

// const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
//   return (
//     <section className='w-full max-w-full flex-start flex-col'>
//       <h1 className='head_text text-left'>
//         <span className='blue_gradient'>{type} Post</span>
//       </h1>
//       <p className='desc text-left max-w-md'>
//         {type} and share amazing prompts with the world, and let your
//         imagination run wild with any AI-powered platform
//       </p>

//       <form
//         onSubmit={handleSubmit}
//         className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
//       >
//         <label>
//           <span className='font-satoshi font-semibold text-base text-gray-700'>
//             Your AI Prompt
//           </span>

//           <textarea
//             value={post.prompt}
//             onChange={(e) => setPost({ ...post, prompt: e.target.value })}
//             placeholder='Write your post here'
//             required
//             className='form_textarea '
//           />
//         </label>

//         <label>
//           <span className='font-satoshi font-semibold text-base text-gray-700'>
//             Field of Prompt{" "}
//             <span className='font-normal'>
//               (#product, #webdevelopment, #idea, etc.)
//             </span>
//           </span>
//           <input
//             value={post.tag}
//             onChange={(e) => setPost({ ...post, tag: e.target.value })}
//             type='text'
//             placeholder='#Tag'
//             required
//             className='form_input'
//           />
//         </label>

//         <div className='flex-end mx-3 mb-5 gap-4'>
//           <Link href='/' className='text-gray-500 text-sm'>
//             Cancel
//           </Link>

//           <button
//             type='submit'
//             disabled={submitting}
//             className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
//           >
//             {submitting ? `${type}ing...` : type}
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default Form;