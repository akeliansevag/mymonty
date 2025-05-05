"use client";
import { useState } from "react";

const Documents = () => {
    const [isEmployed, setIsEmployed] = useState(true);

    const employedDocs = [
        "Salary certificate + latest payroll",
    ];
    const selfEmployedDocs = [
        "Company’s legal documents",
    ];

    return (
        <div className="border rounded-xl overflow-hidden shadow mt-14">
            <div className="grid grid-cols-2">
                <button onClick={() => setIsEmployed(true)} className={`py-4 font-semibold text-lg ${ isEmployed ? "bg-black text-white" : "bg-gray-100 text-gray-400" }`}>If You’re Employed</button>
                
                <button onClick={() => setIsEmployed(false)} className={`py-4 font-semibold text-lg ${ !isEmployed ? "bg-black text-white" : "bg-gray-100 text-gray-400" }`}>If You’re Self-Employed</button>
            </div>
            <div className="bg-white divide-y divide-gray-200">
                <div className="p-4 text-lg font-medium text-gray-800">Lebanese ID or passport</div>
                <div className="p-4 text-lg font-medium text-gray-800">Utility bill (max 6 months old)</div>
                <div className="p-4 text-lg font-medium text-gray-800">Bank statement for the past 12 months</div>
                
                {isEmployed ? (
                    employedDocs.map((doc, index) => (
                        <div key={index} className="p-4 text-lg font-medium text-gray-800">
                            {doc}
                        </div>
                    ))
                ) : (
                    selfEmployedDocs.map((doc, index) => (
                        <div key={index} className="p-4 text-lg font-medium text-gray-800">
                            {doc}
                        </div>
                    ))
                )}
            </div>
        </div>
    );  

}

export default Documents;
