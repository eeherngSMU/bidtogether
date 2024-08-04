
// export async function POST({ data }) {
//     const group = data
//     return new Response(group)
// }

import Group from "@models/group";
import connectToDB from "@utils/database";


export async function POST(request) {
    
    try {
        await connectToDB()
        const data = await request.json();
        // console.log('data:', data)
        // console.log('grpSize:', typeof(data.groupSize))

        

        const newGroup = await Group.create({
            groupName: data.groupName,
            groupSize: data.groupSize,
            module: data.module,
            skillsets: data.skillsets,
        });

        console.log('Group created:', newGroup);
        
        
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.log('JSON:ERROR', error)
        return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}

export async function GET(req, res) {
    try {
        await connectToDB()
        const groups = await Group.find().lean()
        

        return new Response(JSON.stringify(groups), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }

        });
    } catch(error) {
        console.log('ERR:', error)
        return new Response(JSON.stringify({ error: 'HEre' }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}

// ARCHIVE 1

// export async function POST(request) {
    
//     try {
//         const data = await request.json();
//         const group = data;
        
//         return new Response(JSON.stringify(group), {
//             status: 200,
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
//     } catch (error) {
//         return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
//             status: 400,
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
//     }
// }