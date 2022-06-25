import { RouteInMemoryRepository } from "./route-in-memory.repository";
import { Route, RouteProps, latLng } from "../../domain/route.entity"

describe('test for route in memory repository', () => {

    it('Should insert a new route', async () => {
        const repository = new RouteInMemoryRepository();

        const routeProps: RouteProps = {
            title: 'my route',
            startPosition: {lat: 0, lng: 1},
            endPosition: {lat: 2, lng: 3},
        }

        const route = new Route(routeProps);

        await repository.insert(route);

        expect(repository.items).toHaveLength(1);
        expect(repository.items).toStrictEqual([route]);
        

    })


});


