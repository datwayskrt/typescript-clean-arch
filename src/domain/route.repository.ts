import { Route } from "./route.entity"

export interface RouterepoitoryInterface{
    insert(route: Route): Promise<void>

}

