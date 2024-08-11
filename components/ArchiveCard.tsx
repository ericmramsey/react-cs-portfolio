import React from 'react';
import { FaRegFolder } from 'react-icons/fa';
import { RxOpenInNewWindow } from 'react-icons/rx';

interface Props {
    title: string;
    descript: string;
    listItem: string[];
    link: string;
}

const ArchiveCard = ({ title, descript, listItem, link }: Props) => {
  return (
    <a href={ link } target="_blank" rel='opener noreferrer'>
        <div className="w-full h-80 rounded-lg bg-bodyColor border-solid border-2 border-textLight p-7 flex flex-col 
        justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
            <div className="flex justify-between items-center">
                <FaRegFolder className="text-4xl text-textTeal" />
                <RxOpenInNewWindow className="text-4xl hover:text-textTeal" />
            </div>
            <div>
                <h2 className="text-xl font-titleFont font-semibold tracking-wide 
                group-hover:text-textTeal"> 
                    { title }
                </h2>
                <p className="text-sm mt-3">
                { descript }
                </p>
            </div>
            <ul className="text-xs md1:text-sm text-textDark flex items-center gap-2 
                justify-between flex-wrap">
                {listItem.map((item, i) => (
                    <li key={i} className="hover:text-textTeal">{ item }</li>
                ))}
            </ul>
        </div>
    </a>
  );
};

export default ArchiveCard;
