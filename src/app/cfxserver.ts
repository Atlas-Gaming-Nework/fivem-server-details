export interface CfxServer {
    Data: Data;
}

interface Data {
    clients: number;
    sv_maxclients: number;
    connectEndPoints: string[];
    ownerName: string;
    hostname: string
}