// child.jsx

import React from "react";

export function Child({ data, className }) {
    return (
        <div className={className} style={{ backgroundColor: data.color }}>
            {data?.image ? <img src={data.image} alt={data.name} className="w-20" /> : <div></div>}

        </div>
    );
}
