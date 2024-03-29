import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';

import { PrismaService } from '../prisma.service';

@Injectable()
export class BankAccountsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createArgs: Prisma.BankAccountCreateArgs) {
    return this.prismaService.bankAccount.create(createArgs);
  }

  findMany<T extends Prisma.BankAccountFindManyArgs>(
    findManyArgs: Prisma.SelectSubset<T, Prisma.BankAccountFindFirstArgs>,
  ) {
    return this.prismaService.bankAccount.findMany(findManyArgs);
  }

  findFirst(findFirstArgs: Prisma.BankAccountFindFirstArgs) {
    return this.prismaService.bankAccount.findFirst(findFirstArgs);
  }

  update(updateArgs: Prisma.BankAccountUpdateArgs) {
    return this.prismaService.bankAccount.update(updateArgs);
  }

  delete(deleteArgs: Prisma.BankAccountDeleteArgs) {
    return this.prismaService.bankAccount.delete(deleteArgs);
  }
}
