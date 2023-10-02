import cloudinary from "./cloudinary"
import streamifier from "streamifier"

export const streamUpload = async (req : any) =>{
    return new Promise (async (resolve, reject)=>{
        let stream = cloudinary.uploader.upload_stream(
            (err : Error, result : any)=>{
                if (result) {
                    return resolve(result)
                } else {
                    return reject(err)
                }
            }
        )

        streamifier.createReadStream(req.file.path).pipe(stream)
    })
}