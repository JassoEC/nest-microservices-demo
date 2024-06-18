import { Args, Query, Resolver } from '@nestjs/graphql';
import { Responses } from './dtos/response-test.dto';
import { UsersService } from './users.service';
import { GetUserInput } from './dtos/get-user.input.dto';

@Resolver()
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}
  @Query(() => Responses, { name: 'GetUser' })
  async getUser(@Args('getUserInput') getUserInput: GetUserInput) {
    return this.userService.getUser(getUserInput);
  }
}
