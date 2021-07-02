import {
  INestApplication,
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
} from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

// The onModuleInit is optional — if you leave it out, Prisma will connect lazily on its first call to the database.
//  We don't bother with onModuleDestroy, since Prisma has its own shutdown hooks where it will destroy the connection. For more info on enableShutdownHooks, please see Issues with enableShutdownHooks
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on("beforeExit", async () => {
      await app.close();
    });
  }
}
