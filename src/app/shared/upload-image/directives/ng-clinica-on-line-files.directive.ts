import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { FileItem } from 'src/app/shared/models/file-items';
import { ImageValidator } from '../helpers/imageValidator';

@Directive({
  selector: '[appNgClinicaOnLineFiles]'
})
export class NgClinicaOnLineFilesDirective extends ImageValidator {
  @Input() files: FileItem[] = [];
  @Output() mouseOver: EventEmitter<boolean> = new EventEmitter();

  private getDataTransfer( event: any) {
    return event.dataTransfer
    ? event.dataTransfer
    : event.originalEvent.dataTransfer;
  }


  private extractFiles(fileList: FileList): void {
    for ( const property in Object.getOwnPropertyNames(fileList) ) {
      const tempFile = fileList[property];
      if (this.canBeUploaded(tempFile)) {
        const newFile = new FileItem(tempFile);
        this.files.push(newFile);
      }
    }
  }

  private canBeUploaded(file: File): boolean {
    if (!this.checkDropped(file.name, this.files) && this.
      validateType(file.type)
    ) {
      return true;
    } else {
      return false;
    }
  }

  private preventAndStop(event: any): void {
    event.preventDefault();
    event.stopPropagation();
  }

}
