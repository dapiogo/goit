export const Details = ({name, id, isNew }) => (
    <div>
        <div>id: {id}</div>
        <div>name: {name}</div>
        <div>new?: {String(isNew)}</div>
    </div>
)