import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ModelsService {

  constructor(private http: HttpClient) { }

  getModelConfig(modelId: string): Observable<any> {
    return this.http.get(`${environment.modelsServer}/models/${modelId}/config`);
  }
}
