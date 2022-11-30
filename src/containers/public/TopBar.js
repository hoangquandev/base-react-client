import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs";
import { BsFillCaretDownFill } from "react-icons/bs";
import { topbarImg } from '../../assets/images';
import Button from '../../components/Button';
const TopBar = () => {
    const [lang, setLang] = useState(false)
    const [openLang, setOpenLang] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)
    return (
        <div className='bg-black relative hidden lg:block'>
            <div className='w-[1280px] flex mx-auto'>
                <div className='w-[85%] pl-[15%]'>
                    <div className='w-full h-5 text-center italic flex justify-evenly items-center leading-7 text-xs text-white'>
                        <div>info@themoderntouch.co</div>
                        <div>
                            <img className='max-w-full h-5' src={topbarImg} alt="slogan" />
                        </div>
                        <div>+84 28 39 305 018</div>
                    </div>
                </div>
                <div className='h-5 w-[15%] flex justify-evenly items-center'>
                    <Button onClick={() => {
                        setOpenSearch(!openSearch)
                    }} icon={<BsSearch className='my-auto h-5' />} />
                    <Button onClick={() => {

                        setOpenLang(!openLang)
                    }}
                        text={lang ? 'VN' : 'EN'}
                        icon={<BsFillCaretDownFill className='my-auto h-5' />} />
                </div>
            </div>
            <div className={(openSearch ? 'block' : 'hidden') + ' absolute bg-white w-[300px] z-[100] top-[22px] right-[220px] shadow-[0_0_12px_rgba(0,0,0,0.3)] rounded-[10px] text-center'}>
                <input type='text' placeholder='Type name project here' className='shadow-[0_0_12px_rgba(0,0,0,0.3)] rounded-[10px w-full text-center' />
            </div>
            <div onClick={() => {
                setLang(!lang)
                setOpenLang(!openLang)
            }} className={'absolute shadow-[0_0_12px_rgba(0,0,0,0.3)] rounded-md w-16 text-center z-[100] top-[20px] right-[158px] text-black ' + (openLang ? 'block' : 'hidden')}>
                {lang ? 'EN' : 'VN'}
            </div>
        </div>
    )
}

export default TopBar