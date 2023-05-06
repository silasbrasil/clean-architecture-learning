import { UseCase } from 'src/commons';
import { Income, IncomeProps } from '../domain/entities';
import { CategoryNotFoundException } from '../domain/entities/exceptions';
import { IIncomeRepository, ICategoryRepository } from '../domain/repositories';

type CreateIncomeProps = Omit<IncomeProps, 'id' | 'createdAt'>
  & { category: string };

export class CreateIncomeUsecase implements UseCase<CreateIncomeProps, Income> {
  constructor(
    private readonly incomeRepository: IIncomeRepository,
    private readonly categoryRepository: ICategoryRepository
  ) {}

  async execute(props: CreateIncomeProps): Promise<Income> {
    if (props.category) {
      const category = await this.categoryRepository.findOne(props.category);

      if (!category) throw new CategoryNotFoundException();
    }

    const result = await this.incomeRepository.create({
      ...props
    });

    return result;
  }
}
