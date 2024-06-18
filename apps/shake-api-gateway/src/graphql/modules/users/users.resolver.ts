import { Query, Resolver } from '@nestjs/graphql';
import { Responses } from './dtos/response-test.dto';

@Resolver()
export class UsersResolver {
  userService: any;
  @Query(() => Responses, { name: 'GetUser' })
  async getUser() {
    return this.userService.getUser();
  }
}
