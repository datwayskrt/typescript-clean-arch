import { RouterepoitoryInterface} from "../../domain/route.repository";
import { Route } from "../../domain/route.entity"



export class RouteInMemoryRepository implements RouterepoitoryInterface {
    
    items: Route[] = [];
    async insert(route: Route): Promise<void>{
        this.items.push(route);
    }
}