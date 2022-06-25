//creating a new type 
export type latLng = {lat: number; lng: number;};


//convrting Route props into a object
export type RouteProps = {
    title: string,
    startPosition: latLng,
    endPosition: latLng,
    points?: latLng[],
}



//class Route
export class Route{
    public props: Required<RouteProps>;
    constructor(props: RouteProps) {
        this.props = {
            ...props,
            points: props.points || []
        }

    }

    updateTitle(value: string){
        this.title = value;
    }

    get title(){
        return this.props.title;
    }

    updatePosition(startPosition: latLng, endPosition: latLng) {
        this.props.startPosition = startPosition;
        this.props.endPosition = endPosition;
    }
    get startPosition(){
        return this.props.startPosition;
    }

    
    private set startPosition(value: latLng){
        this.props.startPosition = value;
    }

    
    get endPosition(){
        return this.props.startPosition;
    }


    updatePoints(value: latLng[]){
        this.props.points = value;
    }
    get points(){
        return this.props.points;
    }
    
    private set endPosition(value: latLng){
    this.props.startPosition = value;   
    }
    
    
    private  set title(value: string){
        this.props.title = value;
    } 

    
    toJSON() {

    }
   
}


//creating a new route
const route = new Route({
    title: 'my route', 
    startPosition: {lat: 15, lng: 15}, 
    endPosition: {lat: 20, lng: 20}, 
    points: [{lat: 20, lng: 20}, {lat: 20, lng: 20}]
});





