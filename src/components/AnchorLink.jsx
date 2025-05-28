import React from "react";

const AnchorLink = ({ children, link, className="", props }) => {
    return (
        <a
            href={link}
            target="_blank"
            className={`h-11 w-36 text-xl flex  items-center justify-between bg-white text-black/80 px-2 py-1 rounded-3xl group ${className}`}
			{...props}
        >
           	{children}
            <div className="h-2 w-2 bg-black rounded-full flex items-center justify-center group-hover:h-9 group-hover:w-9 overflow-hidden transition-all ">
                <span className="text-white hidden group-hover:block">↗</span>
            </div>
        </a>
    );
};

export default AnchorLink;
