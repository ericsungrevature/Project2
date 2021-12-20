import { useEffect, useState } from "react";


export interface SingleFileUploadProps {
    file: File;
}

export function SingleFileUpload({file}: SingleFileUploadProps){
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        async function upload() {
            const url = await uploadFile(file, (progress) => setProgress);
            console.log('url', url)
        }
        upload()
    }, []);
    return (<div style={{color:'black'}}>Image Uploaded Successfully.</div>)
    // <LinearProgress Variant="determinate" value={progress} />;
}

function uploadFile(file: File, onProgress: (percentage: number) => void) {
    const url = 'https://api.cloudinary.com/v1_1/demo/image/upload';
    const key = 'docs_upload_example_us_preset';

    return new Promise((res, rej) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);

        xhr.onload = () => {
            const resp = JSON.parse(xhr.responseText);
            res(resp.secure_url);
        }
        xhr.onerror =(evt) => rej(evt);
        xhr.upload.onprogress = (event) => {
            if(event.lengthComputable){
                const percentage = (event.loaded/event.total)*100;
                onProgress(Math.round(percentage));
            }
        };

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', key);
        xhr.send(formData)
    })
}