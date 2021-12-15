import React, {useState} from "react";
import './Drop.css';

const Dropzone = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [validFiles, setValidFiles] = useState([]);

    // dragged file/image is dragged over a valid drop section
    const dragOver = (e) => {
        e.preventDefault();
    }
    // dragged file/image to enter the drop section
    const dragEnter = (e) => {
        e.preventDefault();
    }
    // dragged file/image leaves the drop section
    const dragLeave = (e) => {
        e.preventDefault();
    }
    // file/image is dropped on the drop section
    const fileDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if(files.length) {
            handleFiles(files);
        }
        console.log(files);
    }
    const handleFiles = (files) =>{
        for(let i=0; i< files.length; i++){
            if(validateFile(files[i])){
                // add to array
                setSelectedFiles(prevArray => [...prevArray, files[i]]);
            }else{
                // add invalid
                files[i]['invalid']= true;
                setSelectedFiles(prevArray => [...prevArray, files[i]]); 
                setErrorMessage('File is invalid');
            }
        }
    }
    // check if file/image type is acceptable or not
    const validateFile = (file) => {
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon'];
        if(validTypes.indexOf(file.type) === -1){
            return false;
        }
        return true;
    }
    const fileSize = (size) => {
        if (size === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(size) / Math.log(k));
        return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
    
    const fileType = (fileName) => {
        return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) || fileName;
    }

    const removeFile = (name) => {
        const validFileIndex = validFiles.findIndex(e => e.name === name);
        validFiles.splice(validFileIndex, 1);
        // update validFiles array
        setValidFiles([...validFiles]);
        const selectedFileIndex = selectedFiles.findIndex(e => e.name === name);
        selectedFiles.splice(selectedFileIndex, 1);
        // update selectedFiles array
        setSelectedFiles([...selectedFiles]);
    }

    return(
        <div className="container">
            <div className="drop-container"
                onDragOver={dragOver}
                onDragEnter={dragEnter}
                onDragLeave={dragLeave}
                onDrop={fileDrop}
            >
                <div className="drop-message">
                    Drag N Drop image here
                </div>
            </div>
            <div className="file-display">
                {
                    selectedFiles.map((data, i) =>
                    <div className="file-status">
                        <div>
                            <div className="file-type">{fileType(data.name)}</div>
                            <span className={`file-name ${data.invalid ? 'file-error' : ''}`}>{data.name}</span>
                            <span className="file-size">({fileSize(data.size)})</span> {data.invalid && <span className='file-error-message'>({errorMessage})</span>}
                        </div>
                        <div className="file-remove" onClick={() => removeFile(data.name)}>X</div>
                    </div>
                    )
                }
            </div>
        </div>
    )
}
export default Dropzone;