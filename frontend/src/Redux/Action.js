export const upd = "gdfd"
export const Alls = "545454"
export const sear = "tghghghg"



export function update(data) {
    return {
        type: upd,
        payload: data
    }
}

export function search(data) {
    return {
        type: sear,
        payload: data
    }
}
export function Allsearch(data) {
    return {
        type: Alls,
        payload: data
    }
}