export enum  Priority{
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGHT = 'HIGHT',
    INMEDIATE = 'INMEDIATE'
    
}

export interface ToDo{
    id: number,
    taskName: string,
    description: string,
    createdAt: Date,
    done: boolean,
    priority:  Priority
}