import { PartialType } from '@nestjs/mapped-types';
import { CreateApismDto } from './create-apism.dto';

export class UpdateApismDto extends PartialType(CreateApismDto) {}
