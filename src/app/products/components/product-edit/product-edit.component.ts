import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductReadModel } from '../../models/products.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  product: ProductReadModel = new ProductReadModel();

  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      var productId = params['productId'];
      if (productId) {
          // this.title = 'Edit Project';
          this.productsService.get(productId)
            .finally(() => {
              // this.hasLoaded = true;
              this.loading = false;
            })
            .subscribe(product => {
              this.product = product;
              // this.editor = editor;

              // this.projectService.getSourceOptions().subscribe(options => {
              //   this.mainSourceOptions = options
              //   this.otherSourceOptions = options.filter(s => s.id != this.editor.mainSourceId);
              // });        
            })
        } else {
        // this.title = 'Project Setup';
        // this.hasLoaded = true;
        this.loading = false;
      }
    });
  }

  submit($event: any) {
    // this.validationResult = null;
    this.loading = true;
    this.productsService
      .update(this.product)
      .finally(() => this.loading = false)
      .subscribe(() => {
        this.router.navigateByUrl('/products');
        // this.updated = true;
        // setTimeout(() => {
        //   this.router.navigateByUrl('/setup/projects');
        // }, 1500);
      }, err => {
        // if (err instanceof HttpErrorResponse && err.status == 412) {
        //   this.validationResult = err.error;
        // }
      })
  }

}
