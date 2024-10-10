import React from "react";
import TitleCard from "../components/ui/cards/titlecard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons"; // Example icon

function RetrieveItemsAndDeleteItems({ items, deleteItems }) {
    return (
        <div>
            <TitleCard title='Tasks'>
                <div className='overflow-x-auto w-full'>
                    {" "}
                    {/* Add scrolling for long tables if needed */}
                    <table className='table-auto w-full border-collapse'>
                        <thead>
                            <tr className='table-titles'>
                                <th className='p-2 text-left'>Description</th>
                                <th className='p-2 text-left'>Amount</th>
                                <th className='p-2 text-left'>Date</th>
                                <th className='p-2 text-left'>Actions</th>{" "}
                                {/* Add header for actions */}
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index} className='border-b'>
                                    <td className='p-2'>{item.description}</td>
                                    <td className='p-2'> ${item.amount}</td>
                                    <td className='p-2'>{item.date}</td>
                                    <td>
                                        <button
                                            className='btn btn-red' // Add your styling classes here
                                            onClick={() => deleteItems(index)}>
                                            <FontAwesomeIcon
                                                icon={faDeleteLeft}
                                            />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </TitleCard>
        </div>
    );
}

export default RetrieveItemsAndDeleteItems;
