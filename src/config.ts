import { Type } from 'class-transformer';
import { IsNumber, IsUrl } from 'class-validator';

export class Config {
  @IsNumber()
  @Type(() => Number)
  public readonly BACKEND_PORT: number = 8080;

  @IsUrl({ protocols: ['postgresql'], require_tld: false })
  public readonly DATABASE_URL!: string;

  @IsUrl({ protocols: ['redis'], require_tld: false })
  public readonly REDIS_URL!: string;
}
