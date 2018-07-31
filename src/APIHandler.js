export default class APIHandler {
    static getData = section => {
        return fetch(`http://localhost:5002/${section}`).then(e => e.json());
    };
    static editData = (section, id, body) => {
        return fetch(`http://localhost:5002/${section}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
    };
    static deleteData = (id) => {
        return fetch(`http://localhost:5002/${id}`, {
            method: "DELETE"
        });
    };
    static addData = (section, body) => {
        return fetch(`http://localhost:5002/${section}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
    }
}