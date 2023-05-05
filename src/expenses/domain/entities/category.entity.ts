
export interface CategoryProps {
  id: string;
  name: string;
}

export class Category {
  constructor(private props: CategoryProps) {
    this.props = {
      id: props?.id,
      name: props?.name
    };
  }

  get id() { return this.props.id }

  get name() { return this.props.name }

  toJson() {
    return {
      ...this.props
    }
  }
}