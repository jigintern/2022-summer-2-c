import { Route } from "../data/routes.ts";
import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';

const supabase = createClient('https://lrtcnqpjrvrjmrxvrwmf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxydGNucXBqcnZyam1yeHZyd21mIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjEzMTY0MTcsImV4cCI6MTk3Njg5MjQxN30.pNsuW-HdfdrTe2A5hz2jtuppU5A6dZIcUWNKmCz38bk')
export class RouteRepository {
    constructor() {}
    
    public async getRouteById(id: number): Promise<Route> {
        console.log('デデー取得');
        const { data, error } = await supabase.from('RouteLine').select();
        console.log('デデー取得');
        console.log(data);
        
        let routeData;
        data.map((item) => {
            if(item.id == id) {
                routeData = item;
            }
        });
        console.log(routeData);
        
        const route: Route = {
            id: id,
            start: /*routeData.start*/ 1,
            goal: /*routeData.goal*/ 1,
            path: routeData.route,
        }
        
        console.log(route);
        
        return route;
    }
}