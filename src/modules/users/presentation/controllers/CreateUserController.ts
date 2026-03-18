import { CreateUserUseCase } from "../../application/use-cases/CreateUserUseCase.js";
import { Controller } from "../protocols/Controller.js";
import { HttpRequest, HttpResponse } from "../protocols/Http.js";

type CreateUserBody = {
  name: string;
  email: string;
};

export class CreateUserController implements Controller {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  async handle(request: HttpRequest<CreateUserBody>): Promise<HttpResponse> {
    const { name, email } = request.body as CreateUserBody;

    const result = await this.createUserUseCase.execute({
      name,
      email,
    });

    return {
      statusCode: 201,
      body: result,
    };
  }
}
