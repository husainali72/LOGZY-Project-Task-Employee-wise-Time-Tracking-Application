const mongoose=require('mongoose')

const taskSchema=mongoose.Schema({
    taskName: {
        type: String,
        required: true
    },
    projectId: {
        type: mongoose.Types.ObjectId,
        ref: 'project.model'
    },
    employeeId: {
        type: mongoose.Types.ObjectId,
        ref: 'employee.model'
    },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        default: 'Low',
        required: true
    },
    status: {
        type: String,
        enum: ['Done', 'In Progress', 'Open', 'Pending'],
        default: 'Open',
        required: true
    },
    totalTime: [{
        from: {
            type: Date,
            required: true
        },
        to: {
            type: Date,
            required: true
        }
    }],
    timeOnTask: {
        type: Number,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    },
})

const taskModel=mongoose.model('task', taskSchema)
module.exports=taskModel