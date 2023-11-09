import React from 'react'
import { FaBars } from 'react-icons/fa'
import CustomButton from '../CustomButton'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsWechat, BsChatDots } from 'react-icons/bs'
const ClientDashboaredHeader = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <div className={` ${isSidebarOpen
            ? 'pl-[220px] hidden md:block w-[100%] fixed h-[70px]'
            : 'pl-0 md:pl-[80px] lg:pl-[220px] hidden md:flex justify-center w-[100%] fixed h-[70px] '
            }`}>
            <div className="flex justify-center items-center py-4 width">
                <div className="flex justify-center items-center w-full gap-x-8">
                    <div className="flex gap-3 items-center w-[40%] lg:w-[20%]">
                        <div
                            className='md:flex items-center gap-x-4 capitalize pl-3 py-2 text-xl lg:hidden '
                            onClick={() => {
                                !toggleSidebar()
                            }}
                        >
                            <FaBars />
                        </div>
                        <div className="bg-[#C9C9C9] rounded-[5px] py-2 px-2  flex justify-center items-center text-[#FFFFFF] w-[100%]">
                            <h4>Welcome <span className='text-[#FF9C06]'>Abayomi Daniel</span></h4>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-x-6 w-[60%] lg:w-[80%]">
                        <div className="bg-[#C9C9C9] rounded-[8px] py-2 px-2 w-[60%]">
                            <input type="text" className='w-full  capitalize bg-[#C9C9C9] rounded-full border-none outline-none text-[#FFFFFF]' placeholder='search restuarants' />
                        </div>

                        <div className="flex justify-center items-center gap-x-4 w-[40%]">
                            <CustomButton
                                title='16' containerStyles='text-[white] flex justify-center items-center py-2 px-2 rounded-[5px] gap-x-4 bg-[#FF9C06]'
                                Icon={<AiOutlineShoppingCart />}
                            />
                            <div className="flex justify-center items-center gap-x-2">
                                <div className="bg-[#C9C9C9] rounded-[10px] py-2 px-2 text-lg text-[#FFFFFF]">
                                    <BsWechat />
                                </div>
                                <div className="bg-[#C9C9C9] rounded-[8px] py-2 px-2 text-lg text-[#FFFFFF]">
                                    <BsChatDots />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientDashboaredHeader