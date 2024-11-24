import { create, update, deleteLogModel, getLogByPlanId, getLogByUserId } from "../../database/models/logs.js";

const showLog = async (req, res) => {
    const user_id = parseInt(req.params.id, 10);
    const log = await getLogByUserId(user_id);
    return res.status(200).json({
        status: "success",
        message: "get log success!",
        data: log,
    });
}

const createLog = async (req, res) => {
    const { user_id, plan_id, succes, fail } = req.body;

    if (typeof user_id == "undefined" || user_id == "" ||
        typeof plan_id == "undefined" || plan_id == "" ||
        typeof succes == "undefined" || succes == "" ||
        typeof fail == "undefined" || fail == "") {
        return res.status(400).json({
            status: "error",
            message: "error create log!",
            data: null,
        });
    }

    const alreadyLog = await getLogByPlanId(plan_id);

    if (Object.keys(alreadyLog).length != 0) {
        return res.status(400).json({
            status: "error",
            message: "You have made the logs for this plan!",
            data: null,
        });
    }

    const createdLog = await create(plan_id, succes, fail)

    if (typeof createdLog != "undefined" && createdLog.affectedRows > 0) {
        const log = await getLogByUserId(user_id);

        if (log != null) {
            return res.status(200).json({
                status: "success",
                message: "get plan success!",
                data: log,
            });
        } else {
            return res.status(400).json({
                status: "error",
                message: "created plan failed!",
                data: null,
            });
        }
    } else {
        return res.status(400).json({
            status: "error",
            message: "created plan failed!",
            data: null,
        });
    }
};

const updateLog = async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { user_id, succes, fail } = req.body;

    if (typeof id == "undefined" || id == "" ||
        typeof succes == "undefined" || succes == "" ||
        typeof fail == "undefined" || fail == "") {
        return res.status(400).json({
            status: "error",
            message: "error update log!",
            data: null,
        });
    }

    const createdLog = await update(id, succes, fail)

    if (typeof createdLog != "undefined" && createdLog.affectedRows > 0) {
        const log = await getLogByUserId(user_id);

        if (log != null) {
            return res.status(200).json({
                status: "success",
                message: "get plan success!",
                data: log,
            });
        } else {
            return res.status(400).json({
                status: "error",
                message: "created plan failed!",
                data: null,
            });
        }
    } else {
        return res.status(400).json({
            status: "error",
            message: "created plan failed!",
            data: null,
        });
    }
};

const deleteLog = async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const user_id = parseInt(req.params.user_id, 10);

    const deletedLog = await deleteLogModel(id);
    const log = await getLogByUserId(user_id);


    return res.status(200).json({
        status: "success",
        message: "delete log success!",
        data: log,
    });
}

export { showLog, createLog, updateLog, deleteLog };
