export interface IModel<Entity> {
  create(data: Entity): Promise<Entity>;
  read(): Promise<Entity[]>;
  readOne(pk: string): Promise<Entity | null>;
  update(pk: string, data: Entity): Promise<Entity | null>;
  delete(pk: string): Promise<Entity | null>;
}
