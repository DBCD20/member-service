const { Member } = require('./models');

exports.getNameList = async function(req, res, next){
    try {
        const memList = await Member.find();
        res.status(200).json(memList)
    }
    catch(err){
        return next({
            message: err.message,
            status: 400
        })
    }
}
exports.addNew = async function(req, res, next){
    try {
        const newMem = await Member.create(req.body);
        res.status(201).json({ message: "SUCCESSFULLY ADDED" });
    }
    catch(err){
        return next({
            message: err.message,
            status: 400
        })
    }
}
exports.editInfo = async function(req, res, next){
    try {
        const newMemberData = await Member.findByIdAndUpdate(req.params.id, req.body, { new: true, useFindAndModify: false })
        res.status(200).json(newMemberData)
    }
    catch(err){
        return next({
            message: err.message,
            status: 400
        })
    }
}
exports.deleteInfo = async function(req, res, next){
    try {
        let deletedMember = await Member.findByIdAndDelete(req.params.id)
        if(deletedMember) res.status(200).json({ message: "SUCCCESSFULLY DELETED" })
    }
    catch(err){
        return next({
            message: err.message,
            status: 400
        })
    }
}