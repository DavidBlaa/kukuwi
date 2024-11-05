import { base } from "$app/paths";

export function getRandomIndex(list:any[])
	{
   if(list != undefined)
			{
				return parseInt(""+Math.random() * (list.length));
			}

			return -1;
	}

	export function getRandomSubset(list:any[], count:number)
	{
				const indexList:number[] = [];
				const tmp:any[] = [];

				do
				{
						const i = getRandomIndex(list);
						if(!indexList.includes(i))
						{
							 indexList.push(i);
								tmp.push(list[i])
						}

				}while(tmp.length<count)

				return tmp
	}

