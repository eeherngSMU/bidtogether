// ARCHIVE 4
// "use client"
// import { useState } from 'react';

// async function createGroup(data) {
//     const response = await fetch('/api/group', {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     });

//     if (!response.ok) {
//         throw new Error('Failed to create group');
//     }

//     return response.json();
// }

// export default function Form() {
//     const [formData, setFormData] = useState({
//         groupName: '',
//         groupSize: '',
//         module: '',
//         skillsets: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const dataToSubmit = {
//             ...formData,
//             groupSize: parseInt(formData.groupSize, 10) // Ensure groupSize is a number
//         };
//         console.log('Submitting data:', dataToSubmit);
//         try {
//             await createGroup(dataToSubmit);
//             console.log('Group created successfully');
//         } catch (error) {
//             console.error('Error creating group:', error);
//         }
//     };

//     return (
//         <form className="space-y-3 justify-items-stretch border-solid border-2 p-3" onSubmit={handleSubmit}>
//             <div className="flex justify-around justify-items-stretch w-full">
//                 <label>Group Name:</label>
//                 <input name="groupName" type="text" placeholder="Need a presenter!" value={formData.groupName} onChange={handleChange} />
//             </div>
//             <div className="flex justify-around justify-items-stretch w-full">
//                 <label>Group Size:</label>
//                 <input name="groupSize" type="text" placeholder="Enter group size" value={formData.groupSize} onChange={handleChange} />
//             </div>
//             <div className="flex justify-around justify-items-stretch w-full">
//                 <label>Module:</label>
//                 <input name="module" type="text" placeholder="Enter module" value={formData.module} onChange={handleChange} />
//             </div>
//             <div className="flex justify-around justify-items-stretch w-full">
//                 <label>Skillsets:</label>
//                 <input name="skillsets" type="text" placeholder="Enter skillsets" value={formData.skillsets} onChange={handleChange} />
//             </div>
//             <button type="submit">Create Group</button>
//         </form>
//     );
// }



// ARCHIVE 3(WORKING)

// "use client"
// import { useState } from 'react';

// async function createGroup(data) {
//     const response = await fetch('/api/group', {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     });
//     if (!response.ok) {
//         throw new Error('Failed to create group');
//     }

//     return response.json();
// }

// export default function Form() {
//     const [formData, setFormData] = useState({
//         groupName: '',
//         groupSize: '',
//         module: '',
//         skillsets: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//         console.log('formdata: ', formData)
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log('formData:', formData)
//         await createGroup(formData);
//     };

//     return (
//         <form className="space-y-3 justify-items-stretch border-solid border-2 p-3" onSubmit={handleSubmit}>
//             <div className="flex justify-around justify-items-stretch w-full">
//                 <label>Group Name:</label>
//                 <input name="groupName" type="text" placeholder="Need a presenter!" value={formData.groupName} onChange={handleChange} />
//             </div>
//             <div className="flex justify-around justify-items-stretch w-full">
//                 <label>Group Size:</label>
//                 <input name="groupSize" type="text" placeholder="Enter group size" value={formData.groupSize} onChange={handleChange} />
//             </div>
//             <div className="flex justify-around justify-items-stretch w-full">
//                 <label>Module:</label>
//                 <input name="module" type="text" placeholder="Enter module" value={formData.module} onChange={handleChange} />
//             </div>
//             <div className="flex justify-around justify-items-stretch w-full">
//                 <label>Skillsets:</label>
//                 <input name="skillsets" type="text" placeholder="Enter skillsets" value={formData.skillsets} onChange={handleChange} />
//             </div>
//             <button type="submit">Create Group</button>
//         </form>
//     );
// }


// ARCHIVE 2
// import Group from "@models/group"

// // What do we need in the form?
// // groupname, group size, mod, skillsets

// async function createGroup(data) {
//     // "use server"
//     await fetch('/api/group', {
//         method: 'POST',
//         body: JSON.stringify({data}),
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     })
//     // console.log('data:', data)

// }

// export default function Form() {


//   return (
//     <form className="space-y-3 justify-items-stretch border-solid border-2 p-3"
//         action={createGroup}>
//         <div className="flex justify-around justify-items-stretch w-full">
//         <label>Group Name:</label>
//         <input name="groupName" type="text" placeholder="Need a presenter!" 
//         />
//         <br/>
//         </div>
//         <div className="flex justify-around justify-items-stretch w-full"
//         >
//         <label>Group Size:</label>
//         <input name="groupSize" type="number" placeholder="5"/>
//         <br/>
//         </div>
//         <div className="flex justify-around justify-items-stretch w-full"
//         >
//         <label>Module:</label>
//         <input name="module" type="text" placeholder="IS111"/>
//         <br/>
//         </div>
//         <div className="flex justify-around justify-items-stretch w-full"
//         >
//         <label>Skillsets required:</label>
//         <input name="skillsets" type="text" placeholder="Presentation skills"/>
//         <br/>
//         </div>

//         <button type="submit" className="outline_btn">
//             Create Group
//         </button>
        
//     </form>
//   )
// }




// ARCHIVE 1
"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"




async function createGroup(data) {
    
    const res = await fetch('/api/group', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    if (!res.ok) {
            console.log('res:', res)
            throw new Error('Failed to create group');
        }
    // else if(res.ok) {
        
    // }
    // return res.json();
}

export default function Form() {
    const router = useRouter()

    const [groupName, setGroupName] = useState('')
    const [groupSize, setGroupSize] = useState('')
    const [module, setModule] = useState('')
    const [skillsets, setSkillsets] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleGroupNameChange = (e) => {
        setGroupName(e.target.value)
    }

    const handleGroupSizeChange = (e) => {
        setGroupSize(e.target.value)
    }

    const handleModuleChange = (e) => {
        setModule(e.target.value)
    }

    const handleSkillsetsChange = (e) => {
        setSkillsets(e.target.value)
    }

    const group = { 
        groupName: groupName, 
        groupSize: groupSize, 
        module: module, 
        skillsets: skillsets
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('submitting')
        setIsLoading(true)

        try {
            
            await createGroup(group)
            router.push('/')
            
        }
        catch {
            console.log('error creating group:', error)
        }
        finally {
            setIsLoading(false);
            
            
          }
    }

  return (
    <form className="mt-10 w-full flex flex-col gap-7 glassmorphism 
     max-w-full flex-end"
        onSubmit={handleSubmit}>
        <div className="font-satoshi font-semibold text-base text-gray-700">
        <label>Group Name:</label>
        <input name="groupName" type="text" placeholder="Need a presenter!" 
        value={groupName} onChange={handleGroupNameChange}/>
        <br/>
        </div>
        <div className="font-satoshi font-semibold text-base text-gray-700"
        value={groupSize} onChange={handleGroupSizeChange}>
        <label>Group Size:</label>
        <input name="groupSize" type="number" placeholder="5"/>
        <br/>
        </div>
        <div className="font-satoshi font-semibold text-base text-gray-700"
        value={module} onChange={handleModuleChange}>
        <label>Module:</label>
        <input name="module" type="text" placeholder="IS111"/>
        <br/>
        </div>
        <div className="font-satoshi font-semibold text-base text-gray-700"
        value={skillsets} onChange={handleSkillsetsChange}>
        <label>Skillsets required:</label>
        <input name="skillsets" type="text" placeholder="Presentation skills"/>
        <br/>
        </div>

        <button type="submit" className="outline_btn" disabled={isLoading}>
            {isLoading && <span>Creating...</span>}
            {!isLoading && <span>Create Group</span>}
        </button>
        
    </form>
  )
}
