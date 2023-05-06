import { Income, IncomeProps } from '../entities/income.entity';

type CreateIncomeProps = Omit<IncomeProps, 'id' | 'createdAt'>
  & { category: string };
type UpdateIncomeProps = Partial<IncomeProps>;

export interface IIncomeRepository {
  create(props: CreateIncomeProps): Promise<Income>;

  list(): Promise<Income[]>;

  findOne(id: string): Promise<Income>;

  udpate(id: string, props: UpdateIncomeProps): Promise<Income>;

  delete(id: string): Promise<null>;
}
