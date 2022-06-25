import { RouteInMemoryRepository } from "../infra/db/route-in-memory.repository"
import { CreateRouteUseCase } from "./create-rote.use-case"

describe('CreateUseCase Tests', ()=> {


    it('Should create a new route', async ()=> {
        const repository = new RouteInMemoryRepository();
        const createUseCase = new CreateRouteUseCase(repository);
        const output  = await createUseCase.execute({
            title: 'my title',
            startPosition: {lat: 1, lng: 2},
            endPosition: {lat:3, lng: 4},
            points: []
        })
        expect(repository.items).toHaveLength(1);
    });

   
})