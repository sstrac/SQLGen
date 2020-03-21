import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
// key that is used to access the data in local storage

const STORAGE_KEY = 'tables';

@Injectable()
export class LocalStorageService {
     constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

     public storeLocally(item): void {

          // get array of tasks from local storage
          const currentStorage = this.storage.get(STORAGE_KEY) || [];
          // push new task to array
          currentStorage.push(item);
          // insert updated array to local storage
          this.storage.set(STORAGE_KEY, currentStorage);

          //this.storage.remove - to remove from local storage
     }

}