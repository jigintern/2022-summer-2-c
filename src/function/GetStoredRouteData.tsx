import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';

const supabase = createClient('https://mocbnakwlobvatjxzjws.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vY2JuYWt3bG9idmF0anh6andzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjEyMzAxNTYsImV4cCI6MTk3NjgwNjE1Nn0.kRrg6uD1co42RwkTB2X9w7NZj4Gt5tdJ9TYJjYwbnSM')


// export 


export const getStoredRouteData = async ():Promise<any> =>{
    const { data, error } = await supabase.from('RouteStore').select()
    // console.log(data);
    return data;
}