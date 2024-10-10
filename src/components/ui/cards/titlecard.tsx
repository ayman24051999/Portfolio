import React from "react";

interface TitleCardProps {
    title: string;
    children: React.ReactNode;
    topMargin?: string;
    TopSideButtons?: React.ReactNode;
    onClick?: () => void;
}

const TitleCard: React.FC<TitleCardProps> = ({
    title,
    children,
    topMargin,
    TopSideButtons,
    onClick,
}) => {
    return (
        <div
            className={`main-card w-full p-6 bg-base-100 shadow-xl border-2 border-gray-300 rounded-lg ${
                topMargin || "mt-6"
            }`}
            onClick={onClick}>
            {/* Title for Card */}
            <div className='flex justify-between items-center'>
                <div className='text-2xl font-bold'>{title}</div>
                {/* Top side button, show only if present */}
                {TopSideButtons && <div>{TopSideButtons}</div>}
            </div>

            <hr className='my-4 border-t border-gray-300' />

            {/* Card Body */}
            <div className='h-full w-full pb-6 bg-base-100'>{children}</div>
        </div>
    );
};

export default TitleCard;
