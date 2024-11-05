export interface instrumentCardType {
	id: number;
	name: string;
 image: string;
 audios: string[];
}

export interface Mode {

    id: number;
    name: string;
    link: string;
    description: string;

}


export interface Level_Guessing{
    id: number;
    instrument_ids:number[];
    track_path:string;
    correct_id:number;
}