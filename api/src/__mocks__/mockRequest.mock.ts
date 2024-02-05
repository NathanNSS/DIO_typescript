import{Request, Params, ParamsDictionary} from "express-serve-static-core"

type ParsedQs = {[key: string]: undefined | string | string[] | ParsedQs | ParsedQs[]};

export function makeMockRequest({ params, query }: { params?: Params; query?: Params} ) {
    const request = {
        params: params || {},
        query: query || {},
    } as unknown

    return request as Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>
}