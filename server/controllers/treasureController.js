module.exports = {
    dragonTreasure: async (req, res) => {
        const db = req.app.get('db');
        let result = await db.get_dragon_treasure(1);
        return res.status(200).send(result)
    },
    getUserTreasure: async (req, res) => {
        const db = req.app.get('db');
        let result = await db.get_user_treasure([req.session.user.id]);
        return res.status(200).send(result)
    },
    addUserTreasure: async (req, res) => {
        const db = req.app.get('db');
        const {treasureURL}=req.body;
        const {id}=req.session.user;
        let userTreasure = await db.add_user_treasure([treasureURL, id]);
        return res.status(200).send(userTreasure)
    },
    getAllTreasure: async (req, res) => {
      const allTreasure = await req.app.get('db').get_all_treasure();
      return res.status(200).send(allTreasure)
    }
}