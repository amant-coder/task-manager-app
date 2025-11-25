"use client";

import React from "react";

const Button = ({
    children,
    onClick,
    type = "button",
    variant = "primary",
    disabled = false,
    className = "",
}) => {
    const baseStyles =
        "relative overflow-hidden font-bold py-2 px-6 rounded-lg shadow-lg transform transition-all duration-200 focus:outline-none active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary:
            "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-blue-500/40 hover:scale-105",
        secondary:
            "bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white border border-slate-600 hover:border-slate-500",
        danger:
            "bg-gradient-to-r from-red-500 to-red-600 text-white hover:shadow-red-500/40 hover:scale-105",
        success:
            "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:shadow-emerald-500/40 hover:scale-105",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyles} ${variants[variant]} ${className} group`}
        >
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>
            {/* Shine effect */}
            {!disabled && (
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
            )}
        </button>
    );
};

export default Button;
