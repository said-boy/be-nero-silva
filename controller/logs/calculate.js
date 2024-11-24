import { getLogByUserId } from "../../database/models/logs.js";

function calculatePercentage(total, variable) {
    const percentage = (100 / total) * variable;
    return parseFloat(percentage.toFixed(0));
}

const calculate = async (req, res) => {
    const user_id = parseInt(req.params.id, 10);

    let succes = 0
    let fail = 0

    const log = await getLogByUserId(user_id)
    
    log.forEach(element => {
        succes += element.succes
        fail += element.fail
    });

    const total = succes + fail

    const succesPercentage = calculatePercentage(total, succes)
    const failPercentage = calculatePercentage(total, fail)

    return res.status(200).json({
        status: "success",
        message: "success calculate!",
        data: {
            succes: succesPercentage,
            fail: failPercentage,
        },
    });

}

export { calculate };