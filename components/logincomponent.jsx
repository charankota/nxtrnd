'use client'
import { useState, useEffect, useRef } from "react";
import { PostContext } from '../app/Context/PostContext'
import { useContext } from "react";
import { login } from '../app/apifunction/api'
import Swal from 'sweetalert2'
import style from '../styles/login.module.css'
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import Alert from './alert'

export default function LoginComponent() {
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
                { }
                <div className={`${style.loginbox}`}>
                    <form action="">
                        <h2 className={`${style.h2} font-bold`}>Login</h2>
                        <div className={`${style.inputbox}`}>
                            <span className={`${style.icon}`}>
                                <AiOutlineUser />
                            </span>
                            <input type="text" ref={inputUser} required />
                            <label>User</label>
                        </div>
                        <div className={`${style.inputbox}`}>
                            <span className={`${style.icon}`}>
                                <RiLockPasswordLine />
                            </span>
                            <input type="password" ref={inputPass} required />
                            <label>Password</label>
                        </div>
                        <div className={`${style.rememberforgot}`}>
                            <label>
                                <input type="checkbox" /> Remember me
                            </label>
                            <Link href='/forget'>Forgot Password</Link>
                        </div>
                        <button className={`${style.button}`} type="button" onClick={loginclick}>Login</button>
                        <div className={`${style.registerlink}`}>
                            <p>
                                Don't have an account? <Link href="/register">Register</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </section>
        </div>


    )


}
{/* <Script>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</Script> */}