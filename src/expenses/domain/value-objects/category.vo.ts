export interface CategoryProps {
  name: string;
}

export class Category {
  constructor(private props: CategoryProps) {
    this.props = {
      name: props?.name,
    };
  }

  get name() {
    return this.props.name;
  }

  isValid(): boolean | string[] {
    const errors: string[] = [];

    if (!this.name || this.name.length == 1) {
      return errors;
    }

    return true;
  }

  toJson() {
    return {
      ...this.props,
    };
  }
}
