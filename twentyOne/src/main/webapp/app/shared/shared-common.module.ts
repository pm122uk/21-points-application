import { NgModule } from '@angular/core';

import { TwentyOnePointsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [TwentyOnePointsSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [TwentyOnePointsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TwentyOnePointsSharedCommonModule {}
