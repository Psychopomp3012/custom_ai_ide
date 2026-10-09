import { useState } from 'react';

import ExplorerIcon from './icons/ExplorerIcon';
import SearchIcon from './icons/SearchIcon';

const ActivityBar = () => {

    const [activePrimary, setActivePrimary] = useState<string | null>(null);

    return (
        <>
            {/* List of icons */}
            <div className='w-10 bg-panel flex flex-col items-center'>
                {/* Explorer Icon Wrapper */}
                <div
                    className={`px-2 py-2 cursor-pointer
                        ${activePrimary === 'explorer'
                            ? 'text-white bg-gray-700'
                            : 'text-gray-500'
                        }`}
                    onClick={() => setActivePrimary('explorer')}
                >
                    <ExplorerIcon className='w-6 h-6' />
                </div>

                {/* Search Icon Wrapper */}
                <div
                    className={`px-2 py-2 cursor-pointer
                        ${activePrimary === 'search'
                            ? 'text-white bg-gray-700'
                            : 'text-gray-500'
                        }`}
                    onClick={() => setActivePrimary('search')}
                >
                    <SearchIcon className='w-6 h-6' />
                </div>
            </div>
        </>
    )
}

export default ActivityBar;