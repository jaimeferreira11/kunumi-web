import { NgModule } from '@angular/core';
import { TruncatePipe } from './truncate.pipe';
import { ImagenPipe } from './imagen.pipe';



@NgModule({
  declarations: [ImagenPipe, TruncatePipe],
  imports: [],
  exports: [ImagenPipe, TruncatePipe]
})
export class PipesModule { }
