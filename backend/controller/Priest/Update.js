const priest = require('../../models/Priest/Registration')
exports.updateInvites = async(req,res)=>{
    try {
        
        const priestData = await priest.findById(req.query.priestId);
        if(priestData){
            priestData.Invites +=1;
            priestData.save();
            return res.status(200).json({
                success:true,
                message:"successfully updated Invites"
            })
        }
        return res.status(404).json({
            success:false,
            message:"Can Not Found Priest"
        })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            success:false,
            message:"Sever error"
        })
    }
}