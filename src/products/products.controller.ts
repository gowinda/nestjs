import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { ProductsService } from './products.service';
import { get } from "https";

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) {}
  
    @Post()
    async addProduct(
    @Body('title') prodTitle: string,
     @Body('description') prodDesc: string, 
     @Body('price') prodPrice: number,
     ) {
       const generatedId = await this.productService.insertProduct(
             prodTitle,
             prodDesc, 
             prodPrice,
             );
        return { id: generatedId };
    }

    @Get()
    getAllProducts() {
        return this.productService.getProducts();
    }
    @Get(':id')
    getProduct(@Param('id') prodId: string) {
        return this.productService.getSingleProduct(prodId);
    }

    @Patch(':id')
    updateProduct(
        @Param('id') prodId: string,
        @Body('title') prodTitle: string,
         @Body('description') prodDesc: string, 
         @Body('price') prodPrice: number,
         )  {
        this.productService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
        return null;
     }

     @Delete(':id')
     removeProduct( @Param('id') prodId: string) {
         this.productService.deleteProduct(prodId);
         return null;
     }
}
