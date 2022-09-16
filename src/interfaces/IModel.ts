export interface IModel<Entity> {
  create(data: Entity): Promise<Entity>;
  read(): Promise<Entity[]>;
  readOne(_id: string): Promise<Entity | null>;
  update(_id: string, data: Entity): Promise<Entity | null>;
  delete(_id: string): Promise<Entity | null>;
}
