export interface Ret<T = any> {
    code: number;
    msg: string;
    data: T;
}
