import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js";

const supabase = createClient('https://lrtcnqpjrvrjmrxvrwmf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxydGNucXBqcnZyam1yeHZyd21mIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjEzMTY0MTcsImV4cCI6MTk3Njg5MjQxN30.pNsuW-HdfdrTe2A5hz2jtuppU5A6dZIcUWNKmCz38bk')


// export

export const savingRouteData = async (
  routenum: number
): Promise<any> => {

  const { data, error } = await supabase.from('RouteStore').insert([{route:routenum}]);
};

export const savinghotspotData = async (
  hotspotnum: number,
  str_bumon: string
): Promise<any> => {

  const { data, error } = await supabase.from('hotSpotStore').insert([{hotspot:hotspotnum, bumon:str_bumon}]);
};
