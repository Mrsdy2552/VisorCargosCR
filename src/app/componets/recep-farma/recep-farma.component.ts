import { Component, OnInit } from '@angular/core';
import { VisorService } from '../../services/visor.service';
import { ExportarService } from '../../services/exportar.service';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-recep-farma',
  templateUrl: './recep-farma.component.html',
  styleUrls: ['./recep-farma.component.css']
})
export class RecepFarmaComponent implements OnInit {

  pacient: any  = [];
  SUMINISTROS: string;
  MEDICAMENTO: string;
  datos: any[] = [];

  constructor(private repTecnica: VisorService, private exportExcelService: ExportarService) { }

  ngOnInit() {

  }

  enviar(SUMINISTROS,MEDICAMENTO) {
    this.repTecnica.getRecepFarma(SUMINISTROS,MEDICAMENTO).subscribe(
      pacien=>{
        this.pacient = pacien
        console.log(this.pacient.rows);

        this.datos = this.pacient.rows.map((elm)=>{
          let mappacient ={
            Concepto: elm[0],
            Recepcion: elm[1],
            Sede: elm[2],
            Articulo: elm[3],
            Descripcion: elm[4],
            forma_Farmaceutica: elm[5],
            unidad: elm[6],
            laboratorio: elm[7],
            Numero_lote: elm[8],
            Registro_Sanitario: elm[9],
            Fecha_Vencimiento: elm[10],
            Cantidad_Relacionada:elm[11],
            Cantidad_Recibida:elm[12],
            farmaci: elm[13]
          }
          return mappacient;
        }
        );
       
        console.log('los datos son ',this.datos);
             }
             )
 
             
             

    }

    exportAsXLSX(): void {
      this.exportExcelService.exportAsExcelFile(this.datos, 'sample');
    }
  
  }
 
  