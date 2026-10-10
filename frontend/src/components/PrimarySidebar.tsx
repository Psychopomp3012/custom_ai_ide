import { useEffect, useState } from "react";

import NewFilesIcon from "./icons/NewFilesIcon";
import NewFolderIcon from "./icons/NewFolderIcon";
import axios from "axios";

interface ExplorerItem {
    name: string;
    type: 'file' | 'folder';
    fullPath: string;
}

interface DirectoryResponse {
    path: string;
    files: ExplorerItem[]
}

const BACKEND_URL = import.meta.env.VITE_API_URL;

const PrimarySidebar = () => {

    const [explorerItems, setExplorerItems] = useState<ExplorerItem[]>([]);

    const fetchFiles = async () => {
        try {
            const { data } = await axios.get<DirectoryResponse>(`${BACKEND_URL}/api/read-directory`);

            setExplorerItems(data.files || []);
        } catch (error) {
            console.error("Failed to load/refresh files");
        }
    }

    useEffect(() => {
        fetchFiles();
    }, [])

    return (
        <div className="w-40 bg-base">
            {/* Icons on top */}
            <div className="flex text-[5px] text-white">
                {/* New File Icon Wrapper */}
                <div className="p-1 hover:bg-gray-700 cursor-pointer"
                    onClick={() => {
                        // Create New file
                    }}
                >
                    <NewFilesIcon className='w-4 h-4' />
                </div>
                {/* New Folder Icon Wrapper */}
                <div className="p-1 hover:bg-gray-700 cursor-pointer"
                    onClick={() => {
                        // Create New Folder
                    }}
                >
                    <NewFolderIcon className='w-4 h-4' />
                </div>
            </div>

            {/* Folders and Files */}
            {
                explorerItems.map((explorerItem, index) => (
                    <div className="flex items-center gap-2">
                        {/* Icon */}
                        {explorerItem.type === 'folder' ?
                            "" :
                            <div className="text-[10px]">
                                🟦
                            </div>
                        }
                        {/* Name of item */}
                        <div
                            className="text-[12px] text-white"
                            key={index}
                        >
                            {explorerItem.name}
                        </div>
                    </div>

                ))
            }

        </div>
    )
}

export default PrimarySidebar;