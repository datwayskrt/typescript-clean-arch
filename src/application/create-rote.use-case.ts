import { latLng, Route } from "../domain/route.entity";
import { RouterepoitoryInterface } from "../domain/route.repository";

type CreateRouteInput = {
    title: string;
    startPosition: latLng;
    endPosition: latLng;
    points?: latLng[];


}

type CreateRouteOutput = {
    title: string;
    startPosition: latLng;
    endPosition: latLng;
    points?: latLng[];


}



export class CreateRouteUseCase {

    constructor(private routeRepo: RouterepoitoryInterface){

    }

    async execute(input: CreateRouteInput){
        const route = new Route(input);
        await this.routeRepo.insert(route);
        return route.toJSON();

    }

}