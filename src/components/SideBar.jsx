import { useCallback, useEffect, useRef } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const SideBar = ({ sidebar, setsidebar, setQuery }) => {

    const toggleNav = function () {
        setsidebar(!sidebar)
    }

    const menuRef = useRef();

    const closeOpenMenus = useCallback(
        (e) => {
            if (
                menuRef.current &&
                sidebar &&
                !menuRef.current.contains(e.target)
            ) {
                setsidebar(false);
            }
        },
        [sidebar]
    );

    useEffect(() => {
        document.addEventListener("mousedown", closeOpenMenus);
    }, [closeOpenMenus]);
    return (
        <>
            <aside ref={menuRef} className={`fixed z-20 top-0 left-0 h-full transition-all duration-1000 ease-in-out ${!sidebar ? "md:w-[25vw] w-[60vw] -translate-x-full" : "md:w-[30vw] w-[60vw] -translate-x-1"}`}>
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
                    <div onClick={toggleNav} className={`${sidebar ? "right-10" : "right-[-15px]"} cursor-pointer pl-10 w-4 text-xxl fixed top-8 right-[-15px] text-gray-50`}>
                    {sidebar ? <CloseIcon/> : <MenuIcon />}
                    </div>
                    <ul className="space-y-2 font-medium">
                        <li>
                            <div className="flex justify-center items-center p-2 text-gray-100 cursor-pointer rounded-lg hover:bg-gray-700">
                                <span className="ms-3 font-extrabold text-3xl">News2Day</span>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => setQuery("top-headlines?country=in")} className="flex items-center p-2 cursor-pointer text-gray-100 rounded-lg hover:bg-gray-700">
                                <span className="flex-1 ms-3">Headlines</span>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => setQuery("everything?q=" + "Market stories")} className="flex items-center cursor-pointer p-2 text-gray-100 rounded-lg hover:bg-gray-700">
                                <span className="flex-1 ms-3">Market stories</span>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => setQuery("everything?q=" + "local")} className="flex items-center cursor-pointer p-2 text-gray-100 rounded-lg hover:bg-gray-700">
                                <span className="flex-1 ms-3">Local news</span>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => setQuery("everything?q=" + "new")} className="flex items-center cursor-pointer p-2 text-gray-100 rounded-lg hover:bg-gray-700">
                                <span className="flex-1 ms-3">Hot topics</span>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => setQuery("everything?q=" + "health")} className="flex items-center cursor-pointer p-2 text-gray-100 rounded-lg hover:bg-gray-700">
                                <span className="flex-1 ms-3">Health</span>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => setQuery("everything?q=" + "trending")} className="flex items-center cursor-pointer p-2 text-gray-100 rounded-lg hover:bg-gray-700">
                                <span className="flex-1 ms-3">Trending</span>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => setQuery("everything?q=" + "politics")} className="flex items-center cursor-pointer p-2 text-gray-100 rounded-lg hover:bg-gray-700">

                                <span className="flex-1 ms-3 ">politics</span>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => setQuery("everything?q=" + "Sports")} className="flex items-center cursor-pointer p-2 text-gray-100 rounded-lg hover:bg-gray-700">

                                <span className="flex-1 ms-3 ">Sports</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default SideBar