"use client";

import React from "react";

const Card = ({ children, className = "" }) => {
    return (
        <div
            className={`bg-slate-900 p-4 rounded-xl border border-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 hover:border-slate-700 ${className}`}
        >
            {children}
        </div>
    );
};

export default Card;
