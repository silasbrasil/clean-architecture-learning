
interface IncomeProps {
  id: string;
  value: number;
  date: Date;
  description?: string;
  createdAt?: Date;
}

export class Income {
  private constructor(private props: IncomeProps) {}

  static create(props: IncomeProps) {
    return new Income({
      id: props?.id,
      value: props?.value,
      date: props?.date,
      description: props?.description,
      createdAt: props?.createdAt
    });
  }

  get id() { return this.props.id }

  get value() { return this.props.value }

  set value(value: number) { this.props.value = value }

  get date() { return this.props.date }

  set date(date: Date) { this.props.date = date }

  get description() { return this.props.description }

  set description(description: string) { this.props.description = description }

  get createdAt() { return this.props.createdAt }

  toJson(): IncomeProps {
    return {
      ...this.props
    }
  }
}