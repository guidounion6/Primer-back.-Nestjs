import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateuserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {

    const ageNumber = parseInt(value.age.toString(), 10)
    console.log(value)

    if (isNaN(ageNumber)) throw new HttpException("age must be number", HttpStatus.BAD_REQUEST)

    return {...value, age: ageNumber};
  }
}
