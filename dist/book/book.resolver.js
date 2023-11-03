"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const book_service_1 = require("./book.service");
let BookResolver = class BookResolver {
    constructor(bookService) {
        this.bookService = bookService;
    }
    Books(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.bookService.getAll(userId);
        });
    }
    Book(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.bookService.getById(id);
        });
    }
    createBook(title, description, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = {
                title,
                description,
                userId,
            };
            return yield this.bookService.create(product);
        });
    }
    updateBook(id, title, description, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = {
                title,
                description,
                userId,
            };
            return yield this.bookService.update(id, product);
        });
    }
    deleteBook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.bookService.delete(id);
        });
    }
};
__decorate([
    graphql_1.Query(),
    __param(0, graphql_1.Args('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "Books", null);
__decorate([
    graphql_1.Query(),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "Book", null);
__decorate([
    graphql_1.Mutation(),
    __param(0, graphql_1.Args('title')),
    __param(1, graphql_1.Args('description')),
    __param(2, graphql_1.Args('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "createBook", null);
__decorate([
    graphql_1.Mutation(),
    __param(0, graphql_1.Args('id')),
    __param(1, graphql_1.Args('title')),
    __param(2, graphql_1.Args('description')),
    __param(3, graphql_1.Args('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "updateBook", null);
__decorate([
    graphql_1.Mutation(),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "deleteBook", null);
BookResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BookResolver);
exports.BookResolver = BookResolver;
//# sourceMappingURL=book.resolver.js.map