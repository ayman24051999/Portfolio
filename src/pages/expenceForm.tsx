import { useState } from "react";
import Input from "../components/ui/input";

function ExpenceForm({ addItems }) {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const handlSubmit = (e) => {
        e.preventDefault();
        addItems(description, amount, date); // Pass description and amount to addItems
        setAmount("");
        setDescription("");
        setDate("");
    };

    return (
        <>
            <form onSubmit={handlSubmit}>
                <Input
                    type='text'
                    placeholder='Description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <Input
                    type='number'
                    placeholder='Amount'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <Input
                    type='date'
                    placeholder='Date'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <button className='button-submit' type='submit'>
                    Submit
                </button>
            </form>
        </>
    );
}

export default ExpenceForm;
