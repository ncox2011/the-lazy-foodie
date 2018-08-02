export default class APIHandler {
    static getData = section => {
        return fetch(`http://localhost:5002/${section}`).then(e => e.json());
    };
    static reviewRecipe = (section, id, body) => {
        return fetch(`http://localhost:5002/${section}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
    };
    static deleteData = (section, id) => {
        return fetch(`http://localhost:5002/${section}/${id}`, {
            method: "DELETE"
        }).then(e => e.json())
    };
    static addData = (section, body) => {
        return fetch(`http://localhost:5002/${section}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
    };
    static getFavUserId = userNumber => {
        return fetch(
          `http://localhost:5002/favorites?userId=${userNumber}`
        ).then(e => e.json());
      };
}