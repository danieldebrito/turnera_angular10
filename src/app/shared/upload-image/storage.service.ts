import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FileItem } from 'src/app/shared/models/file-items';
import { finalize } from 'rxjs/operators';

@Injectable()  // le saco root, es solo para upload img
export class StorageService {
  private MEDIA_STORAGE_PATH = 'clinicaOnLine';

  constructor(private readonly storage: AngularFireStorage) { }

  uploadImage(images: FileItem[]){
    for(const item of images) {
      item.uploading = true;

      const filepath = this.generateFileName(item.name);
      const fileRef = this.storage.ref(filepath);
      const task = this.storage.upload(filepath, item.file);

      item.uploadfPercent = task.percentageChanges();
      task.snapshotChanges()
      .pipe(
        finalize( () => {
          item.downloadURL = fileRef.getDownloadURL();
          item.uploading = false;
        })
      ).subscribe();

    }
  }

  private generateFileName(name: string): string {
    return `${this.MEDIA_STORAGE_PATH}/${new Date().getTime()}_$
    {name}`;
  }
}

