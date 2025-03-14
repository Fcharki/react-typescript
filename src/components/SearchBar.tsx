import { FC, useState } from 'react';

export const SearchBar : FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const[IsSearching, setIsSearching] = useState<boolean>(false);
    const handleSearch = (e :  React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setIsSearching(true)
        setSearchTerm(e.target.value);
        
    };
    
    return (
        <div>
            <input 
                    type="text" 
                    value={searchTerm}
                    className='px-4 py-2 my-3 w-full placeholder:text-gray-400  placeholder:text-center  placeholder:text-xl rounded-xl border-2 border-gray-400 focus:outline-none focus:border-amber-800'
                    placeholder="Search..." 
                    onChange={handleSearch} 
            />
            {
                IsSearching && 
                <p className='text-xl font-semibold'>Searching for :<span className="text-amber-800"> {searchTerm}</span></p>
            }
        </div>
    )
}