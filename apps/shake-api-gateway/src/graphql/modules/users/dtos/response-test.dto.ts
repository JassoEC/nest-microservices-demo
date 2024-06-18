import { Field, ObjectType } from '@nestjs/graphql';
import { UserPayload } from './user-payload.dto';

@ObjectType()
export class Responses {
  @Field(() => String, { description: 'user name' })
  message: string;

  @Field(() => UserPayload, { description: 'response data' })
  payload: UserPayload;
}
