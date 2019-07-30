import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IEntityInfo, IAutoEntityService, getKeyFromModel } from '@briebug/ngrx-auto-entity';

const BASE_URL = 'http://solittlecode.briebug.com/api/v1';

export interface IPathMap {
  [name: string]: string | number;
}

export interface IQueryParamMap {
  [param: string]: string | string[] | number | number[];
}

export interface IEntityCriteria {
  parents: IPathMap;
  query: IQueryParamMap;
}

export const formatPath = (pathMap: IPathMap): string => 
  Object.keys(pathMap).map(name => `/${name}/${pathMap[name]}`).reduce((path, part) => `${path}${part}`, '');

export const formatQuery = (queryMap: IQueryParamMap): string =>
  Object.keys(queryMap).map(param => `${param}=${queryMap[param]}`).reduce((qs, param) => `${qs}${param}&`, '?');

export const buildParentPath = (criteria?: IEntityCriteria): string => 
  (criteria && criteria.parents) ? formatPath(criteria.parents) : '';

export const buildQuery = (criteria?: IEntityCriteria): string =>
  (criteria && criteria.query) ? formatQuery(criteria.query) : '';

export const parseCriteria = (criteria?: IEntityCriteria): { parent: string, query: string } => 
  ({ parent: buildParentPath(criteria), query: buildQuery(criteria) });

@Injectable({providedIn: 'root'})
export class EntityService implements IAutoEntityService<any> {
  constructor(private http: HttpClient) {}

  loadAll(entityInfo: IEntityInfo, criteria?: IEntityCriteria): Observable<any[]> {
    const { parent, query } = parseCriteria(criteria);

    return this.http.get<any[]>(
      `${BASE_URL}${parent}/${entityInfo.modelName}${query}`
    );
  }

  loadMany(entityInfo: IEntityInfo, criteria: IEntityCriteria): Observable<any[]> {
    const { parent, query } = parseCriteria(criteria);

    return this.http.get<any[]>(
      `${BASE_URL}${parent}/${entityInfo.modelName}${query}`
    );
  }

  load(entityInfo: IEntityInfo, key: string | number, criteria?: IEntityCriteria): Observable<any> {
    const { parent, query } = parseCriteria(criteria);

    return this.http.get<any>(
      `${BASE_URL}${parent}/${entityInfo.modelName}/${key}${query}`
    );
  }

  create(entityInfo: IEntityInfo, entity: any, criteria?: IEntityCriteria): Observable<any> {
    const { parent, query } = parseCriteria(criteria);

    return this.http.post<any>(
      `${BASE_URL}${parent}/${entityInfo.modelName}${query}`,
      entity
    );
  }

  update(entityInfo: IEntityInfo, entity: any, criteria?: IEntityCriteria): Observable<any> {
    const { parent, query } = parseCriteria(criteria);

    return this.http.patch<any>(
      `${BASE_URL}${parent}/${entityInfo.modelName}/${getKeyFromModel(entityInfo.modelType, entity)}${query}`,
      entity
    );
  }

  delete(entityInfo: IEntityInfo, entity: any, criteria?: IEntityCriteria): Observable<any> {
    const { parent, query } = parseCriteria(criteria);

    return this.http.delete<any>(
      `${BASE_URL}${parent}/${entityInfo.modelName}/${getKeyFromModel(entityInfo.modelType, entity)}${query}`,
    ).pipe(map(() => entity));
  }
}