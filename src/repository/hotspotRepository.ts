import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';
import { Hotspot } from "../data/hotspot.ts";

const supabase = createClient('https://lrtcnqpjrvrjmrxvrwmf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxydGNucXBqcnZyam1yeHZyd21mIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjEzMTY0MTcsImV4cCI6MTk3Njg5MjQxN30.pNsuW-HdfdrTe2A5hz2jtuppU5A6dZIcUWNKmCz38bk')
export class HotspotRepository {
    constructor() {}
    
    public async getHotspotById(id: number): Promise<Hotspot> {
        console.log('デデー取得');
        const { data, error } = await supabase.from('hotSpot').select();
        console.log('デデー取得');
        console.log(data);
        
        let hotspotData;
        data.map((item) => {
            if(item.id == id) {
                hotspotData = item;
            }
        });
        console.log(hotspotData);
        
        const hotspot: Hotspot = {
            name: hotspotData.name,
            id: id,
            coordinate: hotspotData.pos,
        }
        
        console.log(hotspot);
        
        return hotspot;
    }
}