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
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const book_entity_1 = require("./book.entity");
const typeorm_2 = require("@nestjs/typeorm");
let BookService = class BookService {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }
    getAll(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.bookRepository.find({
                where: {
                    userId
                }
            });
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = yield this.bookRepository.findOne({ where: { id } });
            if (book) {
                return book;
            }
            else {
                throw new common_1.NotFoundException();
            }
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = this.bookRepository.create(data);
            yield this.bookRepository.save(book);
            return book;
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.bookRepository.update({ id }, data);
            return this.bookRepository.findOne({ id });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.bookRepository.delete({ id });
        });
    }
};
BookService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(book_entity_1.BookEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map