import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IEntityInfo, IAutoEntityService, getKeyFromModel, getKeyNamesFromModel } from '@briebug/ngrx-auto-entity';
import { Customer, Order } from '../models';
import { customerRecords } from './customer.data';
import { orderRecords } from './order.data';

@Injectable({providedIn: 'root'})
export class EntityMockService implements IAutoEntityService<any> {
  private entities: {
    Customer: Customer[];
    Order: Order[];
  };

  constructor() {
    this.entities = {
      Customer: customerRecords,
      Order: orderRecords
    };
  }

  loadAll(entityInfo: IEntityInfo): Observable<any[]> {
    const entities = this.entities[entityInfo.modelName];
    return of([...entities]);
  }

  loadMany(entityInfo: IEntityInfo, criteria: any): Observable<any[]> {
    const entities = this.entities[entityInfo.modelName];
    if (entityInfo.modelName === 'LineItem') {
      return of(entities.find(entity => entity.orderId === criteria.parents.order));
    } else {
      return of([...entities]);
    }
  }

  load(entityInfo: IEntityInfo, key: string | number): Observable<any> {
    const entities = this.entities[entityInfo.modelName];
    return of(entities.find(entity => 
        getKeyFromModel(entity.constructor, entity) === key
    ));
  }

  create(entityInfo: IEntityInfo, created: any): Observable<any> {
    const entities = this.entities[entityInfo.modelName];
    const keyNames = getKeyNamesFromModel(entityInfo.modelType);
    if (!keyNames.length) {
        const [keyName] = keyNames;
        const newEntity = {
            ...created,
            [keyName]: entities.reduce((max, existing) => 
                max < existing[keyName] ? existing[keyName] : max, 0
            )
        };
        this[entityInfo.modelName] = [...entities, newEntity];
    } else {
        this[entityInfo.modelName] = [...entities, created]; // Leave composite keys alone
    }
    
    return of(created);
  }

  update(entityInfo: IEntityInfo, updated: any): Observable<any> {
    const entities = this.entities[entityInfo.modelName];
    const keyNames = getKeyNamesFromModel(entityInfo.modelType);
    this[entityInfo.modelName] = entities.map(existing => 
        keyNames.every(key => existing[key] === updated[key]) ? updated : existing
    );
    
    return of(updated);
  }

  delete(entityInfo: IEntityInfo, deleted: any): Observable<any> {
    const entities = this.entities[entityInfo.modelName];
    const keyNames = getKeyNamesFromModel(entityInfo.modelType);
    this[entityInfo.modelName] = entities.filter(existing => 
        !keyNames.every(key => existing[key] === deleted[key])
    );
    return of(deleted);
  }
}