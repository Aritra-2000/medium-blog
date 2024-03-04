
import { SignupInput } from "@aritra-paul/medium-common"
import axios from "axios"
import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config"


export const Auth = ({ type }: { type: "signup" | "signin" }) => {

    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    async function sendRequest(){

        try {

            const res = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
            const jwt = res.data;
            localStorage.setItem("token", jwt);
            navigate("/blogs");
            
        } catch (error) {
            alert("Error while giving input")
        }
    }

    return <div className=" h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="text-3xl font-extrabold">
                        {type === "signup" ? "Create an account" : "Login your account"}
                    </div>
                    <div className="text-slate-400 pt-2 text-center">
                       {type === "signup" ?  "Already have an account?" : "Don't have an account?"}
                        {type === "signup" ? <Link to={"/signin"} className="underline pl-2">Login </Link>: <Link to={"/signup"} className="underline pl-2">Create</Link>}
                    </div>
                </div>
                <div className="pt-4">
                    {type === "signup" && <LableInput lable="Name" placeholder="Aritra Paul..." onChange={(e) => {
                        setPostInputs(({
                            ...postInputs,
                            name: e.target.value
                        }))
                    }} />}
                    <LableInput lable="Email" placeholder="aritra@123..." onChange={(e) => {
                        setPostInputs(({
                            ...postInputs,
                            email: e.target.value
                        }))
                    }} />

                    <LableInput lable="Password" type={"password"} placeholder="123456..." onChange={(e) => {
                        setPostInputs(({
                            ...postInputs,
                            password: e.target.value
                        }))
                    }} />

                    <button type="button" onClick={sendRequest} className="text-white bg-gray-800 w-full mt-6 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign Up" : "Sign In"}</button>
                </div>
            </div>
        </div>
    </div>
}

interface lable {
    lable: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    type?: string,
}

function LableInput({ lable, placeholder, onChange, type }: lable) {
    return <div>
        <label htmlFor="first_name" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white pt-4">{lable}</label>
        <input type={type || "text"} onChange={onChange} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
    </div>
}