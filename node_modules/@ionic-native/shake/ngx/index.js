var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var Shake = /** @class */ (function (_super) {
    __extends(Shake, _super);
    function Shake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Shake.prototype.startWatch = function (sensitivity) { return cordova(this, "startWatch", { "observable": true, "clearFunction": "stopWatch", "successIndex": 0, "errorIndex": 2 }, arguments); };
    Shake.pluginName = "Shake";
    Shake.plugin = "cordova-plugin-shake";
    Shake.pluginRef = "shake";
    Shake.repo = "https://github.com/leecrossley/cordova-plugin-shake";
    Shake.platforms = ["iOS"];
    Shake = __decorate([
        Injectable()
    ], Shake);
    return Shake;
}(IonicNativePlugin));
export { Shake };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NoYWtlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBMkJQLHlCQUFpQjs7OztJQVkxQywwQkFBVSxhQUFDLFdBQW9COzs7Ozs7SUFacEIsS0FBSztRQURqQixVQUFVLEVBQUU7T0FDQSxLQUFLO2dCQTdCbEI7RUE2QjJCLGlCQUFpQjtTQUEvQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG4vKipcbiAqIEBuYW1lIFNoYWtlXG4gKiBAZGVzY3JpcHRpb24gSGFuZGxlcyBzaGFrZSBnZXN0dXJlXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFNoYWtlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zaGFrZS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc2hha2U6IFNoYWtlKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiBjb25zdCB3YXRjaCA9IHRoaXMuc2hha2Uuc3RhcnRXYXRjaCg2MCkuc3Vic2NyaWJlKCgpID0+IHtcbiAqICAgLy8gZG8gc29tZXRoaW5nXG4gKiAgIH0pO1xuICpcbiAqIHdhdGNoLnVuc3Vic2NyaWJlKCk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTaGFrZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXNoYWtlJyxcbiAgcGx1Z2luUmVmOiAnc2hha2UnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2xlZWNyb3NzbGV5L2NvcmRvdmEtcGx1Z2luLXNoYWtlJyxcbiAgcGxhdGZvcm1zOiBbJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNoYWtlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogV2F0Y2ggZm9yIHNoYWtlIGdlc3R1cmVcbiAgICogQHBhcmFtIHNlbnNpdGl2aXR5IHtudW1iZXJ9IE9wdGlvbmFsIHNlbnNpdGl2aXR5IHBhcmFtZXRlci4gRGVmYXVsdHMgdG8gNDBcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICdzdG9wV2F0Y2gnLFxuICAgIHN1Y2Nlc3NJbmRleDogMCxcbiAgICBlcnJvckluZGV4OiAyXG4gIH0pXG4gIHN0YXJ0V2F0Y2goc2Vuc2l0aXZpdHk/OiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19