'use client'
import { useState, useEffect, useRef } from "react";
import { PostContext } from '../app/Context/PostContext'
import { useContext } from "react";
import { login } from '../app/apifunction/api'
import Swal from 'sweetalert2'
import style from '../styles/register.module.css'
import { AiOutlineUser } from "react-icons/ai";
import { FaMobileRetro } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function RegisterComponent() {
    const { rnd } = useContext(PostContext);
    const inputUser = useRef(null);
    const inputPass = useRef(null);
    const { studentId, setStdId, user, setUsr, userType, setUsrType } = useContext(PostContext);

    const router = useRouter();

    const loginclick = async () => {
        console.log('login click');
        const logObject = {
            user: inputUser.current?.value,
            Password: inputPass.current?.value,
        };


        const res = await login(logObject);
        if (res.existuser === false) {
            Swal.fire({
                title: 'Invalid login Details!',
                //text: 'Invalid login Details',
                icon: 'error',
                confirmButtonText: 'Clsoe'
            })

            return;
        }

        setStdId(res.user.id);
        setUsrType('student');
        setUsr(res.user);
        router.push('/testlist');

        // console.log(res.existuser);
        //console.log(res.user.mobile);
    };

    return (
        <div className={`${style.maindiv}`} >
            <section className={`${style.section}`}>
                <div className={`${style.loginbox}`}>
                    <form action="">
                        <h2 className={`${style.h2} font-bold`}>Register</h2>
                        <div className={`${style.inputbox}`}>
                            <span className={`${style.icon}`}>
                                <AiOutlineUser />
                            </span>
                            <input type="text" ref={inputUser} required />
                            <label>Name</label>
                        </div>
                        <div className={`${style.inputbox}`}>
                            <span className={`${style.icon}`}>
                                <AiOutlineUser />
                            </span>
                            <input type="text" ref={inputUser} required />
                            <label>UserName</label>
                        </div>
                        <div className={`${style.inputbox}`}>
                            <span className={`${style.icon}`} >
                                <RiLockPasswordLine />
                            </span>
                            <input type="password" ref={inputPass} required />
                            <label>Password</label>
                        </div>
                        <div className={`${style.inputbox}`}>
                            <span className={`${style.icon}`}>
                                <RiLockPasswordLine />
                            </span>
                            <input type="password" ref={inputPass} required />
                            <label>Retype Password</label>
                        </div>
                        <div className={`${style.inputbox}`}>
                            <span className={`${style.icon}`}>
                                <FaMobileRetro />
                            </span>
                            <input type="text" ref={inputUser} required />
                            <label>Mobile No</label>
                        </div>
                        <div className={`${style.inputbox}`}>
                            <span className={`${style.icon}`}>
                                <AiOutlineMail />
                            </span>
                            <input type="text" ref={inputUser} required />
                            <label>Email</label>
                        </div>
                        {/* <div className={`${style.inputbox}`}>
                            <span className={`${style.icon}`}>
                                <SiGoogleclassroom />
                            </span>
                            <input type="text" ref={inputUser} required />
                            <label>Class</label>
                        </div> */}
                        <div className={`${style.selectbox}`}>
                            <select className="">
                                <option value="0">Select Class...</option>
                                <option value="11">11th</option>
                                <option value="12">12th</option>
                                <option value="13">13th</option>
                            </select>
                        </div>

                        <button className={`${style.button}`} type="button" onClick={loginclick}>Register</button>
                        <div className={`${style.registerlink}`}>
                            <p>
                                <Link href="/">Login</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </section >
        </div >


    )


}
