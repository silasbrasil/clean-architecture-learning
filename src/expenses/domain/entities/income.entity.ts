import { Category } from "./category.entity";

export interface IncomeProps {
  id: string;
  value: number;
  date: Date;
  category: Category;
  description?: string;
  createdAt?: Date;
}

export class Income {
  constructor(private props: IncomeProps) {
    this.props = {
      id: props?.id,
      value: props?.value,
      date: props?.date,
      category: props?.category,
      description: props?.description,
      createdAt: props?.createdAt
    };
  }

  get id() { return this.props.id }

  get value() { return this.props.value }

  get date() { return this.props.date }

  get description() { return this.props.description }

  get category() { return this.props.category }

  get createdAt() { return this.props.createdAt }

  isValid(): boolean | string[] {
    const errors: string[] = [];

    if (typeof this.id !== 'string')
      errors.push('id must be a uuid');

    if (!this.value || this.value < 0)
      errors.push('value property must be a greater than zero');

    if (!this.date || !(this.date instanceof Date))
      errors.push('date property must be valid date');

    if (errors.length) 
      return errors;

    return true;
  }

  toJson(): IncomeProps {
    return {
      ...this.props
    }
  }
}