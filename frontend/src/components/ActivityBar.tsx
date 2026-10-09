import { useState } from 'react';

import ExplorerIcon from '../../public/activityBarIcons/explorer.svg';
import SearchIcon from '../../public/activityBarIcons/search.svg';

const ActivityBar = () => {

    const [activePrimary, setActivePrimary] = useState<string | null>(null);

    return (
        <>
            {/* List of icons */}
            <div className='w-10 bg-panel flex flex-col items-center gap-2'>
                {/* Explorer Icon */}
                <img
                    src={ExplorerIcon}
                    alt='Explorer Icon'
                    className='w-5 h-5'
                />
                {/* Search Icon */}
                <img
                    src={SearchIcon}
                    alt='Search Icon'
                    className='w-5 h-5'
                />
            </div>
        </>
    )
}

export default ActivityBar;