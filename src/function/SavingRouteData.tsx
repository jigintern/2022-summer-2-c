import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js";

const supabase = createClient('https://lrtcnqpjrvrjmrxvrwmf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxydGNucXBqcnZyam1yeHZyd21mIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjEzMTY0MTcsImV4cCI6MTk3Njg5MjQxN30.pNsuW-HdfdrTe2A5hz2jtuppU5A6dZIcUWNKmCz38bk')


// export

export const savingRouteData = async (
  goal1: number,
  goal2: number,
): Promise<any> => {

  const { data, error } = await supabase.from('RouteStore').insert([{start: goal1, goal: goal2}]);
};
