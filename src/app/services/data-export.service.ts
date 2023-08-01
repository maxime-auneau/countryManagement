import {Injectable} from '@angular/core';
import * as FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class DataExportService {

  downloadFile(data: any, filename='countryManagement') {
    let csvData = this.convertToCSV(data);
    let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
    let downloadLink = window.URL.createObjectURL(blob);
    FileSaver.saveAs(downloadLink, filename + ".csv");
  }

  convertToCSV(objArray: any) {
    if (!objArray) {
      return;
    }
    const separator = ',';
    const keys = Object.keys(objArray[0]);
    return keys.join(separator) + '\n' +
      objArray.map((rowData: any) => {
        return keys.map(k => {
          return rowData[k.toLowerCase().replaceAll(' ', '_')] === null ||
          rowData[k.toLowerCase().replaceAll(' ', '_')] === undefined ? '' : rowData[k.toLowerCase().replaceAll(' ', '_')];
        }).join(separator);
      }).join('\n');
  }

}
