// User representa al usuario en general, Administrator, Promoter y Supervisor
export class User {
    uid?: string; // Id
    name?: string; // Nombre
    email?: string;
    password?: string; 
    isDataLoader?: boolean;
    isDataUploader?: boolean;
    isAdmin?: boolean;
    agency?: string;
}
export class Administrator  {
    uid?: string;
    name?: string; 
    email?: string;
    password?: string;
}
