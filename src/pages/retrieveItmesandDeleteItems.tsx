function RetrieveItmesAndDeleteItems({ items, deleteItems }) {
    return (
        <div>
            {items.map((item, index) => (
                <div key={index}>
                    <a onClick={() => deleteItems(index)}>
                        {item.description} - ${item.amount}-|{item.date}|
                    </a>
                </div>
            ))}
        </div>
    );
}

export default RetrieveItmesAndDeleteItems;