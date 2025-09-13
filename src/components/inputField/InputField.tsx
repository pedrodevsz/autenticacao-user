"use client"

import { FieldError, UseFormRegisterReturn } from "react-hook-form"

interface InputFieldProps {
    label: string
    type?: string
    placeholder?: string
    registration: UseFormRegisterReturn
    error?: FieldError
}

export function InputField({
    label,
    type = "text",
    placeholder = " ",
    registration,
    error
}: InputFieldProps) {
    return (
        <div className="relative flex flex-row items-center">
            <input
                type={type}
                placeholder={placeholder}
                {...registration}
                className="peer text-white pl-2 h-[48px] pr-[40px] w-full bg-zinc-900 border border-zinc-700 rounded-lg text-base outline-0 focus:border-teal-500 focus:ring-4 focus:ring-[#14b8a61a]"
            />
            <label
                className="
          absolute left-2 text-zinc-400 text-sm transition-all duration-300 transform origin-[0]
          peer-placeholder-shown:translate-y-[12px] peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:text-base
          peer-focus:-translate-y-4 peer-focus:text-teal-400 peer-focus:text-sm
          peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:text-teal-400 peer-not-placeholder-shown:text-sm
        "
            >
                {label}
            </label>
            {error && (
                <span className="absolute -bottom-5 left-1 text-red-500 text-xs">
                    {error.message}
                </span>
            )}
        </div>
    )
}
