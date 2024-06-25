define(["require", "exports", "child_process"], function (require, exports, child_process_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log(JSON.stringify(JSON.parse((0, child_process_1.execSync)('pbpaste').toString()), null, 2));
});
