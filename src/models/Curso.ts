import { Pre } from './Pre';
import { Post } from './Post';

export class Curso {
    codigo:number;
    nombre:string;
    creditos:number;
    pre: Pre[];
    post:Post[];
    tipo:string;
}