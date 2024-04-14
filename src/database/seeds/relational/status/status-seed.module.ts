import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatusEntity } from '../../../../status/infrastructure/persistence/relational/entities/status.entity';
import { StatusSeedService } from './status-seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([StatusEntity])],
  providers: [StatusSeedService],
  exports: [StatusSeedService],
})
export class StatusSeedModule {}
