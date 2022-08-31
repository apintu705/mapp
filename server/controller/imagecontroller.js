
const grid =require('gridfs-stream');
const mongoose = require('mongoose');


let gfs, gridfsBucket;
const conn = mongoose.connection;
conn.once('open', () => {
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'fs'
    });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
});

const url="http:/localhost:8080"
exports.uploadimage=async(req,res,next)=>{
    if(!req.file){
        return res.status(404).send({msg:"file not found"})
    }
    const imageurl=`${url}/file/${req.file.filename}`
    return res.status(200).json({imageurl})
}

exports.getimage=async(request, response)=>{
    try {   
        const file = await gfs.files.findOne({ filename: request.params.filename });
        // const readStream = gfs.createReadStream(file.filename);
        // readStream.pipe(response);
        console.log(file)
        const readStream = gridfsBucket.openDownloadStream(file._id);
        readStream.pipe(response);
    } catch (error) {
        response.status(500).json({ msg: error.message });
    }
}