
export const MovieGet = (req, res) => {
    res.send("Get all movie list.");
}

export const MovieCreate = (req, res) => {
    console.log(req.body);

    res.json(req.body);
}

export const MovieUpdate = (req, res) => {
    res.send("Movies updated.");
}

export const MovieDelete = (req, res) => {
    res.send("Movies deleted.");
}