import mongoose from 'mongoose';
const departmentSchema = new mongoose.Schema(
    {
      departmentName: {
        type: String,
        required: true,
        
      },

      empRef:{
        type: String,
      }
     
    },
    { timestamps: true }
  );
  const Department = mongoose.model('Department', departmentSchema);

export default Department;