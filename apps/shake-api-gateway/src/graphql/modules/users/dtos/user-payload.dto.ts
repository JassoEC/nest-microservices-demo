import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserPayload {
  @Field(() => String, { description: 'user name' })
  userName: string;

  @Field(() => String, { description: 'user email' })
  email: string;

  @Field(() => String, { description: 'user role' })
  role: string;
}
