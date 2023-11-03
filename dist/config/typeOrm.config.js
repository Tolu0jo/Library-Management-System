"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
exports.typeOrmConfig = {
    type: "sqlite",
    database: __dirname + "/database.sqlite",
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true
};
//# sourceMappingURL=typeOrm.config.js.map