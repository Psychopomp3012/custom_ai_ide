import { useState } from 'react';
import AppIcon from '../../public/AppIcon.png';

const TitleBar = () => {

    const [activeMenu, setActiveMenu] = useState<string | null>('file');

    const toggleMenu = (menuName: string) => {
        if (activeMenu === menuName) {
            setActiveMenu(null);
        } else {
            setActiveMenu(menuName);
        }
    }

    const dropDownButtonStyle = "text-left px-4 py-0.5 hover:bg-hover whitespace-nowrap";

    return (
        <>
            {/* Invisible overlay for dropdown closing */}
            {activeMenu && (
                <div
                    className='fixed inset-0 z-40'
                    onClick={() => setActiveMenu(null)}
                ></div>
            )}
            <div className='w-full bg-panel flex items-center text-main text-[13.5px] py-1'>
                <img
                    src={AppIcon}
                    className='w-5 h-5 py-0.5 mx-1'
                />
                {/* All buttons and their dropdown items */}
                <div className='flex'>
                    {/* File button and its dropdown */}
                    <div className='relative'>
                        <button
                            className='px-2 py-0.5 hover:bg-hover rounded-md'
                            onClick={() => toggleMenu("file")}
                        >File</button>

                        {/* Dropdowns for file button */}
                        {activeMenu === 'file' && (
                            <div className='absolute flex flex-col text-[12px] bg-panel border border-[#333333] rounded-md overflow-hidden z-50'>
                                <button className={dropDownButtonStyle}>New File</button>
                                <button className={dropDownButtonStyle}>New Window</button>
                                <button className={dropDownButtonStyle}>Open File</button>
                                <button className={dropDownButtonStyle}>Open Folder</button>
                            </div>
                        )}
                    </div>

                    <div className='relative'>
                        <button
                            className='px-2 py-0.5 hover:bg-hover rounded-md'
                            onClick={() => toggleMenu("edit")}
                        > Edit</button>
                        {/* Dropdowns for edit button */}
                        {activeMenu === 'edit' && (
                            <div className='absolute flex flex-col text-[12px] bg-panel border border-[#333333] rounded-md overflow-hidden z-50'>
                                <button className={dropDownButtonStyle}>Undo</button>
                                <button className={dropDownButtonStyle}>Redo</button>
                                <button className={dropDownButtonStyle}>Cut</button>
                                <button className={dropDownButtonStyle}>Copy</button>
                                <button className={dropDownButtonStyle}>Paste</button>
                            </div>
                        )}
                    </div>

                    <div className='relative'>
                        <button
                            className='px-2 py-0.5 hover:bg-hover rounded-md'
                            onClick={() => toggleMenu("terminal")}
                        >Terminal</button>
                        {/* Dropdowns for terminal button */}
                        {activeMenu === 'terminal' && (
                            <div className='absolute flex flex-col text-[12px] bg-panel border border-[#333333] rounded-md overflow-hidden z-50'>
                                <button className={dropDownButtonStyle}>New Terminal</button>
                                <button className={dropDownButtonStyle}>Split Terminal</button>
                            </div>
                        )}
                    </div>

                </div>

            </div >
        </>
    )
}

export default TitleBar;