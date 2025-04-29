export default function Radios({ type, id, name, value }) {
    return (
        <div className="flex gap-2">
            <input type={type} id={id} name={name} value={value} />
            <label>{name}</label>
        </div>
    );
}
