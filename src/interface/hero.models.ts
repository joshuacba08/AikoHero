// Estas son las interfaces que tenemos al momento de acuerdo a las entidades que establecimos en nuestro dashboard.

export interface Hero{
  id: number,
  title: string,
  subtitle: string,
  image: string,
  action?:Action
}


export interface Action{
  path:string,
  option:string
}
