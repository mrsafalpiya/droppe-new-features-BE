import { Body, Controller, Param, Post } from '@nestjs/common';
import { StandardsService } from './standards.service';

@Controller('standards')
export class StandardsController {
  constructor(private readonly standardsService: StandardsService) {}

  @Post('/version/:id/technical-results')
  async addTechnicalResultInStandardVersion(
    @Param('id') standardVersionId: string,
    @Body() data: { technicalResult: string },
  ) {
    return await this.standardsService.addTechnicalResultInStandardVersion(
      parseInt(standardVersionId),
      data.technicalResult,
    );
  }
}
