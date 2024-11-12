const getEnvironmentValuesEndPoint = (req, res) => {
    
    const CurrentConnectionStrings = process.env.DB;
    const CurrentPORT = process.env.PORT;

    res.status(500).send(JSON.stringify([
        CurrentConnectionStrings,
        CurrentPORT
    ]));
};

module.exports = {
    getEnvironmentValuesEndPoint
};