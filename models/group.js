import { Schema, model, models } from 'mongoose'

const GroupSchema = new Schema({
    groupName: {
        type: String,
        unique: [true, 'Group Name already exists!'],
        index: true,
        required: [true, 'Group Name is required!'],
    }, 
    groupSize: {
        type: Number,
        // unique: [true, 'Group Size already exists!'],
        required: [true, 'Group Size is required!'],
    }, 
    module: {
        type: String,
        // unique: [true, 'Module already exists!'],
        required: [true, 'Module is required!'],
    }, 
    skillsets: {
        type: String,
        // unique: [true, 'Skillsets already exists!'],
        required: [true, 'Skillsets is required!'],
    }, 
    

    
})

const Group = models.Group || model("Group", GroupSchema)

export default Group