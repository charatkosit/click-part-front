import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';


declare var $: any;


@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  products: any;

  private readonly ProductsUrl = 'http://localhost:3000/api/v1/products';
  private readonly UploadUrl = 'http://localhost:3000/api/v1/products/upload';
  excelForm: any;

  

  constructor(private readonly http: HttpClient , private fb: FormBuilder) { }

  ngOnInit(): void {

    this.http.get(this.ProductsUrl).subscribe(
      (data): void => {
        this.products = data;
      },
      (error) => {
        console.log(error);
      }
    );

    $(function () {
      $("#example1").DataTable({
        "responsive": true, "lengthChange": false, "autoWidth": false,
        // "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
      }).buttons().container().appendTo('#example1_wrapper .col-md:eq(0)');
      $('#example2').DataTable({
        "paging": true,
        "lengthChange": false,
        "searching": true,
        "ordering": false,
        "info": true,
        "autoWidth": false,
        "responsive": true,
      });
    });
    
    
  }
 


}


  

