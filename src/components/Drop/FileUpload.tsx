import React, { useCallback, useState } from "react";
import { FileError, FileRejection, useDropzone } from "react-dropzone";
import { SingleFileUpload } from './SingleFileUpload';

export interface DropingFile {
    file: File;
    errors: FileError[];
}

export function FileUpload(){
    const [files, setFiles] = useState<DropingFile[]>([]);

    const onDrop = useCallback((accFiles:File[],rejFiles: FileRejection[] ) => {
        const mappedAcc = accFiles.map(file => ({file, errors: []}));
        setFiles(curr => [...curr, ...mappedAcc, ...rejFiles]);
    }, []);

    const {getRootProps, getInputProps} = useDropzone({onDrop});

    return (
        <React.Fragment>
        <div {...getRootProps()}>
            <input {...getInputProps()}/>

            <p style={{color:'black', padding:'5px'}}>Drag N Drop Image here <br/> or click here to Upload the image</p>
            {/* {JSON.stringify(files)} */}
        </div>

        {files.map((fileWrapper, idx )=> (
            <SingleFileUpload key={idx} file={fileWrapper.file}/>
        ))}
        </React.Fragment>
    );
}