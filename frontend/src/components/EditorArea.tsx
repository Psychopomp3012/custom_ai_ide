import React, { useState } from 'react'

const EditorArea = () => {

    const [openEditorTabs, setOpenEditorTabs] = useState<String[]>(
        Array.from("1345")
    );

    return (
        <div className='w-full bg-red-500'>
            {/* EditorTabs */}
            <div className='flex'>
                {openEditorTabs.map((openEditorTab, index) => (
                    <div
                        key={index}
                    >
                        {openEditorTab}
                    </div>
                ))}
            </div>
            {/* CodeEditor */}
            <div>
                abcd
            </div>
        </div>
    )
}

export default EditorArea