import { Route, RouteProps, latLng } from "./route.entity"

describe('Route Tests', () => {
    test('constructor', ()=>{
        let routeProps: RouteProps = {
            title: 'my route',
            startPosition: {lat: 0, lng: 1},
            endPosition: {lat: 2, lng: 3},
        }

        let route = new Route(routeProps);

        expect(route.props).toStrictEqual({
            ...routeProps, points: []
        })


        routeProps = {
            title: 'my route',
            startPosition: {lat: 0, lng: 1},
            endPosition: {lat: 2, lng: 3},
            points: [ {lat: 10, lng: 11}]
        }

        route = new Route(routeProps);

        expect(route.props).toStrictEqual({
            ...routeProps, points: [ {lat: 10, lng: 11}]
        })
    })


    test('update title method', ()=> {
        
        const routeProps: RouteProps = {
            title: 'my route',
            startPosition: {lat: 0, lng: 1},
            endPosition: {lat: 2, lng: 3},
        }

        const route = new Route(routeProps);

        route.updateTitle('title updated');
        expect(route.title).toStrictEqual('title updated');

    } )

    /*test('update position method', ()=> {
        
        const routeProps: RouteProps = {
            title: 'my route',
            startPosition: {lat: 0, lng: 1},
            endPosition: {lat: 2, lng: 3},
        }

        const route = new Route(routeProps);
        
        const startPosition: latLng = {lat: 10, lng: 20};
        const endPosition: latLng = {lat: 30, lng: 40};

        route.updatePosition(startPosition, endPosition);
        expect(route.startPosition).toStrictEqual(startPosition);
        expect(route.endPosition).toStrictEqual(endPosition);


    } )*/

    test('update points method', ()=> {
        
        const routeProps: RouteProps = {
            title: 'my route',
            startPosition: {lat: 0, lng: 1},
            endPosition: {lat: 2, lng: 3},
        }

        const route = new Route(routeProps);
        
        const points: latLng[] = [
            {lat: 10, lng: 20}];
       

        route.updatePoints(points);
        expect(route.points).toStrictEqual(points);


    } )
})