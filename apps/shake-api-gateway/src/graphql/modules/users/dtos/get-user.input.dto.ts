import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetUserInput {
  @Field(() => String, { description: 'user email', nullable: false })
  email: string;
}
