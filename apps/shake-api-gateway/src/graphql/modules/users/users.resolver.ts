import { Query, Resolver } from '@nestjs/graphql';
import { Responses } from './dtos/response-test.dto';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}
  @Query(() => Responses, { name: 'GetUser' })
  async getUser() {
    return this.userService.getUser();
  }
}
