import { getTokenInfo } from "@/lib/solanaTracker";


export default async function TestPage(){

  const data = await getTokenInfo(
    "So11111111111111111111111111111111111111112"
  );


  return (
    <pre>
      {JSON.stringify(data,null,2)}
    </pre>
  );

}