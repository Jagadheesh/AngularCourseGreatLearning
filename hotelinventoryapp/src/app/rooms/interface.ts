export interface Room {
    TotalRooms? : number;
    AvailableRooms? : number;
    PricePerMonth? : number;
}

export interface RoomList{
    RoomNumber : number;
    RoomType : string;
    photo : string;
    isBooked : boolean;
    PricePerMonth : number;
    InCheckTime? : Date;
    Rating? : number;
}